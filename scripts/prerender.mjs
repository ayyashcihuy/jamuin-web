/**
 * Menanam HTML hasil render React ke dalam dist/index.html — dan sekarang
 * juga ke satu index.html per rute (dist/tentang/index.html, dst.), karena
 * situs ini sudah dipecah jadi beberapa halaman (react-router).
 *
 * Tanpa langkah ini, tiap dist/**\/index.html hanya berisi <div id="root"></div> —
 * crawler yang tidak menjalankan JavaScript (dan pratinjau tautan WhatsApp,
 * Facebook, dsb.) tidak akan melihat apa pun. Setelah langkah ini, seluruh
 * teks halaman sudah ada di HTML, lalu React menghidrasinya di browser dan
 * mengambil alih routing sebagai SPA.
 *
 * Dijalankan otomatis oleh `npm run build`.
 */
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(root, 'dist')
// pathToFileURL: import() dinamis butuh URL file://, bukan path Windows mentah (D:\...).
const SSR_BUNDLE = pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js'))

const PLACEHOLDER = '<!--app-html-->'

/** Tag yang diangkat React 19 ke awal keluaran render, untuk dipindah ke <head>. */
const HOISTED = [
  /<title[^>]*>[\s\S]*?<\/title>/gi,
  /<meta\b[^>]*?>/gi,
  /<link\b[^>]*?>/gi,
]

/** '/' → dist/index.html, '/tentang' → dist/tentang/index.html, dst. */
function outputPathFor(route) {
  if (route === '/') return path.join(DIST, 'index.html')
  return path.join(DIST, route.replace(/^\//, ''), 'index.html')
}

function renderPage(appHtmlRaw, template) {
  let appHtml = appHtmlRaw
  const headTags = []

  // React menaruh <title>/<meta>/<link> di dalam markup badan halaman karena
  // kita merender ke sebuah div, bukan ke dokumen penuh. Pindahkan ke <head>.
  for (const pattern of HOISTED) {
    appHtml = appHtml.replace(pattern, (match) => {
      headTags.push(match)
      return ''
    })
  }

  if (!template.includes(PLACEHOLDER)) {
    throw new Error(`Penanda ${PLACEHOLDER} tidak ada di template — prerender dibatalkan.`)
  }

  // Buang <title>/<meta name="description"> cadangan dari template supaya
  // tidak bentrok dengan versi yang dirender komponen <Seo /> tiap halaman.
  const head = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[\s\S]*?>\s*/i, '')

  return head
    .replace('</head>', `  ${headTags.join('\n    ')}\n  </head>`)
    .replace(PLACEHOLDER, appHtml)
}

async function prerender() {
  const { render, routes, siteUrl } = await import(SSR_BUNDLE)

  // Template dasar (hasil `vite build`) sudah berisi tag <script>/<link> ke
  // bundel dengan hash yang benar — dipakai apa adanya untuk tiap rute.
  const template = await readFile(path.join(DIST, 'index.html'), 'utf8')

  let totalKb = 0
  for (const route of routes) {
    const appHtml = render(route)
    const html = renderPage(appHtml, template)
    const outPath = outputPathFor(route)

    await mkdir(path.dirname(outPath), { recursive: true })
    await writeFile(outPath, html)

    const kb = Buffer.byteLength(html) / 1024
    totalKb += kb
    console.log(`  prerender  → ${path.relative(root, outPath)} (${kb.toFixed(1)} KB)`)
  }

  // Sitemap mendaftar semua rute, domainnya selalu ikut src/data/site.ts.
  const today = new Date().toISOString().slice(0, 10)
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>`,
    )
    .join('\n')

  await writeFile(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  console.log(`  sitemap    → dist/sitemap.xml (${routes.length} rute)`)

  // Bundel SSR hanya alat bantu build — jangan ikut ter-deploy.
  await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true })
}

prerender().catch((err) => {
  console.error(err)
  process.exit(1)
})
