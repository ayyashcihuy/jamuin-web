import { site } from '../data/site'
import './Wordmark.css'

/**
 * Logo resmi Jamuin — di-crop & di-trim dari assets/Jamuin.png (sumber yang
 * sama dipakai scripts/generate-og-image.mjs).
 *
 * ⚠️ Sengaja disimpan di public/jamuin-logo.png, BUKAN public/media/ — folder
 * itu dihapus-total lalu dibangun ulang tiap `npm run images` (lihat
 * scripts/optimize-images.mjs), jadi berkas apa pun yang ditaruh manual di
 * sana akan ikut terhapus saat pipeline gambar produk dijalankan lagi.
 */
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark${compact ? ' is-compact' : ''}`}>
      <img
        className="wordmark-img"
        src="/jamuin-logo.png"
        alt={`${site.name} — ${site.tagline}`}
      />
    </span>
  )
}
