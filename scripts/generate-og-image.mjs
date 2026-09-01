/**
 * Membuat gambar pratinjau tautan (Open Graph) dari logo Jamuin.
 *
 * WhatsApp, Facebook, dll. mengambil satu gambar tetap berukuran 1200×630
 * (rasio 1.91:1) untuk kartu pratinjau saat tautan situs ini dibagikan —
 * bukan salah satu gambar responsif dari <Picture>. Skrip ini menaruh logo
 * di tengah kanvas putih pada ukuran itu, supaya kartunya bersih seperti
 * situs-situs resmi lain, bukan kotak putih polos atau foto yang kepotong.
 *
 * Jalankan: npm run og-image
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(root, 'assets', 'Jamuin.png')
const OUT = path.join(root, 'public', 'og-image.jpg')

const WIDTH = 1200
const HEIGHT = 630
// Logo dibiarkan agak kecil relatif kanvas — banyak ruang kosong di
// sekelilingnya, konsisten dengan gaya situs ("banyak ruang kosong").
const LOGO_WIDTH = 640

async function build() {
  const logoBuf = await readFile(SRC)
  const logo = await sharp(logoBuf).resize(LOGO_WIDTH).toBuffer()

  const card = await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 3, background: '#ffffff' },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer()

  await writeFile(OUT, card)
  console.log(`  og-image  →  public/og-image.jpg (${WIDTH}×${HEIGHT}, ${(card.length / 1024).toFixed(1)} KB)`)
}

build().catch((err) => {
  console.error(err)
  process.exit(1)
})
