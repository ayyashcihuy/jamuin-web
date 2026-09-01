import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal, RevealItem, ease } from '../ui/motion'
import { products, site } from '../data/site'
import './Order.css'

type Errors = Partial<Record<'nama' | 'hp', string>>

/**
 * Form pemesanan singkat.
 *
 * Situs ini statis (tanpa backend), jadi kiriman form dirangkai menjadi pesan
 * WhatsApp yang sudah terisi — pesanan tetap sampai tanpa perlu server.
 * Kalau nanti ada endpoint, ganti isi handleSubmit dengan fetch ke API.
 */
export function Order() {
  const [form, setForm] = useState({ nama: '', hp: '', varian: '', pesan: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function validate(): Errors {
    const next: Errors = {}
    if (form.nama.trim().length < 2) next.nama = 'Isi nama kamu dulu ya.'
    // Nomor Indonesia: boleh diawali 0, +62, atau 62; minimal 9 digit setelahnya.
    if (!/^(\+?62|0)\d{8,13}$/.test(form.hp.replace(/[\s-]/g, ''))) {
      next.hp = 'Nomor HP belum valid. Contoh: 081234567890.'
    }
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const lines = [
      'Halo Jamuin, saya mau pesan.',
      '',
      `Nama: ${form.nama.trim()}`,
      `No. HP: ${form.hp.trim()}`,
      form.varian ? `Varian: ${form.varian}` : null,
      form.pesan.trim() ? `Pesan: ${form.pesan.trim()}` : null,
    ].filter(Boolean)

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <section className="order section-pad" id="pesan" aria-labelledby="order-title">
      <div className="order-grid shell">
        <Reveal className="order-copy">
          <RevealItem>
            <p className="eyebrow">Pesan</p>
          </RevealItem>
          <RevealItem>
            <h1 className="h2" id="order-title">
              Mulai dari satu gelas hari ini.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="lede order-lede">
              Tinggalkan nama dan nomor kamu, kami hubungi lewat WhatsApp untuk
              memastikan pesanan dan pengantaran.
            </p>
          </RevealItem>
          <RevealItem>
            <ul className="order-hours" aria-label="Jam operasional">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <span className="order-dots" aria-hidden="true" />
                  <strong>{h.time}</strong>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <div className="order-quick">
              <p className="order-quick-label">Mau langsung pesan tanpa isi form?</p>
              <div className="order-quick-actions">
                <a
                  className="btn btn-primary btn-sm"
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Halo Jamuin, saya mau pesan.')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat WhatsApp
                </a>
                <a className="btn btn-ghost btn-sm" href={site.linktree} target="_blank" rel="noreferrer">
                  Semua Link Pesan (Linktree)
                </a>
              </div>
            </div>
          </RevealItem>
        </Reveal>

        <Reveal className="order-panel" amount={0.15}>
          <RevealItem className="order-card">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div
                  key="done"
                  className="order-done"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <motion.span
                    className="order-check"
                    aria-hidden="true"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease, delay: 0.08 }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <motion.path
                        d="M5 11.5 9.5 16 17 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease, delay: 0.2 }}
                      />
                    </svg>
                  </motion.span>
                  <h3 className="h3">WhatsApp sudah dibuka</h3>
                  <p className="muted">
                    Tinggal tekan kirim di sana. Kalau tidak terbuka otomatis, hubungi kami
                    langsung di{' '}
                    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                      +{site.whatsapp}
                    </a>
                    .
                  </p>
                  <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSent(false)}>
                    Isi lagi
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="order-form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.18 } }}
                  transition={{ duration: 0.35, ease }}
                >
                  <Field
                    id="nama"
                    label="Nama"
                    placeholder="Nama kamu"
                    value={form.nama}
                    onChange={update('nama')}
                    error={errors.nama}
                    autoComplete="name"
                  />

                  <Field
                    id="hp"
                    label="No. HP"
                    type="tel"
                    inputMode="tel"
                    placeholder="08xxxxxxxxxx"
                    value={form.hp}
                    onChange={update('hp')}
                    error={errors.hp}
                    autoComplete="tel"
                  />

                  <div className="field">
                    <label htmlFor="varian">
                      Varian <span className="field-opt">opsional</span>
                    </label>
                    <select id="varian" value={form.varian} onChange={update('varian')}>
                      <option value="">Belum menentukan</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="pesan">
                      Pesan <span className="field-opt">opsional</span>
                    </label>
                    <textarea
                      id="pesan"
                      rows={3}
                      placeholder="Jumlah, waktu pengambilan, atau catatan lain."
                      value={form.pesan}
                      onChange={update('pesan')}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary order-submit">
                    Kirim
                  </button>

                  <p className="order-note muted">
                    Dengan menekan Kirim, pesan akan dibuka di WhatsApp untuk kamu tinjau
                    sebelum terkirim.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (e: { target: { value: string } }) => void
  error?: string
  type?: string
  placeholder?: string
  autoComplete?: string
  inputMode?: 'tel' | 'text'
}

function Field({ id, label, value, onChange, error, ...rest }: FieldProps) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            className="field-error"
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
