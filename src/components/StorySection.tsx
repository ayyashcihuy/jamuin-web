import { Picture } from '../ui/Picture'
import { Reveal, RevealItem } from '../ui/motion'
import type { MediaKey } from '../data/media'
import './StorySection.css'

type Props = {
  id: string
  eyebrow?: string
  title: string
  paragraphs: readonly string[]
  image?: MediaKey
  note?: string
  /** Taruh foto di kiri, teks di kanan (default: foto di kanan). */
  flip?: boolean
  tone?: 'paper' | 'deep'
}

/**
 * Blok cerita foto + teks — dipakai berulang di halaman Profil (Draft Revisi
 * 05): proses racikan, asal-usul, warisan keilmuan, dsb. Kalau `image` tidak
 * ada, teks tampil satu kolom penuh (dipakai untuk section yang fotonya
 * belum diterima dari tim).
 */
export function StorySection({ id, eyebrow, title, paragraphs, image, note, flip, tone = 'paper' }: Props) {
  return (
    <section className={`story story-${tone}`} aria-labelledby={id}>
      <div className={`shell story-grid${image ? '' : ' no-image'}${flip ? ' is-flip' : ''}`}>
        {image && (
          <Reveal className="story-visual" amount={0.15}>
            <RevealItem className="story-shot">
              <Picture name={image} sizes="(max-width: 900px) 88vw, 42vw" ratio={4 / 5} />
            </RevealItem>
            {note && (
              <RevealItem className="story-caption">
                <p className="muted">{note}</p>
              </RevealItem>
            )}
          </Reveal>
        )}

        <Reveal className="story-copy" amount={0.15}>
          {eyebrow && (
            <RevealItem>
              <p className="eyebrow">{eyebrow}</p>
            </RevealItem>
          )}
          <RevealItem>
            <h2 className="h2" id={id}>
              {title}
            </h2>
          </RevealItem>
          {paragraphs.map((text, i) => (
            <RevealItem key={i}>
              <p className="lede story-p">{text}</p>
            </RevealItem>
          ))}
          {!image && note && (
            <RevealItem>
              <p className="muted story-note">{note}</p>
            </RevealItem>
          )}
        </Reveal>
      </div>
    </section>
  )
}
