import { Seo } from '../components/Seo'
import { About } from '../components/About'
import { StorySection } from '../components/StorySection'
import { Impact } from '../components/Impact'
import { Challenges } from '../components/Challenges'
import { VisionMission } from '../components/VisionMission'
import { ProdukTeaser } from '../components/ProdukTeaser'
import { Legalitas } from '../components/Legalitas'
import { Lifestyle } from '../components/Lifestyle'
import { competency, origin, process, seo } from '../data/site'

/** Halaman Profil Perusahaan — alur cerita Draft Revisi 05. */
export function Tentang() {
  return (
    <>
      <Seo {...seo.tentang} />
      <About />

      <StorySection
        id="process-title"
        title={process.title}
        paragraphs={process.paragraphs}
        image={process.image}
        tone="deep"
      />

      <StorySection
        id="origin-title"
        title={origin.title}
        paragraphs={origin.paragraphs}
        image={origin.image}
        flip
      />

      <Impact />
      <Challenges />

      <StorySection
        id="competency-title"
        title={competency.title}
        paragraphs={competency.paragraphs}
        image={competency.image}
        note={competency.note}
        tone="deep"
        flip
      />

      <VisionMission />
      <ProdukTeaser />
      <Legalitas />
      <Lifestyle />
    </>
  )
}
