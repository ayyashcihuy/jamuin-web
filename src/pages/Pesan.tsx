import { Seo } from '../components/Seo'
import { Order } from '../components/Order'
import { seo } from '../data/site'

export function Pesan() {
  return (
    <>
      <Seo {...seo.pesan} />
      <Order />
    </>
  )
}
