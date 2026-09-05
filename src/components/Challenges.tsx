import { Picture } from '../ui/Picture'
import { Reveal, RevealItem } from '../ui/motion'
import { challenges } from '../data/site'
import './Challenges.css'

/** Section "Tidak Semuanya Manis" — tantangan utama yang dihadapi Jamuin. */
export function Challenges() {
  return (
    <section className="challenges section-pad" aria-labelledby="challenges-title">
      <div className="shell">
        <div className={`challenges-head${challenges.image ? ' has-image' : ''}`}>
          {challenges.image && (
            <Reveal className="challenges-visual" amount={0.15}>
              <RevealItem className="challenges-shot">
                <Picture name={challenges.image} sizes="(max-width: 900px) 88vw, 38vw" ratio={4 / 5} />
              </RevealItem>
            </Reveal>
          )}

          <Reveal className="challenges-intro">
            <RevealItem>
              <h2 className="h2" id="challenges-title">
                {challenges.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="lede challenges-lede">{challenges.lede}</p>
            </RevealItem>
            <RevealItem>
              <p className="muted">{challenges.intro}</p>
            </RevealItem>
          </Reveal>
        </div>

        <Reveal className="challenges-grid" amount={0.15}>
          {challenges.items.map((item, i) => (
            <RevealItem key={item.title} className="challenges-card">
              <span className="challenges-index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h3">{item.title}</h3>
              <p className="muted">{item.body}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
