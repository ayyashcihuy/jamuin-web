import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'
import { Wordmark } from '../ui/Wordmark'
import { ease } from '../ui/motion'
import './Navbar.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Tutup menu mobile otomatis begitu rute berpindah.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Kunci scroll badan halaman selama menu layar penuh terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Halo Jamuin, saya mau pesan.',
  )}`

  return (
    <>
      <motion.header
        className={`nav${scrolled ? ' is-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        <div className="nav-inner shell">
          <NavLink to="/" className="nav-logo" aria-label={`${site.name} — beranda`}>
            <Wordmark />
          </NavLink>

          <nav className="nav-links" aria-label="Navigasi utama">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary btn-sm nav-cta" href={waHref} target="_blank" rel="noreferrer">
              Pesan Sekarang
            </a>
            <button
              type="button"
              className="nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
            >
              <span className={open ? 'is-x' : ''} />
              <span className={open ? 'is-x' : ''} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="nav-sheet"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease }}
          >
            <nav aria-label="Navigasi mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.06 + i * 0.06 }}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <a
              className="btn btn-primary nav-sheet-cta"
              href={waHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Pesan Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
