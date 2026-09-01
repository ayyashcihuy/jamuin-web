import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Picture } from '../ui/Picture'
import { ease } from '../ui/motion'
import { categories, formatPrice, priceTierLabels, site, type PriceTier, type Product } from '../data/site'
import './ProductDialog.css'

const TIER_ORDER: (keyof PriceTier)[] = ['r', 'l', 'h', 'a']

/** Panel detail varian. Muncul dari bawah di mobile, mengambang di desktop. */
export function ProductDialog({ product, onClose }: { product: Product; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Kunci scroll latar, pindahkan fokus ke panel, lalu kembalikan saat ditutup.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !panelRef.current) return

      // Tahan fokus di dalam panel selama terbuka.
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  const cat = categories.find((c) => c.id === product.category)
  const tiers = TIER_ORDER.filter((t) => product.price[t] != null)

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Halo Jamuin, saya mau pesan ${product.name}.`,
  )}`

  return (
    <motion.div
      className="dialog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease }}
    >
      <div className="dialog-scrim" onClick={onClose} aria-hidden="true" />

      <motion.div
        ref={panelRef}
        className={`dialog-panel${product.image ? '' : ' no-image'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98, transition: { duration: 0.2 } }}
        transition={{ duration: 0.45, ease }}
      >
        <button ref={closeRef} type="button" className="dialog-close" onClick={onClose} aria-label="Tutup detail">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="m2 2 11 11M13 2 2 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {product.image && (
          <div className="dialog-shot">
            <Picture name={product.image} sizes="(max-width: 760px) 92vw, 340px" ratio={4 / 5} priority />
          </div>
        )}

        <div className="dialog-body">
          <span className="pill dialog-cat">
            <span className="dot" style={{ background: cat?.accent }} />
            {cat?.label}
            {product.popular && ' · Favorit'}
          </span>

          <h3 className="h2 dialog-title" id="dialog-title">
            {product.name}
          </h3>

          {product.blurb && <p className="lede">{product.blurb}</p>}

          <ul className="dialog-price" aria-label="Harga">
            {tiers.map((t) => (
              <li key={t}>
                <span className="muted">{priceTierLabels[t]}</span>
                <strong>{formatPrice(product.price[t]!)}</strong>
              </li>
            ))}
          </ul>

          <div className="dialog-actions">
            <a className="btn btn-primary" href={waHref} target="_blank" rel="noreferrer">
              Pesan {product.name}
            </a>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Kembali
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
