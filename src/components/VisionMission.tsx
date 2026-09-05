import { Reveal, RevealItem } from '../ui/motion'
import { visionMission } from '../data/site'
import './VisionMission.css'

/** Visi & Misi baru (Draft Revisi 05) — dibuka dengan tagline brand. */
export function VisionMission() {
  return (
    <section className="vm section-pad" aria-labelledby="vm-title">
      <div className="shell">
        <Reveal className="vm-head">
          <RevealItem>
            <h2 className="display vm-tagline" id="vm-title">
              {visionMission.tagline}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="lede vm-lede">{visionMission.lede}</p>
          </RevealItem>
        </Reveal>

        <div className="vm-grid">
          <Reveal className="vm-vision">
            <RevealItem>
              <p className="eyebrow">Visi</p>
            </RevealItem>
            <RevealItem>
              <p className="h3 vm-vision-text">{visionMission.vision}</p>
            </RevealItem>
          </Reveal>

          <Reveal className="vm-mission" amount={0.15}>
            <RevealItem>
              <p className="eyebrow">Misi</p>
            </RevealItem>
            <RevealItem>
              <ol className="vm-mission-list">
                {visionMission.mission.map((item, i) => (
                  <li key={i}>
                    <span className="vm-index">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
