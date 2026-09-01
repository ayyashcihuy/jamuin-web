import { Link } from 'react-router-dom'
import { Reveal, RevealItem } from '../ui/motion'
import { profile } from '../data/site'
import './ProdukTeaser.css'

/** Ringkasan enam kategori varian — daftar produk lengkap ada di /produk. */
export function ProdukTeaser() {
  return (
    <section className="ptease section-pad" aria-labelledby="ptease-title">
      <div className="shell">
        <Reveal className="ptease-head">
          <RevealItem>
            <p className="eyebrow">Produk yang Ditawarkan</p>
          </RevealItem>
          <RevealItem>
            <h2 className="h2" id="ptease-title">
              100% bahan alami, tanpa pengawet, enam kategori.
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="ptease-grid" amount={0.15}>
          {profile.productCategories.map((cat) => (
            <RevealItem key={cat.title} className="ptease-card">
              <h3 className="h3">{cat.title}</h3>
              <p className="muted">{cat.body}</p>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal>
          <RevealItem>
            <Link className="btn btn-primary" to="/produk">
              Lihat Semua Varian
            </Link>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
