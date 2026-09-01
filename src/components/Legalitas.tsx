import { Reveal, RevealItem } from '../ui/motion'
import { profile } from '../data/site'
import './Legalitas.css'

/** Ceklis sederhana — dipakai tiap badge sertifikasi. */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.6 8.2 7 10.6l4.4-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Legalitas, sertifikasi, dan jaringan gerai — sinyal kepercayaan brand. */
export function Legalitas() {
  return (
    <section className="legal section-pad" aria-labelledby="legal-title">
      <div className="shell legal-grid">
        <Reveal className="legal-certs">
          <RevealItem>
            <p className="eyebrow">Legalitas & Sertifikasi</p>
          </RevealItem>
          <RevealItem>
            <h2 className="h2" id="legal-title">
              Bukan sekadar racikan — sudah teruji dan berizin.
            </h2>
          </RevealItem>

          <RevealItem>
            <ul className="legal-cert-list">
              {profile.certifications.map((cert) => (
                <li key={cert.label}>
                  <span className="legal-cert-icon">
                    <CheckIcon />
                  </span>
                  <div>
                    <p className="legal-cert-label">{cert.label}</p>
                    <p className="muted legal-cert-detail">{cert.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <p className="muted legal-entity">
              Berbadan hukum <strong>{profile.legal.entity}</strong> · {profile.legal.address}
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="legal-gerai" amount={0.15}>
          <RevealItem className="legal-gerai-card">
            <p className="foot-label">Jaringan Gerai Aktif</p>
            <ul>
              {profile.gerai.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <div className="rule" />
            <p className="muted legal-gerai-note">{profile.geraiCriteria}</p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
