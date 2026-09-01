import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { HeroSlideshow } from './HeroSlideshow'
import { SplitWords, ease, useReducedMotionSafe } from '../ui/motion'
import { hero, site } from '../data/site'
import './Hero.css'

/** Hero halaman Beranda — pintu masuk pertama situs. */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotionSafe()

  // Parallax halus: gambar bergerak sedikit lebih lambat dari halaman.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70])
  const glow = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Halo Jamuin, saya mau pesan.',
  )}`

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-grid shell">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="display hero-title">
            <SplitWords text={hero.titleLead} className="hero-title-lead" delay={0.15} />
            <SplitWords text={hero.titleMain} className="hero-title-main" delay={0.22} />
          </h1>

          <motion.p
            className="lede hero-lede"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.42 }}
          >
            {hero.lede}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.52 }}
          >
            <a className="btn btn-primary" href={waHref} target="_blank" rel="noreferrer">
              {hero.ctaPrimary}
            </a>
            <a className="btn btn-ghost" href="/produk">
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
        >
          {/* Cahaya hangat di belakang gelas, memudar saat halaman digulir. */}
          <motion.span
            className="hero-glow"
            aria-hidden="true"
            style={{ opacity: glow }}
          />

          <motion.div
            className="hero-shot"
            animate={{ y: reduced ? 0 : [0, -12, 0] }}
            transition={{ duration: 7, repeat: reduced ? 0 : Infinity, ease: 'easeInOut' }}
          >
            <HeroSlideshow />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="/tentang"
        className="hero-scroll"
        aria-label="Selengkapnya tentang Jamuin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <span className="hero-scroll-line" aria-hidden="true" />
        Selengkapnya
      </motion.a>
    </section>
  )
}
