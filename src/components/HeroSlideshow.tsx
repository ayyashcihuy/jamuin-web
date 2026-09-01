import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Picture } from '../ui/Picture'
import { ease, useReducedMotionSafe } from '../ui/motion'
import { categories, heroShowcase, products } from '../data/site'
import type { MediaKey } from '../data/media'

/** Hasil default saat SSR/sebelum JS jalan — juga urutan awal di klien. */
const DEFAULT_TRIO = heroShowcase.slice(0, 3) as MediaKey[]

const INTERVAL_MS = 4500

function pickRandomTrio(pool: readonly MediaKey[]): MediaKey[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
}

/**
 * Foto produk yang berganti otomatis di hero beranda.
 *
 * Tiga foto ditampilkan bergantian (crossfade), tapi TIGA foto itu sendiri
 * dipilih acak dari seluruh varian setiap kali halaman dimuat — jadi
 * pengunjung yang refresh atau membuka dari perangkat lain kemungkinan besar
 * melihat kombinasi berbeda. Pengacakan baru terjadi setelah mount di
 * browser supaya markup SSR dan hidrasi pertama tetap sama persis (server
 * tidak tahu kombinasi acak mana yang akan "menang").
 */
export function HeroSlideshow() {
  const [trio, setTrio] = useState<MediaKey[]>(DEFAULT_TRIO)
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotionSafe()

  useEffect(() => {
    setTrio(pickRandomTrio(heroShowcase))
    setIndex(0)
  }, [])

  useEffect(() => {
    if (reduced || trio.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % trio.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [trio, reduced])

  const activeKey = trio[index] ?? trio[0]
  const activeProduct = products.find((p) => p.image === activeKey)
  const activeAccent = categories.find((c) => c.id === activeProduct?.category)?.accent

  return (
    <div className="hero-slideshow">
      <AnimatePresence>
        <motion.div
          key={activeKey}
          className="hero-slideshow-frame"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.6 } }}
          transition={{ duration: reduced ? 0 : 0.9, ease }}
        >
          <Picture
            name={activeKey}
            alt={activeProduct?.name ? `Segelas ${activeProduct.name} Jamuin` : undefined}
            sizes="(max-width: 900px) 78vw, 40vw"
            priority
            ratio={4 / 5}
          />
        </motion.div>
      </AnimatePresence>

      {activeProduct && (
        <AnimatePresence mode="wait">
          <motion.span
            key={activeProduct.id}
            className="pill hero-tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.25 } }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="dot" style={{ background: activeAccent }} />
            {activeProduct.name}
          </motion.span>
        </AnimatePresence>
      )}

      {trio.length > 1 && (
        <div className="hero-slideshow-dots" role="presentation" aria-hidden="true">
          {trio.map((key, i) => (
            <span key={key} className={`hero-dot${i === index ? ' is-active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  )
}
