import { Link } from 'react-router-dom'
import { Picture } from '../ui/Picture'
import { Reveal, RevealItem } from '../ui/motion'
import { partner, proposals, site } from '../data/site'
import './Kemitraan.css'

/** Ajakan bermitra — sekarang halaman /kemitraan sendiri. */
export function Kemitraan() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Halo Jamuin, saya tertarik dengan program kemitraan.',
  )}`

  return (
    <section className="kemitraan section-pad" id="kemitraan" aria-labelledby="kemitraan-title">
      <div className="kemitraan-grid shell">
        <Reveal className="kemitraan-copy">
          <RevealItem>
            <p className="eyebrow">{partner.eyebrow}</p>
          </RevealItem>
          <RevealItem>
            <h1 className="h2" id="kemitraan-title">
              {partner.title}
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="lede kemitraan-lede">{partner.lede}</p>
          </RevealItem>
          <RevealItem>
            <div className="kemitraan-actions">
              <a className="btn btn-primary" href={waHref} target="_blank" rel="noreferrer">
                Konsultasi Kemitraan
              </a>
              <Link className="btn btn-ghost" to="/kontak">
                Hubungi Kami
              </Link>
            </div>
          </RevealItem>
        </Reveal>

        <Reveal className="kemitraan-visual" amount={0.15}>
          <RevealItem className="kemitraan-shot">
            <Picture name={partner.heroImage} sizes="(max-width: 900px) 78vw, 40vw" ratio={4 / 5} />
          </RevealItem>
        </Reveal>
      </div>

      <div className="shell">
        <Reveal className="proposal" amount={0.15}>
          <RevealItem>
            <p className="eyebrow">Proposal Kemitraan</p>
          </RevealItem>
          <RevealItem>
            <h2 className="h3 proposal-title">Pelajari detail lengkapnya.</h2>
          </RevealItem>

          <RevealItem>
            <ul className="proposal-grid">
              {proposals.map((p) => (
                <li key={p.label} className="proposal-card">
                  <h3 className="h3">{p.label}</h3>
                  <p className="muted">{p.description}</p>
                  <a className="btn btn-ghost btn-sm" href={p.href} target="_blank" rel="noreferrer">
                    {p.cta}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path
                        d="M2 11 11 2M4 2h7v7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
