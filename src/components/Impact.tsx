import { Picture } from '../ui/Picture'
import { Reveal, RevealItem } from '../ui/motion'
import { impact } from '../data/site'
import './StorySection.css'
import './Impact.css'

/** Section "Yang Perlahan Kami Lihat" — dampak ke konsumen, petani, dan citra jamu. */
export function Impact() {
  return (
    <section className="story story-deep" aria-labelledby="impact-title">
      <div className="shell story-grid is-flip">
        <Reveal className="story-visual" amount={0.15}>
          <RevealItem className="story-shot">
            <Picture name={impact.image} sizes="(max-width: 900px) 88vw, 42vw" ratio={4 / 5} />
          </RevealItem>
        </Reveal>

        <Reveal className="story-copy" amount={0.15}>
          <RevealItem>
            <h2 className="h2" id="impact-title">
              {impact.title}
            </h2>
          </RevealItem>
          <RevealItem>
            <ul className="impact-list">
              {impact.items.map((item) => (
                <li key={item.label}>
                  <span className="impact-label">{item.label}</span>
                  <span className="impact-body">{item.body}</span>
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
