import { site } from '../data/site'

/**
 * Metadata dokumen.
 *
 * React 19 mengangkat <title>, <meta>, dan <link> yang dirender di mana pun
 * dalam pohon komponen ke dalam <head> — jadi tag-tag ini bisa ikut state
 * (mis. saat nanti ada halaman/rute lain) tanpa pustaka tambahan seperti
 * react-helmet. Saat prerender, semuanya sudah ada di HTML statis yang
 * dikirim ke crawler.
 */
export function Seo({
  title = `${site.name} — Jamu Nusantara & Kopi Rempah`,
  description = site.description,
  path = '/',
}: {
  title?: string
  description?: string
  path?: string
} = {}) {
  const url = `${site.url}${path}`
  // Kartu pratinjau tautan (WhatsApp, Facebook, dll.) — logo di atas kanvas
  // putih 1200×630, dihasilkan `npm run og-image` dari assets/Jamuin.png.
  const ogImage = `${site.url}/og-image.jpg`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        alternateName: `${site.name} ${site.tagline}`,
        url: site.url,
        description: site.description,
        slogan: 'Hidup Sehat Demi Dunia Akhirat',
        sameAs: [site.instagram, site.tiktok],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: 'id-ID',
        publisher: { '@id': `${site.url}/#organization` },
      },
    ],
  }

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={`Logo ${site.name}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- JSON-LD dirakit dari konstanta lokal, bukan input pengguna.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
