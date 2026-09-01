import { Seo } from '../components/Seo'
import { Reveal, RevealItem } from '../ui/motion'
import { socials } from '../components/Footer'
import { seo, site } from '../data/site'
import './Kontak.css'

/** Halaman Kontak — dulunya cuma footer, sekarang berdiri sendiri. */
export function Kontak() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Halo Jamuin, saya mau tanya-tanya.',
  )}`

  return (
    <>
      <Seo {...seo.kontak} />
      <section className="kontak section-pad" aria-labelledby="kontak-title">
        <div className="kontak-grid shell">
          <Reveal className="kontak-copy">
            <RevealItem>
              <p className="eyebrow">Kontak</p>
            </RevealItem>
            <RevealItem>
              <h1 className="h2" id="kontak-title">
                Ada pertanyaan? Kami siap bantu, setiap hari.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="lede kontak-lede">
                Hubungi kami lewat WhatsApp untuk respons paling cepat, atau lewat email dan
                Instagram kalau kamu lebih suka itu.
              </p>
            </RevealItem>

            <RevealItem>
              <ul className="kontak-list" aria-label="Cara menghubungi kami">
                <li>
                  <span className="kontak-label">WhatsApp</span>
                  <a href={waHref} target="_blank" rel="noreferrer">
                    +{site.whatsapp}
                  </a>
                </li>
                <li>
                  <span className="kontak-label">Email</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <span className="kontak-label">Instagram</span>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    {site.instagramHandle}
                  </a>
                </li>
              </ul>
            </RevealItem>

            <RevealItem>
              <div className="kontak-actions">
                <a className="btn btn-primary" href={waHref} target="_blank" rel="noreferrer">
                  Chat WhatsApp
                </a>
                <a className="btn btn-ghost" href="/pesan">
                  Buat Pesanan
                </a>
              </div>
            </RevealItem>
          </Reveal>

          <Reveal className="kontak-panel" amount={0.15}>
            <RevealItem className="kontak-card">
              <p className="foot-label kontak-card-label">Jam Operasional</p>
              <ul className="kontak-hours" aria-label="Jam operasional">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span className="order-dots" aria-hidden="true" />
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>

              <div className="rule" />

              <p className="foot-label kontak-card-label">Ikuti Kami</p>
              <ul className="kontak-socials">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d={s.path} />
                      </svg>
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </Reveal>
        </div>
      </section>
    </>
  )
}
