import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// `npm run build` menanam HTML hasil prerender ke dalam #root — hidrasi saja
// agar markup itu tidak dibuang dan dirender ulang. Di `npm run dev` (belum
// di-build), #root masih persis seperti di index.html: cuma komentar
// `<!--app-html-->`. Komentar TETAP terhitung sebagai child node, jadi
// `hasChildNodes()` selalu true dan salah memilih hydrateRoot() di dev —
// React lalu mencoba mencocokkan pohonnya ke (hampir) tidak ada apa-apa,
// gagal, lalu membangun ulang seluruh tree dari nol saat itu juga. Ini bisa
// kelihatan seperti bagian halaman (mis. navbar) sempat/kadang hilang.
// `childElementCount` cuma menghitung elemen sungguhan, bukan komentar,
// jadi ini yang jadi penanda "apakah #root sudah berisi HTML hasil prerender".
if (container.childElementCount > 0) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
