import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Picture } from '../ui/Picture'
import { Reveal, RevealItem, useReducedMotionSafe } from '../ui/motion'
import { lifestyle } from '../data/site'
import type { MediaKey } from '../data/media'
import './Lifestyle.css'

export function Lifestyle() {
  return (
    <section className="life section-pad" aria-labelledby="life-title">
      <div className="shell">
        <Reveal className="life-head">
          <RevealItem>
            <p className="eyebrow">Sehari-hari</p>
          </RevealItem>
          <RevealItem>
            <h2 className="h2" id="life-title">
              Bukan minuman untuk momen istimewa.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="lede life-intro">
              Jamu paling berguna justru saat dijadikan kebiasaan — di sela latihan,
              di perjalanan, atau sekadar menemani sore di rumah.
            </p>
          </RevealItem>
        </Reveal>

        <ul className="life-grid">
          {lifestyle.map((item, i) => (
            <LifestyleCard key={item.image} {...item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function LifestyleCard({
  image,
  title,
  body,
  index,
}: {
  image: MediaKey
  title: string
  body: string
  index: number
}) {
  const ref = useRef<HTMLLIElement>(null)
  const reduced = useReducedMotionSafe()

  // Tiap gambar bergeser dengan kecepatan sedikit berbeda supaya barisnya hidup.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const depth = reduced ? 0 : 26 + index * 12
  const enter = reduced ? { duration: 0 } : { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const, delay: index * 0.08 }
  const y = useTransform(scrollYProgress, [0, 1], [depth, -depth])

  return (
    <motion.li
      ref={ref}
      className="life-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={enter}
    >
      <div className="life-frame">
        {/* Gambar dibuat lebih tinggi dari bingkainya agar ada ruang untuk bergeser. */}
        <motion.div className="life-parallax" style={{ y }}>
          <Picture
            name={image}
            sizes="(max-width: 720px) 88vw, 31vw"
            ratio={1}
          />
        </motion.div>
      </div>

      <div className="life-text">
        <h3 className="h3">{title}</h3>
        <p className="muted">{body}</p>
      </div>
    </motion.li>
  )
}
