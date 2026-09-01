import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './App'
import { seo, site } from './data/site'

/** Dipakai scripts/prerender.mjs untuk menghasilkan HTML statis tiap rute. */
export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

/** Satu sumber daftar rute — dipakai prerender untuk tahu halaman apa saja
 * yang perlu dirender ke HTML statis, dan sitemap untuk daftar URL-nya. */
export const routes = Object.values(seo).map((p) => p.path)

/** Dipakai prerender untuk menulis sitemap dengan domain yang sama. */
export const siteUrl = site.url
