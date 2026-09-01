# Jamuin — Landing Page

Halaman utama untuk **Jamuin (Kopi & Rempah)**, brand jamu herbal modern.
Satu halaman, putih dominan, foto produk sebagai fokus utama.

Stack: **Vite 8 + React 19 + TypeScript**, animasi dengan **motion** (`motion.div`),
gambar dioptimasi lewat **sharp**. Tanpa framework CSS — semua gaya ada di
CSS biasa yang ditempel per komponen.

---

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
```

| Perintah            | Fungsi                                                              |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Server pengembangan                                                  |
| `npm run images`    | Bangun ulang turunan gambar dari `FOTO/` (lihat di bawah)            |
| `npm run build`     | Build produksi + prerender → `dist/`                                 |
| `npm run preview`   | Cek hasil build secara lokal di port 4173                            |
| `npm run typecheck` | `tsc --noEmit`                                                       |

---

## Struktur

```
FOTO/                     foto asli (sumber, tidak ikut ter-deploy)
public/media/             turunan gambar hasil `npm run images`
scripts/
  optimize-images.mjs     crop → AVIF/WebP/JPEG multi-ukuran + LQIP
  prerender.mjs           menanam HTML hasil render React ke dist/index.html
src/
  data/site.ts            SEMUA teks & data produk — mulai edit dari sini
  data/media.ts           manifest gambar (dihasilkan otomatis)
  ui/                     Picture, Wordmark, helper motion
  components/             satu berkas .tsx + .css per section
```

Tiap section punya komponen sendiri (`Hero`, `About`, `Products`, `Lifestyle`,
`Order`, `Footer`) supaya bisa diubah tanpa menyentuh yang lain.

---

## Gambar

Sumber di `FOTO/` berukuran ~2 MB per berkas — terlalu berat untuk dikirim
apa adanya. `npm run images` mengubahnya jadi:

- **AVIF, WebP, dan JPEG** pada lebar 320 / 520 / 760 / 1120 / 1600 px
  (tidak pernah melebihi ukuran asli), dipilih browser lewat `srcset` + `sizes`
- **LQIP** — placeholder buram ~400 byte yang ditanam langsung di `media.ts`,
  jadi ada gambar samar sejak byte pertama tanpa permintaan jaringan tambahan
- **Dimensi tetap** di manifest, dipakai `<Picture>` untuk memesan ruang layout
  lebih dulu sehingga tidak ada pergeseran konten saat gambar selesai dimuat

Hasilnya: satu foto produk yang tadinya PNG 2,2 MB menjadi **±18 KB** (AVIF 1024w).
Hanya gambar hero yang dimuat `eager`; sisanya `loading="lazy"`.

Mengganti atau menambah foto: taruh di `FOTO/`, daftarkan di array `IMAGES`
dalam `scripts/optimize-images.mjs`, lalu jalankan `npm run images`.

---

## SEO

Situs ini SPA, tapi tidak dikirim sebagai halaman kosong:

1. `npm run build` merender `<App />` di Node (`src/entry-server.tsx`) dan
   menanam hasilnya ke `dist/index.html`. Crawler dan pratinjau tautan
   (WhatsApp, Facebook, X) langsung melihat seluruh teks tanpa menjalankan JS.
2. Di browser React **menghidrasi** markup itu, bukan membuangnya.
3. Tag `<title>`, `<meta>`, dan `<link rel="canonical">` dirender dari komponen
   `<Seo />`. React 19 mengangkatnya sendiri ke `<head>` — jadi metadata tetap
   bisa dinamis (mengikuti state atau rute baru) tanpa `react-helmet`.
4. `dist/sitemap.xml` dibuat otomatis saat build, mengikuti `site.url`.
5. Data terstruktur JSON-LD (`Organization` + `WebSite`) ikut tertanam.

Kalau JavaScript gagal dimuat, aturan `<noscript>` di `index.html`
memaksa elemen ber-animasi tetap terlihat.

---

## Sebelum deploy — yang WAJIB diganti

Semua ada di `src/data/site.ts`, ditandai `TODO`:

| Field                | Sekarang (placeholder) | Ganti dengan               |
| -------------------- | ---------------------- | -------------------------- |
| `url`                | `https://jamuin.co`    | domain produksi sebenarnya |
| `whatsapp`           | `6281234567890`        | nomor WhatsApp resmi       |
| `email`              | `halo@jamuin.co`       | email resmi                |
| `tiktok`             | tebakan                | tautan asli / hapus        |
| `hours`              | perkiraan              | jam operasional resmi      |

Deskripsi tiap varian di `products` juga masih karangan berdasarkan nama —
mohon disesuaikan dengan komposisi sebenarnya. Nama varian sudah mengikuti
nama berkas foto. Harga sengaja belum dicantumkan.

Setelah `url` diganti, perbarui juga `Sitemap:` di `public/robots.txt`.

---

## Deploy ke VPS

Hasil build adalah berkas statis — tidak butuh Node di server.

```bash
npm ci
npm run build
rsync -av --delete dist/ user@server:/var/www/jamuin/
```

Contoh konfigurasi Nginx:

```nginx
server {
    listen 443 ssl http2;
    server_name jamuin.co;
    root /var/www/jamuin;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript image/svg+xml application/json;
    gzip_min_length 1024;

    # Aset ber-hash dari Vite aman di-cache selamanya.
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Turunan gambar tidak ber-hash — cache lama tapi masih bisa divalidasi.
    location /media/ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # SPA satu halaman: apa pun yang tidak ketemu dikembalikan ke index.html.
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

AVIF dan WebP dikirim lewat `<picture>`, jadi tidak perlu negosiasi konten
di sisi server. Kalau ada modul Brotli, aktifkan — CSS/JS mengecil lagi ±15%.

---

## Catatan

- **Font** diambil dari Google Fonts (Fraunces + Plus Jakarta Sans). Untuk
  menghilangkan permintaan ke domain luar, unduh berkas `.woff2`-nya,
  taruh di `public/fonts/`, dan ganti `<link>` di `index.html` dengan
  `@font-face` lokal.
- **Form pemesanan** tidak butuh backend — isian dirangkai jadi pesan WhatsApp
  yang sudah terisi, lalu dibuka di tab baru untuk ditinjau pengguna. Kalau
  nanti ada API, ganti isi `handleSubmit` di `src/components/Order.tsx`.
- **Prefers-reduced-motion** dihormati: animasi masuk jadi seketika, parallax
  dan efek mengambang dimatikan. Lihat catatan di `src/ui/motion.tsx` soal
  kenapa nilai ini baru dipakai setelah mount (kalau tidak, teks bisa tak
  terlihat gara-gara bentrok hidrasi).
- Bundel JS ±116 KB gzip; sebagian besar dari `motion` karena memakai animasi
  layout (`layout` / `layoutId`) pada filter produk.
