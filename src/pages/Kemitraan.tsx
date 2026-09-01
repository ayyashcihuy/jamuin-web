import { Seo } from '../components/Seo'
import { Kemitraan as KemitraanSection } from '../components/Kemitraan'
import { seo } from '../data/site'

export function Kemitraan() {
  return (
    <>
      <Seo {...seo.kemitraan} />
      <KemitraanSection />
    </>
  )
}
