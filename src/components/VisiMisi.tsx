import { Reveal, RevealItem } from '../ui/motion'
import { profile } from '../data/site'
import './VisiMisi.css'

export function VisiMisi() {
  return (
    <section className="visimisi section-pad" aria-labelledby="visimisi-title">
      <div className="shell visimisi-grid">
        <Reveal className="visimisi-vision">
          <RevealItem>
            <p className="eyebrow">Visi</p>
          </RevealItem>
          <RevealItem>
            <h2 className="h2" id="visimisi-title">
              {profile.vision}
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="visimisi-mission" amount={0.15}>
          <RevealItem>
            <p className="eyebrow">Misi</p>
          </RevealItem>
          <RevealItem>
            <ol className="visimisi-list">
              {profile.mission.map((item, i) => (
                <li key={i}>
                  <span className="visimisi-index">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
