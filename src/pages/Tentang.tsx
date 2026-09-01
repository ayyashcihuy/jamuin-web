import { Seo } from '../components/Seo'
import { About } from '../components/About'
import { Timeline } from '../components/Timeline'
import { VisiMisi } from '../components/VisiMisi'
import { NilaiNilai } from '../components/NilaiNilai'
import { ProdukTeaser } from '../components/ProdukTeaser'
import { Legalitas } from '../components/Legalitas'
import { Lifestyle } from '../components/Lifestyle'
import { seo } from '../data/site'

/** Halaman Profil Perusahaan — ringkasan Company Profile Jamuin. */
export function Tentang() {
  return (
    <>
      <Seo {...seo.tentang} />
      <About />
      <Timeline />
      <VisiMisi />
      <NilaiNilai />
      <ProdukTeaser />
      <Legalitas />
      <Lifestyle />
    </>
  )
}
