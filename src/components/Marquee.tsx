import { ingredients } from '../data/site'
import './Marquee.css'

/**
 * Pita bahan yang berjalan pelan antara hero dan section Tentang.
 *
 * Daftar digandakan dua kali dan digeser sejauh -50%, sehingga sambungannya
 * tidak terlihat. Animasinya murni CSS (transform saja) agar tidak membebani
 * thread utama saat halaman digulir.
 */
export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-list" key={copy}>
            {ingredients.map((item) => (
              <li key={item}>
                {item}
                <span className="marquee-sep">✳</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="sr-only">
        Bahan yang dipakai Jamuin: {ingredients.join(', ')}.
      </p>
    </div>
  )
}
