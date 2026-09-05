import type { MediaKey } from './media'

/**
 * Satu-satunya sumber data untuk seluruh konten halaman.
 *
 * ⚠️ Nilai bertanda TODO masih placeholder — ganti dengan data Jamuin
 * yang sebenarnya sebelum deploy ke produksi.
 */

export const site = {
  name: 'Jamuin',
  tagline: 'Kopi & Rempah',
  headline: 'Jamuin, Hidup Sehat Demi Dunia Akhirat.',
  description:
    'Jamu Nusantara yang diracik ulang untuk hari ini — rempah pilihan, resep turun-temurun, dan varian kopi herbal. Segar diminum, ringan di badan.',

  /** TODO: ganti dengan domain produksi. Dipakai untuk canonical & Open Graph. */
  url: 'https://jamuin.co',

  /** TODO: ganti dengan nomor WhatsApp resmi (format internasional, tanpa +). */
  whatsapp: '6281234567890',

  instagram: 'https://instagram.com/jamuin.co',
  instagramHandle: '@jamuin.co',
  /** TODO: lengkapi bila kanal ini aktif. */
  tiktok: 'https://tiktok.com/@jamuin.co',
  email: 'halo@jamuin.co',

  /** Semua kanal pemesanan Jamuin, terkumpul di satu tautan. */
  linktree: 'https://linktr.ee/jamuin.co',

  /** TODO: konfirmasi jam operasional tiap outlet. */
  hours: [
    { days: 'Selasa – Jumat', time: '08.00 – 21.00' },
    { days: 'Sabtu – Minggu', time: '07.00 – 21.00' },
    { days: 'Senin', time: 'Tutup' },
  ],
} as const

/**
 * Setiap tab di atas sekarang jadi halaman sendiri (react-router), bukan
 * anchor di satu halaman panjang — `href` di sini adalah path rute.
 */
export const nav = [
  { label: 'Profil', href: '/tentang' },
  { label: 'Produk', href: '/produk' },
  { label: 'Kemitraan', href: '/kemitraan' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Kontak', href: '/kontak' },
] as const

/** Metadata <Seo /> per halaman — dipakai tiap komponen src/pages/*.tsx. */
export const seo = {
  home: {
    path: '/',
    title: `${site.name} — Jamu Nusantara & Kopi Rempah`,
    description: site.description,
  },
  tentang: {
    path: '/tentang',
    title: `Profil Perusahaan — ${site.name}`,
    description:
      'Profil Jamuin: cerita, sejarah, visi misi, nilai perusahaan, serta legalitas dan sertifikasi halal di balik Rempah & Kopi Nusantara.',
  },
  produk: {
    path: '/produk',
    title: `Produk — ${site.name}`,
    description:
      'Jelajahi varian Jamuin: jamu booster, teh herbal, dan kopi rempah — sebelas racikan, satu niat menjaga tubuh tetap sehat.',
  },
  kemitraan: {
    path: '/kemitraan',
    title: `Kemitraan — ${site.name}`,
    description:
      'Bawa Jamuin ke kotamu sendiri lewat sistem kemitraan yang teruji dan transparan.',
  },
  galeri: {
    path: '/galeri',
    title: `Galeri — ${site.name}`,
    description: 'Suasana asli gerai-gerai Jamuin — pelanggan, tim, dan momen sehari-hari di balik layar.',
  },
  kontak: {
    path: '/kontak',
    title: `Kontak — ${site.name}`,
    description: 'Hubungi Jamuin lewat WhatsApp, email, atau Instagram — lihat juga jam operasional kami.',
  },
} as const

/**
 * Konten hero beranda — copywriting diangkat & di-upgrade dari bio Instagram
 * resmi (@jamuin.co: "Ikhtiarkan Sehatmu bersama Jamuin", buka setiap hari
 * 07.00–21.00 WIB) supaya nadanya konsisten dengan kanal sosial brand.
 */
export const hero = {
  eyebrow: 'Jamu Nusantara · Kopi Rempah · Buka Setiap Hari',
  titleLead: 'Ikhtiarkan Sehatmu,',
  titleMain: 'Mulai dari Segelas Jamuin.',
  lede:
    'Rempah pilihan dan resep turun-temurun, diseduh segar setiap hari — supaya ikhtiar sehatmu terasa senikmat menyeruput jamu kesukaan, bukan seperti minum obat.',
  ctaPrimary: 'Pesan Sekarang',
  ctaSecondary: 'Lihat Semua Produk',
} as const

/**
 * Pool foto produk untuk slideshow hero beranda — 3 dari daftar ini dipilih
 * acak di klien setiap kunjungan/refresh (lihat HeroSlideshow.tsx). Urutan
 * tiga pertama juga jadi hasil default saat SSR/JS belum jalan.
 */
export const heroShowcase: MediaKey[] = [
  'kunyit',
  'panglima',
  'telang',
  'jahe',
  'kencur',
  'temulawak',
  'tehhijau',
  'rosella',
  'americano',
  'americanoLemon',
  'kopsu',
]

/**
 * Cerita halaman Profil (Draft Revisi 05) — tujuh section berurutan yang
 * menggantikan copy "Tentang Jamuin" versi lama, ditambah Visi & Misi baru.
 * Redaksi persis dari draft; jangan diubah maknanya.
 */
export const about = {
  eyebrow: 'Kami ingin cerita dulu...',
  title: 'Yang Kami Racik, Yang Kami Tuju',
  paragraphs: [
    'Jamuin adalah usaha berbasis wellness yang berfokus pada modernisasi dan pelestarian budaya minum jamu di Indonesia.',
    'Kami mengolah rempah asli hasil bumi pertiwi menjadi minuman sehat yang kekinian, dengan varian rasa yang disukai generasi muda, tersedia siap minum dan siap seduh. Melalui Jamuin, nongkrong tidak lagi identik dengan minuman tidak sehat.',
  ],
  image: 'bottles' as MediaKey,
} as const

/** Section "Bukan Bubuk, Tapi Perasan dan Infuse Rempah Asli". */
export const process = {
  title: 'Bukan Bubuk, Tapi Perasan dan Infuse Rempah Asli',
  paragraphs: [
    'Jamu terlanjur dibayangkan sebagai bubuk yang entah diproses seperti apa, dan kecurigaan itu bukan tanpa alasan.',
    'Padahal rempahnya tidak pernah salah. Yang menentukan adalah prosesnya: takaran yang pas, perlakuan yang benar, dan pengategorian yang tepat.',
    'Kami memakai rempah TOGA (Tanaman Obat Keluarga) seperti kunyit, jahe, dan kencur, yang diolah lewat dua cara: perasan dan infuse. Bukan bubuk. Karena itu rasanya bersih dan segar, bukan pahit yang harus ditahan.',
  ],
  image: 'processReal' as MediaKey,
} as const

/** Section "Berawal dari Dapur Rumah" — menggantikan Timeline/Sejarah Singkat. */
export const origin = {
  title: 'Berawal dari Dapur Rumah',
  paragraphs: [
    'Perjalanan Jamuin dimulai dari kebiasaan baik di keluarga kami yang rutin merasakan khasiat rempah-rempah Nusantara.',
    'Namun budaya minum jamu perlahan tergerus, ditinggalkan generasi muda yang lebih familiar dengan minuman kekinian. Kami ingin mengubah persepsi bahwa jamu itu pahit atau kuno, menjadi tren gaya hidup sehat yang relevan.',
    'Keinginan menciptakan budaya nongkrong yang lebih berkualitas bagi fisik, pikiran, dan masa depan generasi muda itulah dorongan terbesar lahirnya Jamuin.',
  ],
  image: 'originStory' as MediaKey,
} as const

/** Section "Yang Perlahan Kami Lihat" — dampak ke tiga pemangku kepentingan. */
export const impact = {
  title: 'Yang Perlahan Kami Lihat',
  items: [
    {
      label: 'Bagi konsumen muda',
      body: '‘Mengenal’ pilihan minuman yang sehat saat bersosialisasi, menjadikan konsumsi rempah alami bagian dari keseharian.',
    },
    {
      label: 'Bagi petani',
      body: 'Kemitraan jangka panjang memberikan kepastian harga dan serapan pasar yang stabil.',
    },
    {
      label: `Bagi citra 'Jamu'`,
      body: 'Dari minuman tradisional yang terkesan kuno, menjadi bagian dari produk wellness modern.',
    },
  ],
  image: 'communityImpact' as MediaKey,
} as const

/** Section "Tidak Semuanya Manis" — tantangan yang dihadapi. */
export const challenges = {
  title: 'Tidak Semuanya Manis',
  lede: 'Setiap perjalanan selalu punya lekuk rintangannya sendiri, dan bagi kami, menciptakan racikan yang pas baru separuh dari perjuangan.',
  intro: 'Berikut poin-poin tantangan utama yang kami hadapi:',
  items: [
    {
      title: 'Mengubah Pola Pikir Generasi Muda',
      body: 'Mengikis stigma lama bahwa jamu identik dengan rasa pahit dan kesan kuno.',
    },
    {
      title: 'Formulasi Rasa',
      body: 'Melalui ratusan kali eksperimen demi menjaga keaslian cita rasa rempah, namun tetap ramah di lidah anak muda.',
    },
    {
      title: 'Edukasi Nilai Wellness',
      body: 'Menyampaikan pesan secara persuasif bahwa merawat tubuh dan kulit secara alami adalah bentuk investasi diri jangka panjang.',
    },
  ],
  image: 'challengesReal' as MediaKey,
} as const

/** Section "Bukan Sekadar Warisan Lisan" — legitimasi keilmuan racikan. */
export const competency = {
  title: 'Bukan Sekadar Warisan Lisan',
  paragraphs: [
    'Untuk meletakkan fondasi yang kuat secara keilmuan dan keabsahan produk, kami aktif mengikuti pelatihan kompetensi di bidang kesehatan tradisional, khususnya teknik peracikan minuman dari rempah Indonesia.',
    'Dari situ kami merumuskan standar higienitas, pemilihan bahan baku, dan formulasi resep yang kami pakai hingga kini.',
  ],
  note: 'Foto: sertifikat kompetensi · dokumentasi ujikom',
  image: 'ujikom' as MediaKey,
} as const

/**
 * Visi & Misi baru (Draft Revisi 05, "TAMBAHAN PAGE") — menggantikan
 * profile.vision/mission versi lama.
 */
export const visionMission = {
  tagline: 'Hidup Sehat Demi Dunia Akhirat',
  lede: 'Jika pikiran dan badan kita sehat, kita bisa lebih banyak dalam berbuat kebaikan.',
  vision: 'Melestarikan Warisan Rempah Nusantara Melalui Inovasi Gaya Hidup Sehat Modern.',
  mission: [
    'Meracik dan menghadirkan produk rempah Nusantara yang inovatif, segar, dan ramah di lidah anak muda.',
    'Menormalisasi gaya nongkrong sehat anak muda agar lebih bernilai dan menyehatkan melalui konsumsi rempah alami.',
    'Mereposisi citra jamu sebagai tren gaya hidup modern (glowing & fit) serta simbol investasi kesehatan masa kini dan jangka panjang.',
    'Memberdayakan petani rempah lokal melalui kemitraan pasokan bahan baku yang adil dan berkelanjutan.',
    'Menggemakan kebanggaan keanekaragaman rempah Nusantara dan membawa reputasi jamu Indonesia bersaing di panggung internasional.',
  ],
} as const

/**
 * Konten halaman Profil Perusahaan (/tentang) — diringkas dari Company
 * Profile Jamuin (Waka Food Indonesia, Agustus 2026). Bagian yang bersifat
 * internal/rahasia dagang di dokumen asal (SOP dapur, struktur SDM, sistem
 * payroll, dsb.) sengaja tidak ditampilkan di halaman publik ini.
 */
export const profile = {
  legal: {
    entity: 'Waka Food Indonesia',
    brand: 'Jamuin: Rempah & Kopi Nusantara',
    address: 'Jl. Wibawa Mukti 2, Gg. H. Awi, Jatiasih, Kota Bekasi, Jawa Barat',
    nib: '1203250005498',
  },

  certifications: [
    {
      label: 'Halal MUI',
      detail: 'SH-SD-HALAL JAMUIN · ID32410022220230525',
    },
    {
      label: 'Sertifikasi Jamu',
      detail: 'LSK Kampung Sehat Indonesia · No. 00110826001',
    },
    {
      label: 'Merek Terdaftar (HKI)',
      detail: 'Kelas 43 — Layanan Makanan & Minuman · No. JID2025069176',
    },
    {
      label: 'Legalitas Usaha (NIB)',
      detail: 'Nomor Induk Berusaha 1203250005498',
    },
  ],

  /** Enam kategori varian — detail produk lengkap ada di halaman /produk. */
  productCategories: [
    { title: 'Varian Khasiat', body: 'Disajikan panas untuk manfaat kesehatan maksimal.' },
    { title: 'Varian Segar', body: 'Sehat sekaligus nikmat, disajikan dingin.' },
    { title: 'Varian Kopi', body: 'Racikan kopi rempah untuk pecinta kopi.' },
    { title: 'Varian Teh', body: 'Tenang, teduh, nan damai.' },
    { title: 'Varian Fit & Glow', body: 'Self-care dari dalam, untuk kulit dan tubuh.' },
    { title: 'Varian Creamy', body: 'Gurih & sehat, aman untuk seluruh keluarga.' },
  ],

  /** Gerai yang aktif beroperasi. */
  gerai: ['Jatiasih (Puri Gading)', 'Jatiwarna, Pondok Melati', 'Bintara'],
  geraiCriteria:
    'Lokasi gerai baru dipilih dekat lingkungan kampus & perkantoran, fasilitas kesehatan, communal space, mall, lingkungan sekolah, dan perumahan.',
} as const

/** Enam kategori menu — sama seperti Menu 01-2026 (mengikuti desain Canva resmi). */
export type Category = 'khasiat' | 'segar' | 'kopi' | 'teh' | 'fitglow' | 'creamy'

export const categories: { id: Category | 'semua'; label: string; accent: string }[] = [
  { id: 'semua', label: 'Semua', accent: '#17130F' },
  { id: 'khasiat', label: 'Khasiat', accent: '#C4642B' },
  { id: 'segar', label: 'Segar', accent: '#4E7A3E' },
  { id: 'kopi', label: 'Kopi', accent: '#6B4326' },
  { id: 'teh', label: 'Teh', accent: '#6B4E9E' },
  { id: 'fitglow', label: 'Fit & Glow', accent: '#D9A21B' },
  { id: 'creamy', label: 'Creamy', accent: '#B98430' },
]

/** Harga per ukuran (dalam ribuan Rupiah) — R: Reguler (es) · L: Large (es) · H: Hot · A: porsi Anak. */
export type PriceTier = { r?: number; l?: number; h?: number; a?: number }

export type Product = {
  id: string
  name: string
  category: Category
  /** Khasiat/info singkat — langsung dari Menu 01-2026. */
  blurb?: string
  price: PriceTier
  /** Tanpa foto khusus di menu asal — kartunya tampil tanpa gambar. */
  image?: MediaKey
  /** Ditandai 👍 di menu asal — favorit pelanggan. */
  popular?: boolean
}

/**
 * Menu & harga resmi — mirroring Menu 01-2026 (Canva, diperbarui Jamuin).
 * Harga dalam ribuan Rupiah, mis. 15 = Rp15.000.
 */
export const products: Product[] = [
  // ---------- Varian Khasiat — disajikan panas untuk khasiat maksimal ----------
  { id: 'gula-darah', name: 'Turunin Gula Darah Tinggi', category: 'khasiat', price: { h: 15 } },
  { id: 'redain-batuk', name: 'Redain Batuk', category: 'khasiat', price: { h: 15 }, popular: true },
  { id: 'segerin-badan', name: 'Segerin Badan', category: 'khasiat', price: { h: 15 }, popular: true },
  { id: 'sakit-kepala', name: 'Redain Sakit Kepala', category: 'khasiat', price: { h: 15 } },
  { id: 'keluarin-angin', name: 'Keluarin Angin', category: 'khasiat', price: { h: 8 } },
  { id: 'enakin-tenggorokan', name: 'Enakin Tenggorokan', category: 'khasiat', price: { h: 15 } },
  { id: 'hilangin-pilek', name: 'Hilangin Pilek', category: 'khasiat', price: { h: 15 } },
  { id: 'sahabat-pria', name: 'Sahabat Pria Sejati', category: 'khasiat', price: { h: 15 }, popular: true },
  { id: 'lawan-alergi', name: 'Lawan Alergi', category: 'khasiat', blurb: 'Gatal-gatal.', price: { h: 15 } },
  { id: 'asam-urat', name: 'Ikhtiar Hilang Asam Urat', category: 'khasiat', price: { h: 15 } },
  { id: 'dinginin-demam', name: 'Dinginin Demam', category: 'khasiat', blurb: 'Bisa untuk anak.', price: { h: 15 } },
  { id: 'rawat-rahim', name: 'Rawat Rahim & Redain Haid', category: 'khasiat', price: { h: 15 }, popular: true },
  { id: 'detox-paru', name: 'Detox Paru-Paru', category: 'khasiat', blurb: 'Bisa untuk perokok.', price: { h: 15 } },
  { id: 'lawan-kanker', name: 'Ikhtiar Lawan Kanker', category: 'khasiat', price: { h: 15 } },

  // ---------- Varian Segar — sehat sekaligus nikmat, disajikan dingin ----------
  {
    id: 'jahe-ceria',
    name: 'Jahe Ceria',
    category: 'segar',
    blurb: 'Segar, plong di tenggorokan, lonjakan tenaga dari dalam.',
    price: { r: 15, l: 16, h: 10 },
    image: 'jahe',
    popular: true,
  },
  {
    id: 'kunyit-ceria',
    name: 'Kunyit Ceria',
    category: 'segar',
    blurb: 'Segar, unik, membuatmu ceria hari ini.',
    price: { r: 15, l: 16, h: 10 },
    image: 'kunyit',
  },
  {
    id: 'kencur-ceria',
    name: 'Kencur Ceria',
    category: 'segar',
    blurb: 'Nostalgia masa kecil, sekaligus sumber antioksidan dan anti-inflamasi.',
    price: { r: 15, l: 16, h: 10 },
    image: 'kencur',
    popular: true,
  },
  {
    id: 'jahe-booster',
    name: 'Jahe Booster',
    category: 'segar',
    blurb: 'Semua kebutuhan untuk bekerja sepanjang hari.',
    price: { r: 16, l: 17, h: 14 },
    image: 'jaheBooster',
    popular: true,
  },
  {
    id: 'kunyit-booster',
    name: 'Kunyit Booster',
    category: 'segar',
    blurb: 'Semua kebutuhan badan, segar dan akan membuatmu ceria sepanjang hari.',
    price: { r: 16, l: 17, h: 14 },
    image: 'kunyitBooster',
    popular: true,
  },
  {
    id: 'kencur-booster',
    name: 'Kencur Booster',
    category: 'segar',
    blurb: 'Pencegah segala virus, segar dan akan membuatmu terjaga sepanjang hari.',
    price: { r: 16, l: 17, h: 14 },
    image: 'kencurBooster',
  },

  // ---------- Varian Kopi — pecinta kopi tidak akan kecewa ----------
  { id: 'americano', name: 'Americano', category: 'kopi', price: { r: 13, l: 15 }, image: 'americano' },
  {
    id: 'americano-lemonte',
    name: 'Americano Lemonte',
    category: 'kopi',
    price: { r: 15, l: 16 },
    image: 'americanoLemon',
    popular: true,
  },
  {
    id: 'kopi-kerajaan',
    name: 'Kopi Kerajaan',
    category: 'kopi',
    price: { r: 17, h: 16 },
    image: 'panglima',
    popular: true,
  },
  { id: 'black-coffee', name: 'Black Coffee', category: 'kopi', price: { h: 11 } },
  {
    id: 'kopsu-himalaya-salt',
    name: 'Kopsu Himalaya Salt',
    category: 'kopi',
    price: { r: 17 },
    image: 'kopsu',
    popular: true,
  },
  {
    id: 'kopsu-cinnamon',
    name: 'Kopsu Cinnamon',
    category: 'kopi',
    price: { r: 18 },
    image: 'kopsuCinnamon',
    popular: true,
  },

  // ---------- Varian Teh — tenang, teduh, nan damai ----------
  {
    id: 'teh-hijau',
    name: 'Teh Hijau',
    category: 'teh',
    blurb: 'Teh hijau, Himalaya salt, bunga lawang, chia seed, lemon.',
    price: { r: 15, l: 16, h: 12 },
    image: 'tehhijau',
    popular: true,
  },
  {
    id: 'teh-telang',
    name: 'Teh Telang',
    category: 'teh',
    blurb: 'Bunga telang, Himalaya salt, bunga lawang, chia seed, lemon.',
    price: { r: 15, l: 16, h: 12 },
    image: 'telang',
    popular: true,
  },
  {
    id: 'teh-rosela',
    name: 'Teh Rosela',
    category: 'teh',
    blurb: 'Bunga rosela, Himalaya salt, bunga lawang, chia seed.',
    price: { r: 15, l: 16, h: 12 },
    image: 'rosella',
  },

  // ---------- Varian Fit & Glow — self-care dari dalam ----------
  {
    id: 'beauty-sereh',
    name: 'Beauty Sereh',
    category: 'fitglow',
    blurb: 'Slow-Aging Glow Boost — rahasia memperlambat penuaan.',
    price: { r: 15, l: 17, h: 12 },
    popular: true,
  },
  {
    id: 'lemon-fit',
    name: 'Lemon Fit',
    category: 'fitglow',
    blurb: 'Kunyit lemon Fat Burner — dukungan sistem pencernaan dan pembakar lemak.',
    price: { r: 15, l: 17, h: 12 },
  },

  // ---------- Varian Creamy / Jamu Susu — gurih & sehat, aman untuk keluarga ----------
  {
    id: 'ginger-milk',
    name: 'Ginger Milk',
    category: 'creamy',
    blurb: 'Susu Jahe — enak dan nyaman ditenggorokan.',
    price: { r: 15, l: 17, a: 10 },
    popular: true,
  },
  {
    id: 'golden-glow-latte',
    name: 'Golden Glow Latte',
    category: 'creamy',
    blurb: 'Susu Kunyit — nikmat dan menenangkan.',
    price: { r: 15, l: 17, a: 10 },
  },
  {
    id: 'kencur-soft-latte',
    name: 'Kencur Soft Latte',
    category: 'creamy',
    blurb: 'Susu Kencur — nyaman di perut, bikin badan lebih enak.',
    price: { r: 15, l: 17, a: 10 },
    popular: true,
  },
]

/** Label tiap ukuran harga, dipakai Products & ProductDialog. */
export const priceTierLabels: Record<keyof PriceTier, string> = {
  r: 'Reguler (Es)',
  l: 'Large (Es)',
  h: 'Hot',
  a: 'Porsi Anak',
}

/** 15 → "Rp15.000". Harga di data disimpan dalam ribuan Rupiah. */
export function formatPrice(value: number): string {
  return `Rp${(value * 1000).toLocaleString('id-ID')}`
}

/** Bahan yang berjalan di pita antara hero dan section Tentang. */
export const ingredients = [
  'Kunyit',
  'Jahe Merah',
  'Temulawak',
  'Kencur',
  'Sereh',
  'Bunga Telang',
  'Rosella',
  'Kayu Manis',
  'Madu',
  'Gula Aren',
] as const

/** Konten halaman /kemitraan — lihat src/components/Kemitraan.tsx. */
export const partner = {
  eyebrow: 'Kemitraan',
  title: 'Bawa Jamuin ke kotamu sendiri.',
  lede:
    'Sistem usaha yang teruji dan transparan, supaya kamu bisa membuka gerai Jamuin tanpa harus meraba-raba dari nol.',
  heroImage: 'bottles' as MediaKey,
} as const

/** Proposal kemitraan yang bisa diunduh/dilihat — tautan resmi dari tim Jamuin. */
export const proposals = [
  {
    label: 'Proposal Kemitraan',
    description: 'Rincian investasi, proyeksi, dan skema kemitraan Jamuin secara umum.',
    href: 'https://drive.google.com/file/d/1k1LLmaGa8sqQGmri7A0M3pNw9fUzVMVC/view?usp=sharing',
    cta: 'Lihat Proposal (PDF)',
  },
] as const

export const lifestyle = [
  {
    image: 'track' as MediaKey,
    title: 'Setelah bergerak',
    body: 'Satu gelas untuk memulihkan, bukan untuk menambah beban.',
  },
  {
    image: 'trail' as MediaKey,
    title: 'Di perjalanan',
    body: 'Dibuat segar tiap hari, cukup kuat untuk ikut ke mana pun kamu pergi.',
  },
  {
    image: 'kids' as MediaKey,
    title: 'Untuk semua umur',
    body: 'Tanpa pemanis buatan — aman diminum sekeluarga, setiap hari.',
  },
] as const

/** Halaman /galeri — foto asli dari cabang-cabang Jamuin (bukan foto studio). */
export const gallery: { image: MediaKey; caption: string }[] = [
  { image: 'galSignageTeal', caption: 'Gerai baru, terima kasih atas dukungan #SahabatJamuin' },
  { image: 'galSignageOrange', caption: 'Tampak depan salah satu gerai Jamuin' },
  { image: 'galStaffCounter', caption: 'Barista menyiapkan pesanan di balik counter' },
  { image: 'galStaffDuo', caption: 'Tim Jamuin yang meracik tiap pesanan' },
  { image: 'galCustomersFriends', caption: 'Nongkrong santai bersama teman' },
  { image: 'galCustomersFamily', caption: 'Momen keluarga di depan gerai Jamuin' },
  { image: 'galCustomersBooth', caption: 'Ngobrol santai di booth gerai' },
  { image: 'galCustomersOutdoor', caption: 'Kumpul sore di meja luar gerai' },
  { image: 'galInterior', caption: 'Suasana interior gerai yang nyaman' },
  { image: 'galCommunityWall', caption: 'Tumbler Jamuin & papan harapan pelanggan' },
  { image: 'galPromoBanner', caption: 'Promo Gebyar Akhir Tahun di salah satu gerai' },
  { image: 'galProductHold', caption: 'Segar dan siap dinikmati di tempat' },
  { image: 'galTeamBanner', caption: 'Tim Jamuin menyiapkan promo terbaru' },
]
