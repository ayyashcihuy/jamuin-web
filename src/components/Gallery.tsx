import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Picture } from '../ui/Picture'
import { Reveal, RevealItem, ease } from '../ui/motion'
import { gallery } from '../data/site'
import './Gallery.css'

/** Grid galeri foto asli gerai + lightbox saat salah satu foto diklik. */
export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <Reveal className="gallery-grid" amount={0.1}>
        {gallery.map((item, i) => (
          <RevealItem key={item.image} className="gallery-item">
            <button
              type="button"
              className="gallery-thumb"
              onClick={() => setActive(i)}
              aria-label={`Perbesar foto: ${item.caption}`}
            >
              <Picture
                name={item.image}
                sizes="(max-width: 620px) 46vw, (max-width: 1000px) 30vw, 22vw"
                ratio={1}
                imgClassName="gallery-img"
              />
              <span className="gallery-caption">{item.caption}</span>
            </button>
          </RevealItem>
        ))}
      </Reveal>

      <AnimatePresence>
        {active !== null && (
          <Lightbox index={active} onClose={() => setActive(null)} onChange={setActive} />
        )}
      </AnimatePresence>
    </>
  )
}

function Lightbox({
  index,
  onClose,
  onChange,
}: {
  index: number
  onClose: () => void
  onChange: (i: number) => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = gallery[index]

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % gallery.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [index, onClose, onChange])

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
    >
      <div className="lightbox-scrim" onClick={onClose} aria-hidden="true" />

      <motion.div
        className="lightbox-panel"
        role="dialog"
        aria-modal="true"
        aria-label={item.caption}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease }}
      >
        <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose} aria-label="Tutup">
          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="m2 2 11 11M13 2 2 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={() => onChange((index - 1 + gallery.length) % gallery.length)}
          aria-label="Foto sebelumnya"
        >
          <svg width="18" height="18" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M8 2 3 6.5 8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="lightbox-shot">
          <Picture name={item.image} sizes="90vw" ratio={1} priority />
        </div>

        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={() => onChange((index + 1) % gallery.length)}
          aria-label="Foto berikutnya"
        >
          <svg width="18" height="18" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M5 2 10 6.5 5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <p className="lightbox-caption">{item.caption}</p>
      </motion.div>
    </motion.div>
  )
}
