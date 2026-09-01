import { Reveal, RevealItem } from '../ui/motion'
import { profile } from '../data/site'
import './NilaiNilai.css'

export function NilaiNilai() {
  return (
    <section className="nilai section-pad" aria-labelledby="nilai-title">
      <div className="shell">
        <Reveal className="nilai-head">
          <RevealItem>
            <p className="eyebrow">Nilai-Nilai Perusahaan</p>
          </RevealItem>
          <RevealItem>
            <h2 className="h2" id="nilai-title">
              Enam prinsip yang kami jaga di setiap gerai.
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="nilai-grid" amount={0.15}>
          {profile.values.map((value, i) => (
            <RevealItem key={value.title} className="nilai-card">
              <span className="nilai-index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h3">{value.title}</h3>
              <p className="muted">{value.body}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
