import { motion, useReducedMotion, type Variants } from 'motion/react'
import { Fragment, useEffect, useState, type ReactNode } from 'react'

/** Easing khas situs ini: keluar cepat, mendarat pelan. */
export const ease = [0.22, 0.61, 0.36, 1] as const

/**
 * Versi `useReducedMotion` yang aman untuk hidrasi.
 *
 * Di server nilainya selalu false (tidak ada matchMedia). Kalau komponen
 * langsung memakai nilai aslinya pada render pertama di browser, markup klien
 * berbeda dari markup server — dan React membiarkan atribut style bawaan
 * server apa adanya, sehingga `opacity: 0` hasil SSR tidak pernah hilang dan
 * seluruh teks jadi tak terlihat bagi pengguna yang mengaktifkan "Reduce
 * Motion". Karena itu nilai sebenarnya baru dipakai setelah mount.
 *
 * Konsekuensinya: bentuk pohon komponen tidak boleh bercabang berdasarkan
 * nilai ini — cukup panjang/duration animasinya yang menyesuaikan.
 */
export function useReducedMotionSafe(): boolean {
  const reduced = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? Boolean(reduced) : false
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

/** Kondisi akhir yang sama, tapi langsung — untuk yang meminta kurangi gerak. */
const fadeUpInstant: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0 } },
}

/** Bungkus induk agar anak-anaknya masuk bergantian. */
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
})

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Seberapa jauh elemen harus masuk viewport sebelum animasi jalan. */
  amount?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'footer'
}

/**
 * Memunculkan anak-anaknya saat masuk viewport, sekali saja.
 *
 * `data-reveal` dipakai aturan <noscript> di index.html supaya konten tetap
 * terbaca kalau JavaScript gagal dimuat.
 */
export function Reveal({ children, className, delay = 0, amount = 0.2, as = 'div' }: RevealProps) {
  const reduced = useReducedMotionSafe()
  const Tag = motion[as]

  return (
    <Tag
      data-reveal
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: reduced ? 0 : delay,
            staggerChildren: reduced ? 0 : 0.08,
          },
        },
      }}
    >
      {children}
    </Tag>
  )
}

/** Satu baris/blok yang ikut irama <Reveal> induknya. */
export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotionSafe()
  return (
    <motion.div data-reveal className={className} variants={reduced ? fadeUpInstant : fadeUp}>
      {children}
    </motion.div>
  )
}

/**
 * Judul yang muncul kata demi kata. Tiap kata dibungkus span ber-overflow
 * hidden sehingga terlihat naik dari balik garis.
 */
export function SplitWords({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotionSafe()
  const words = text.split(' ')

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={stagger(reduced ? 0 : delay, reduced ? 0 : 0.055)}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="word">
            <motion.span
              className="word-in"
              variants={{
                hidden: { y: '105%' },
                show: { y: 0, transition: { duration: reduced ? 0 : 0.85, ease } },
              }}
            >
              {word}
            </motion.span>
          </span>
          {/* Spasi sungguhan di DOM — bukan ::after — supaya teks tetap utuh
              saat disalin, dibaca screen reader, atau diambil crawler. */}
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </motion.span>
  )
}

export { motion }
