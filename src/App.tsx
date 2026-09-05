import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Tentang } from './pages/Tentang'
import { Produk } from './pages/Produk'
import { Kemitraan } from './pages/Kemitraan'
import { Galeri } from './pages/Galeri'
import { Kontak } from './pages/Kontak'
import './styles/global.css'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tentang" element={<Tentang />} />
        <Route path="produk" element={<Produk />} />
        <Route path="kemitraan" element={<Kemitraan />} />
        <Route path="galeri" element={<Galeri />} />
        <Route path="kontak" element={<Kontak />} />
      </Route>
    </Routes>
  )
}
