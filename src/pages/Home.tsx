import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { Reveal, RevealItem } from '../ui/motion'
import { seo } from '../data/site'
import './Home.css'

/** Tautan pintasan ke tiap halaman — beranda sebagai hub, bukan isi lengkap. */
const explore = [
  {
    href: '/tentang',
    label: 'Profil Perusahaan',
    blurb: 'Cerita, sejarah, visi misi, dan legalitas di balik Jamuin.',
  },
  {
    href: '/produk',
    label: 'Produk',
    blurb: 'Jamu booster, teh herbal, sampai kopi rempah — sebelas varian.',
  },
  {
    href: '/kemitraan',
    label: 'Kemitraan',
    blurb: 'Buka gerai Jamuin di kotamu dengan sistem yang sudah teruji.',
  },
  {
    href: '/pesan',
    label: 'Pesan',
    blurb: 'Tinggalkan nama dan nomor, kami proses pesananmu lewat WhatsApp.',
  },
  {
    href: '/kontak',
    label: 'Kontak',
    blurb: 'Jam operasional, WhatsApp, email, dan media sosial Jamuin.',
  },
] as const

/** Halaman Beranda — pintu masuk pertama situs. */
export function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <Marquee />

      <section className="explore section-pad" aria-labelledby="explore-title">
        <div className="shell">
          <Reveal className="explore-head">
            <RevealItem>
              <p className="eyebrow">Jelajahi Jamuin</p>
            </RevealItem>
            <RevealItem>
              <h2 className="h2" id="explore-title">
                Semua yang perlu kamu tahu, satu langkah lagi.
              </h2>
            </RevealItem>
          </Reveal>

          <Reveal className="explore-grid" amount={0.15}>
            {explore.map((item) => (
              <RevealItem key={item.href} className="explore-item">
                <Link to={item.href} className="explore-card">
                  <span className="h3 explore-label">{item.label}</span>
                  <span className="muted explore-blurb">{item.blurb}</span>
                  <span className="explore-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M2 11 11 2M4 2h7v7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
