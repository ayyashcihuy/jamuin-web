import { useRef, useState, useEffect } from 'react'
import { media, type MediaKey } from '../data/media'

type Props = {
  name: MediaKey
  /** Atribut `sizes`; makin akurat, makin kecil berkas yang dipilih browser. */
  sizes: string
  alt?: string
  /** Rasio kotak gambar (lebar/tinggi). Default: rasio asli hasil crop. */
  ratio?: number
  /** Untuk gambar di atas lipatan: memuat segera dan diberi prioritas tinggi. */
  priority?: boolean
  className?: string
  /** Kelas tambahan untuk elemen <img> (mis. efek zoom saat hover). */
  imgClassName?: string
}

/**
 * Gambar responsif dengan AVIF → WebP → JPEG, blur-up LQIP, dan kotak
 * ber-aspect-ratio tetap sehingga tidak pernah menggeser layout.
 */
export function Picture({ name, sizes, alt, ratio, priority = false, className, imgClassName }: Props) {
  const entry = media[name]
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  // Saat hidrasi, gambar dari cache bisa sudah selesai dimuat sebelum React
  // sempat memasang onLoad — cek `complete` agar blur tidak tersangkut.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true)
  }, [])

  const srcset = (list: readonly { w: number; url: string }[]) =>
    list.map((s) => `${s.url} ${s.w}w`).join(', ')

  const fallback = entry.sources.jpeg.at(-1)!.url

  return (
    <div
      className={`pic${loaded ? ' is-loaded' : ''}${className ? ` ${className}` : ''}`}
      style={{
        aspectRatio: ratio ?? entry.width / entry.height,
        backgroundImage: `url("${entry.lqip}")`,
      }}
    >
      <picture>
        <source type="image/avif" srcSet={srcset(entry.sources.avif)} sizes={sizes} />
        <source type="image/webp" srcSet={srcset(entry.sources.webp)} sizes={sizes} />
        <img
          ref={imgRef}
          src={fallback}
          srcSet={srcset(entry.sources.jpeg)}
          sizes={sizes}
          alt={alt ?? entry.alt}
          width={entry.width}
          height={entry.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setLoaded(true)}
          className={imgClassName}
        />
      </picture>
    </div>
  )
}

/** URL varian terbesar — dipakai untuk `<link rel="preload">` pada hero. */
export function largestSource(name: MediaKey) {
  return media[name].sources.avif.at(-1)!.url
}
