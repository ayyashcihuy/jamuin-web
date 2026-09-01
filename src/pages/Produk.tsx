import { Seo } from '../components/Seo'
import { Products } from '../components/Products'
import { seo } from '../data/site'

export function Produk() {
  return (
    <>
      <Seo {...seo.produk} />
      <Products />
    </>
  )
}
