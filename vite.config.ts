import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern; semua browser yang mendukung AVIF juga mendukung ini.
    target: 'es2020',
    cssTarget: 'chrome111',
    assetsInlineLimit: 2048,
  },
  server: {
    port: 5173,
    open: false,
    // Ngrok (dan tunnel sejenis) memakai subdomain acak yang berubah tiap
    // sesi di paket gratis — daripada kejar-kejaran menambah host satu per
    // satu, izinkan saja semua host saat dev server diakses lewat tunnel.
    allowedHosts: true,
  },
  preview: { port: 4173, allowedHosts: true },
})
