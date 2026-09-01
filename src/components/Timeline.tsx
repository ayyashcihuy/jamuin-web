import { Picture } from '../ui/Picture'
import { Reveal, RevealItem } from '../ui/motion'
import { profile } from '../data/site'
import './Timeline.css'

/** Lini masa singkat Jamuin — beberapa tonggak dipasangkan foto produk. */
export function Timeline() {
  return (
    <section className="timeline section-pad" aria-labelledby="timeline-title">
      <div className="shell">
        <Reveal className="timeline-head">
          <RevealItem>
            <p className="eyebrow">Sejarah Singkat</p>
          </RevealItem>
          <RevealItem>
            <h2 className="h2" id="timeline-title">
              Dari satu resep, jadi jaringan yang terus tumbuh.
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="timeline-track" amount={0.1}>
          {profile.timeline.map((item) => (
            <RevealItem key={item.year} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                {'image' in item && (
                  <div className="timeline-shot">
                    <Picture name={item.image} sizes="120px" ratio={1} />
                  </div>
                )}
                <div className="timeline-copy">
                  <p className="timeline-year">{item.year}</p>
                  <h3 className="h3 timeline-title-item">{item.title}</h3>
                  <p className="muted">{item.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
