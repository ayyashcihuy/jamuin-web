import { Link } from 'react-router-dom'
import { Wordmark } from '../ui/Wordmark'
import { nav, site } from '../data/site'
import './Footer.css'

export const socials = [
  {
    label: 'Instagram',
    href: site.instagram,
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.9-11.1a1.55 1.55 0 1 1-1.55-1.55A1.55 1.55 0 0 1 18.9 5.2Z',
  },
  {
    label: 'TikTok',
    href: site.tiktok,
    path: 'M16.5 2h-3v13.1a2.6 2.6 0 1 1-2.2-2.57V9.4a5.7 5.7 0 1 0 5.2 5.68V8.9a6.6 6.6 0 0 0 4 1.35V7.2a3.7 3.7 0 0 1-4-3.6V2Z',
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${site.whatsapp}`,
    path: 'M12 2a10 10 0 0 0-8.6 15.05L2 22l5.08-1.33A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.02.79.81-2.94-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8s-.39-.13-.56.12-.64.8-.78.97-.29.19-.53.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5s.25-.29.37-.44a1.7 1.7 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.56-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.74 4.74 0 0 0 1 2.5 10.85 10.85 0 0 0 4.15 3.66 13.9 13.9 0 0 0 1.39.51 3.33 3.33 0 0 0 1.53.1 2.5 2.5 0 0 0 1.64-1.16 2.03 2.03 0 0 0 .14-1.16c-.06-.1-.22-.16-.47-.28Z',
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="foot">
      <div className="foot-inner shell">
        <div className="foot-brand">
          <Wordmark />
          <p className="muted foot-blurb">
            Jamu Nusantara yang diracik ulang untuk hari ini.
          </p>
        </div>

        <nav className="foot-nav" aria-label="Navigasi footer">
          <p className="foot-label">Jelajahi</p>
          {nav.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="foot-contact">
          <p className="foot-label">Kontak</p>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp +{site.whatsapp}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">
            {site.instagramHandle}
          </a>
        </div>

        <div className="foot-social">
          <p className="foot-label">Ikuti</p>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="foot-base shell">
        <p className="muted">© {year} {site.name}. Seluruh hak cipta dilindungi.</p>
        <p className="muted">Hidup Sehat Demi Dunia Akhirat.</p>
      </div>
    </footer>
  )
}
