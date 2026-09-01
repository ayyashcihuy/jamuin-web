import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Picture } from '../ui/Picture'
import { Reveal, RevealItem, ease } from '../ui/motion'
import { categories, formatPrice, priceTierLabels, products, type Category, type PriceTier, type Product } from '../data/site'
import { ProductDialog } from './ProductDialog'
import './Products.css'

type Filter = Category | 'semua'

/** Urutan tier harga yang konsisten di semua kartu/daftar. */
const TIER_ORDER: (keyof PriceTier)[] = ['r', 'l', 'h', 'a']

/** "R Rp15.000 · L Rp16.000 · H Rp10.000" — hanya tier yang tersedia. */
function PriceRow({ price }: { price: PriceTier }) {
  const tiers = TIER_ORDER.filter((t) => price[t] != null)
  return (
    <ul className="price-row" aria-label="Harga">
      {tiers.map((t) => (
        <li key={t} title={priceTierLabels[t]}>
          <span className="price-tier">{t.toUpperCase()}</span>
          {formatPrice(price[t]!)}
        </li>
      ))}
    </ul>
  )
}

export function Products() {
  const [filter, setFilter] = useState<Filter>('semua')
  const [active, setActive] = useState<Product | null>(null)

  const groups = useMemo(() => {
    const cats = categories.filter((c) => c.id !== 'semua' && (filter === 'semua' || c.id === filter))
    return cats.map((cat) => ({
      cat,
      items: products.filter((p) => p.category === cat.id),
    }))
  }, [filter])

  return (
    <section className="products section-pad" id="produk" aria-labelledby="products-title">
      <div className="shell">
        <Reveal className="products-head">
          <RevealItem>
            <p className="eyebrow">Menu & Harga</p>
          </RevealItem>
          <RevealItem>
            <h1 className="h2" id="products-title">
              Menu 2026 — enam varian, satu niat yang sama.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="lede products-intro">
              100% bahan alami tanpa pengawet. Harga mengikuti menu terbaru — R: Reguler (es) ·
              L: Large (es) · H: Hot · A: porsi anak.
            </p>
          </RevealItem>
        </Reveal>

        {/* Filter kategori; pil aktif berpindah dengan layoutId. */}
        <div className="products-filter" role="tablist" aria-label="Kategori produk">
          {categories.map((cat) => {
            const isActive = filter === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-tab${isActive ? ' is-active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {isActive && (
                  <motion.span
                    className="filter-pill"
                    layoutId="filter-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                )}
                <span className="filter-label">{cat.label}</span>
              </button>
            )
          })}
        </div>

        <div className="products-groups">
          {groups.map(({ cat, items }) =>
            cat.id === 'khasiat' ? (
              <KhasiatPanel key={cat.id} accent={cat.accent} items={items} />
            ) : (
              <section key={cat.id} className="pgroup" aria-labelledby={`pgroup-${cat.id}`}>
                <h2 className="h3 pgroup-title" id={`pgroup-${cat.id}`}>
                  <span className="dot" style={{ background: cat.accent }} />
                  Varian {cat.label}
                </h2>
                <motion.ul className="products-grid" layout>
                  <AnimatePresence mode="popLayout" initial={false}>
                    {items.map((product) => (
                      <motion.li
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 24, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.22 } }}
                        transition={{ duration: 0.5, ease }}
                      >
                        <ProductCard product={product} accent={cat.accent} onOpen={() => setActive(product)} />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
              </section>
            ),
          )}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProductDialog product={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProductCard({ product, accent, onOpen }: { product: Product; accent: string; onOpen: () => void }) {
  return (
    <article className="card">
      <div className="card-shot">
        {product.image ? (
          <Picture
            name={product.image}
            sizes="(max-width: 620px) 86vw, (max-width: 1000px) 42vw, 30vw"
            ratio={4 / 5}
            imgClassName="card-img"
          />
        ) : (
          <div className="card-placeholder" style={{ background: `linear-gradient(160deg, ${accent}33, ${accent}12)` }}>
            <CupIcon color={accent} />
          </div>
        )}
        <span className="card-accent" style={{ background: accent }} aria-hidden="true" />
        {product.popular && <span className="pill card-badge">Favorit</span>}
      </div>

      <div className="card-body">
        <h3 className="h3 card-name">{product.name}</h3>
        {product.blurb && <p className="card-notes">{product.blurb}</p>}
        <PriceRow price={product.price} />
        <button type="button" className="btn btn-ghost btn-sm card-cta" onClick={onOpen}>
          Lihat detail
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 11 11 2M4 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}

/** Varian Khasiat tidak punya foto di menu asal — tampil sebagai daftar dua kolom. */
function KhasiatPanel({ accent, items }: { accent: string; items: Product[] }) {
  return (
    <section className="pgroup" aria-labelledby="pgroup-khasiat">
      <h2 className="h3 pgroup-title" id="pgroup-khasiat">
        <span className="dot" style={{ background: accent }} />
        Varian Khasiat
      </h2>
      <p className="muted khasiat-note">Disajikan panas untuk khasiat maksimal.</p>
      <ul className="khasiat-list">
        {items.map((item) => (
          <li key={item.id}>
            <div className="khasiat-name">
              {item.name}
              {item.popular && <span className="pill card-badge khasiat-badge">Favorit</span>}
              {item.blurb && <span className="muted khasiat-blurb"> — {item.blurb}</span>}
            </div>
            <span className="khasiat-price">{formatPrice(item.price.h!)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CupIcon({ color }: { color: string }) {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 8h14l-1.4 10.2a2 2 0 0 1-2 1.8H8.4a2 2 0 0 1-2-1.8L5 8Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 11.2c.6.5 1 1 1 1.8s-.4 1.3-1 1.8M12.5 11.2c.6.5 1 1 1 1.8s-.4 1.3-1 1.8M15.5 11.2c.5.5.9 1 .9 1.8s-.4 1.3-.9 1.8" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
