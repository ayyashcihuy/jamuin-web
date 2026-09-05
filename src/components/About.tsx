import { Picture } from '../ui/Picture'
import { Reveal, RevealItem } from '../ui/motion'
import { about } from '../data/site'
import './About.css'

/** Intro Profil — "Yang Kami Racik, Yang Kami Tuju" (Draft Revisi 05). */
export function About() {
  return (
    <section className="about section-pad" id="tentang" aria-labelledby="about-title">
      <div className="about-grid shell">
        <Reveal className="about-visual" amount={0.15}>
          <RevealItem className="about-shot">
            <Picture name={about.image} sizes="(max-width: 900px) 88vw, 42vw" ratio={4 / 5} />
          </RevealItem>
        </Reveal>

        <Reveal className="about-copy" amount={0.15}>
          <RevealItem>
            <p className="eyebrow">{about.eyebrow}</p>
          </RevealItem>

          <RevealItem>
            <h1 className="h2" id="about-title">
              {about.title}
            </h1>
          </RevealItem>

          {about.paragraphs.map((text, i) => (
            <RevealItem key={i}>
              <p className="lede about-p">{text}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
