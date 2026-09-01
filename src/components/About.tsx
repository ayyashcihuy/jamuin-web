import { Picture } from '../ui/Picture'
import { Reveal, RevealItem } from '../ui/motion'
import { about } from '../data/site'
import './About.css'

/** Palet netral/earthy untuk badge kandungan — sengaja tidak se-vibrant referensi. */
const TONES: Record<string, string> = {
  kunyit: '#D9A21B',
  jahe: '#C4642B',
  temulawak: '#A8A126',
  kopi: '#6B4326',
}

export function About() {
  return (
    <section className="about section-pad" id="tentang" aria-labelledby="about-title">
      <div className="about-grid shell">
        <Reveal className="about-visual" amount={0.15}>
          <RevealItem className="about-shot">
            <Picture
              name="bottles"
              sizes="(max-width: 900px) 88vw, 42vw"
              ratio={4 / 5}
            />
          </RevealItem>
          <RevealItem className="about-caption">
            <p className="muted">
              Lini <strong>Booster</strong> dalam botol — jahe, kunyit, dan kencur,
              dibuat untuk dibawa pulang.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="about-copy" amount={0.15}>
          <RevealItem>
            <p className="eyebrow">Tentang Jamuin</p>
          </RevealItem>

          <RevealItem>
            <h1 className="h2" id="about-title">
              Warisan yang tidak pernah benar-benar pergi.
            </h1>
          </RevealItem>

          {about.paragraphs.map((text, i) => (
            <RevealItem key={i}>
              <p className="lede about-p">{text}</p>
            </RevealItem>
          ))}

          <RevealItem>
            <ul className="about-badges" aria-label="Kandungan utama">
              {about.badges.map((badge) => (
                <li className="pill" key={badge.label}>
                  <span className="dot" style={{ background: TONES[badge.tone] }} />
                  {badge.label}
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <div className="about-footline">
              <blockquote className="about-quote">"Hidup Sehat Demi Dunia Akhirat"</blockquote>
              <div className="about-stat">
                <strong>{about.stat.value}</strong>
                <span>{about.stat.label}</span>
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
