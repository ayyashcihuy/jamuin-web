import { Seo } from '../components/Seo'
import { Gallery } from '../components/Gallery'
import { Reveal, RevealItem } from '../ui/motion'
import { seo } from '../data/site'
import './Galeri.css'

/** Halaman Galeri — foto asli dari cabang-cabang Jamuin. */
export function Galeri() {
  return (
    <>
      <Seo {...seo.galeri} />
      <section className="section-pad" aria-labelledby="galeri-title">
        <div className="shell">
          <Reveal className="products-head">
            <RevealItem>
              <p className="eyebrow">Galeri</p>
            </RevealItem>
            <RevealItem>
              <h1 className="h2" id="galeri-title">
                Suasana asli di gerai-gerai Jamuin.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="lede products-intro">
                Bukan foto studio — ini gerai, tim, dan pelanggan Jamuin sehari-hari.
              </p>
            </RevealItem>
          </Reveal>

          <div className="galeri-body">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  )
}
