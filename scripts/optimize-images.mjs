/**
 * Membangun turunan gambar siap-web dari folder FOTO/.
 *
 * Sumbernya PNG 1024×1536 (~2 MB/berkas) — terlalu berat untuk dikirim apa
 * adanya. Skrip ini meng-crop ke rasio target, lalu meng-encode ke AVIF + WebP
 * + JPEG pada beberapa lebar, dan menulis manifest (dimensi + LQIP base64) ke
 * src/data/media.ts supaya <Picture> bisa memesan ruang layout lebih dulu
 * (tanpa layout shift) sambil menampilkan blur-up.
 *
 * Jalankan: npm run images
 */
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(root, 'FOTO')
const OUT = path.join(root, 'public', 'media')
const MANIFEST = path.join(root, 'src', 'data', 'media.ts')

/** Kandidat lebar; yang melebihi lebar hasil crop dibuang agar tak upscale. */
const WIDTHS = [320, 520, 760, 1120, 1600]

const QUALITY = { avif: 50, webp: 72, jpeg: 78 }

/** `ratio` = lebar/tinggi setelah crop. `focus` menentukan titik crop sharp. */
const IMAGES = [
  // Varian produk — semua potret 2:3, latar dapur putih, cahaya lembut.
  // Diperbarui dari galeri foto resmi (Google Drive) mengikuti menu harga 01-2026.
  { key: 'jahe', file: 'Jahe Ceria 2.png', ratio: 2 / 3, alt: 'Segelas Jahe Ceria Jamuin berwarna jingga hangat dengan irisan jeruk di atas meja putih' },
  { key: 'jaheBooster', file: 'Jahe Booster 3.png', ratio: 2 / 3, alt: 'Segelas Jahe Booster Jamuin, varian lebih pekat untuk kebutuhan sepanjang hari' },
  { key: 'kunyit', file: 'Kunyit Ceria.png', ratio: 2 / 3, alt: 'Segelas Kunyit Ceria Jamuin berwarna kuning cerah di atas meja dapur putih' },
  { key: 'kunyitBooster', file: 'Kunyit Booster.png', ratio: 2 / 3, alt: 'Segelas Kunyit Booster Jamuin, varian lebih pekat untuk kebutuhan sepanjang hari' },
  { key: 'kencur', file: 'Kencur Ceria.png', ratio: 2 / 3, alt: 'Segelas Kencur Ceria Jamuin berwarna keemasan dengan potongan rempah di dalamnya' },
  { key: 'kencurBooster', file: 'Kencur Booster.png', ratio: 2 / 3, alt: 'Segelas Kencur Booster Jamuin, varian lebih pekat untuk kebutuhan sepanjang hari' },
  { key: 'temulawak', file: 'Temulawak Ceria 2.png', ratio: 2 / 3, alt: 'Segelas Temulawak Ceria Jamuin berwarna kuning kehijauan dengan irisan lemon' },
  { key: 'telang', file: 'Teh Bunga Telang.png', ratio: 2 / 3, alt: 'Segelas Teh Bunga Telang Jamuin dengan gradasi ungu dan lapisan bening di bawahnya' },
  { key: 'tehhijau', file: 'Teh Hijau.png', ratio: 2 / 3, alt: 'Segelas Teh Hijau Jamuin dengan irisan lemon dan biji selasih' },
  { key: 'rosella', file: 'Teh Rosella 2.png', ratio: 2 / 3, alt: 'Segelas Teh Rosella Jamuin berwarna merah delima dengan potongan buah' },
  { key: 'americano', file: 'Americano.png', ratio: 2 / 3, alt: 'Segelas Americano Jamuin dengan gradasi kopi pekat di atas lapisan bening' },
  { key: 'americanoLemon', file: 'Americano Lemon.png', ratio: 2 / 3, alt: 'Segelas Americano Lemon Jamuin dengan irisan lemon di dalam kopi dingin' },
  { key: 'panglima', file: 'Kopi Kerajaan.png', ratio: 2 / 3, alt: 'Segelas Kopi Kerajaan Jamuin di atas meja marmer putih' },
  { key: 'kopsu', file: 'Kopsu.png', ratio: 2 / 3, alt: 'Segelas Kopsu Himalaya Salt Jamuin dengan lapisan krem lembut di bagian atas' },
  { key: 'kopsuCinnamon', file: 'Kopsu Cinnamon.png', ratio: 2 / 3, alt: 'Segelas Kopsu Cinnamon Jamuin dengan taburan bubuk kayu manis di bagian atas' },

  // Lini botol Booster — dipakai di section "Tentang".
  { key: 'bottles', file: 'IMG_1461.jpg', ratio: 1, alt: 'Deretan botol Jamuin Booster — Jahe, Kunyit, dan Kencur — berjajar di atas meja putih' },

  // Lifestyle.
  { key: 'track', file: 'magnific_jax-visual-breakdown-came_Sy7hTXiUb8.png', ratio: 3 / 2, focus: 'south', alt: 'Segelas Jamuin diletakkan di lintasan lari sementara seseorang berlari melintas' },
  { key: 'trail', file: 'magnific_jax-generation-prompt-mar_6AAUQGgiJO.jpg.jpeg', ratio: 1, alt: 'Tangan menggenggam segelas Jamuin kuning saat beristirahat di jalur pendakian' },
  { key: 'kids', file: 'magnific_jax-generation-prompt-mar_p88zwMFehw.jpg.jpeg', ratio: 1, alt: 'Dua anak tertawa sambil mengangkat gelas Jamuin di padang rumput di bawah langit biru' },

  // Galeri gerai — foto asli dari cabang Jamuin (Google Drive tim), dipakai
  // halaman /galeri. Rasio kotak (1:1) supaya grid-nya rapi dari sumber yang
  // campur potret & lanskap.
  { key: 'galSignageTeal', file: 'IMG_0739.jpg', ratio: 1, alt: 'Papan nama gerai Jamuin Kopi & Rempah dengan spanduk ucapan terima kasih di lokasi baru' },
  { key: 'galSignageOrange', file: 'IMG_1239.jpg', ratio: 1, alt: 'Tampak depan gerai Jamuin dengan logo dan pelanggan berjalan masuk' },
  { key: 'galStaffCounter', file: 'IMG_0717.jpg', ratio: 1, alt: 'Barista Jamuin menyiapkan pesanan di balik meja counter' },
  { key: 'galStaffDuo', file: 'IMG_2630.jpg', ratio: 1, alt: 'Dua barista Jamuin tersenyum di balik counter gerai' },
  { key: 'galCustomersFriends', file: 'IMG_0746.jpg', ratio: 1, alt: 'Sekelompok teman duduk santai menikmati minuman Jamuin di gerai' },
  { key: 'galCustomersFamily', file: 'IMG_2562.jpg', ratio: 1, alt: 'Keluarga pelanggan berfoto bersama di depan gerai Jamuin' },
  { key: 'galCustomersBooth', file: 'IMG_2635.jpg', ratio: 1, alt: 'Tiga pelanggan duduk di booth gerai Jamuin sambil memegang minuman' },
  { key: 'galCustomersOutdoor', file: 'IMG_2670.jpg', ratio: 1, alt: 'Sekelompok pelanggan mengobrol santai di meja luar gerai Jamuin' },
  { key: 'galInterior', file: 'IMG_2895.jpg', ratio: 1, alt: 'Suasana interior gerai Jamuin dengan meja, kursi, dan area kasir' },
  { key: 'galCommunityWall', file: 'IMG_7099.jpg', ratio: 1, alt: 'Botol tumbler Jamuin berjajar di samping papan harapan penuh catatan pelanggan' },
  { key: 'galPromoBanner', file: 'IMG_7510.jpg', ratio: 1, alt: 'Spanduk promo Gebyar Akhir Tahun Jamuin terpasang di depan gerai' },
  { key: 'galProductHold', file: 'IMG_8098.jpg', ratio: 1, alt: 'Pelanggan memegang dua gelas minuman Jamuin di depan gerai' },
  { key: 'galTeamBanner', file: 'IMG_9300.jpg', ratio: 1, alt: 'Anggota tim Jamuin memasang spanduk promo di depan gerai' },

  // Foto cerita halaman Profil (Draft Revisi 05).
  { key: 'processReal', file: 'proses-perasan-infuse.jpg', ratio: 1, alt: 'Segelas Jamuin dikelilingi rempah asli — jahe, kunyit, dan kayu manis — bukan bubuk instan' },
  { key: 'communityImpact', file: 'dampak-konsumen-muda.png', ratio: 1, alt: 'Dua anak muda memegang gelas Jamuin sambil bermain basket, mewakili gaya nongkrong sehat generasi muda' },
  { key: 'originStory', file: 'magnific_jax-generation-prompt-mar_kslFHOC16B.jpg', ratio: 1, alt: 'Seseorang membaca buku sambil memegang segelas Jamuin hangat, suasana santai dan personal' },
  { key: 'challengesReal', file: 'magnific_jax-generation-prompt-mar_p8Ic0FHehw.jpg', ratio: 1, alt: 'Tiga gelas Jamuin dengan kaki dan tangan berjalan bersama menyeberang jalan, melambangkan tiga varian rasa' },
  { key: 'ujikom', file: 'sertifikat-ujikom.jpg', ratio: 1, alt: 'Perwakilan Jamuin menerima sertifikat Uji Kompetensi Battra Ramuan Indonesia KKNI Level IV' },
]

async function build() {
  await rm(OUT, { recursive: true, force: true })
  await mkdir(OUT, { recursive: true })

  const manifest = {}
  let totalBytes = 0

  for (const img of IMAGES) {
    const buf = await readFile(path.join(SRC, img.file))
    const base = sharp(buf, { failOn: 'none' }).rotate()
    const meta = await base.metadata()

    // Crop ke rasio target sekali, lalu semua ukuran di-resize dari hasil itu.
    const cropW = Math.min(meta.width, Math.round(meta.height * img.ratio))
    const cropH = Math.round(cropW / img.ratio)
    const cropped = await base
      .resize(cropW, cropH, { fit: 'cover', position: img.focus ?? 'centre' })
      .toBuffer()

    // Jangan pernah upscale; sertakan lebar asli bila lebih kecil dari kandidat terbesar.
    const widths = WIDTHS.filter((w) => w <= cropW)
    if (cropW < WIDTHS.at(-1) && !widths.includes(cropW)) widths.push(cropW)

    const sources = { avif: [], webp: [], jpeg: [] }

    for (const w of widths) {
      const resized = sharp(cropped).resize(w)
      const jobs = [
        ['avif', 'avif', resized.clone().avif({ quality: QUALITY.avif, effort: 5 })],
        ['webp', 'webp', resized.clone().webp({ quality: QUALITY.webp, effort: 5 })],
        ['jpeg', 'jpg', resized.clone().jpeg({ quality: QUALITY.jpeg, mozjpeg: true, progressive: true })],
      ]
      for (const [fmt, ext, pipeline] of jobs) {
        const name = `${img.key}-${w}.${ext}`
        const out = await pipeline.toBuffer()
        await writeFile(path.join(OUT, name), out)
        totalBytes += out.length
        sources[fmt].push({ w, url: `/media/${name}` })
      }
    }

    // LQIP: 16px, di-blur, ditanam sebagai data URI (~400 byte) di manifest.
    const lqip = await sharp(cropped).resize(16).blur(1.1).webp({ quality: 28 }).toBuffer()

    manifest[img.key] = {
      alt: img.alt,
      width: cropW,
      height: cropH,
      lqip: `data:image/webp;base64,${lqip.toString('base64')}`,
      sources,
    }

    console.log(`  ${img.key.padEnd(15)} ${String(cropW).padStart(4)}×${cropH}  →  ${widths.join(' ')}`)
  }

  const ts = `// Dihasilkan otomatis oleh scripts/optimize-images.mjs — jangan diedit manual.
// Jalankan \`npm run images\` untuk membangun ulang dari folder FOTO/.

export type MediaSource = { w: number; url: string }

export type MediaEntry = {
  /** Teks alternatif bawaan; boleh ditimpa per pemakaian. */
  alt: string
  /** Dimensi hasil crop, dipakai untuk memesan rasio kotak gambar. */
  width: number
  height: number
  /** Placeholder blur (data URI WebP ~16px) untuk transisi blur-up. */
  lqip: string
  sources: { avif: MediaSource[]; webp: MediaSource[]; jpeg: MediaSource[] }
}

export const media = ${JSON.stringify(manifest, null, 2)} satisfies Record<string, MediaEntry>

export type MediaKey = keyof typeof media
`
  await writeFile(MANIFEST, ts)

  console.log(`\n  ${IMAGES.length} gambar → ${(totalBytes / 1024 / 1024).toFixed(2)} MB turunan (semua format & ukuran)`)
  console.log(`  manifest ditulis ke src/data/media.ts\n`)
}

build().catch((err) => {
  console.error(err)
  process.exit(1)
})
