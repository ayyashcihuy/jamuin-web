import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

/** Bingkai global tiap halaman — Navbar & Footer tampil di semua rute. */
export function Layout() {
  return (
    <>
      <a className="skip-link" href="#konten">
        Lompat ke konten
      </a>
      <Navbar />
      <main id="konten">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
