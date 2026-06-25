import { useNavigate } from 'react-router-dom'
import '../../styles/components/footer.css'

const CrownIcon = () => (
  <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 16 L2 18 L22 18 L22 16 Z" />
    <path d="M2 16 L5 6 L9.5 11 L12 2 L14.5 11 L19 6 L22 16 Z" />
    <circle cx="5" cy="5.5" r="1.8" />
    <circle cx="12" cy="1.8" r="1.8" />
    <circle cx="19" cy="5.5" r="1.8" />
  </svg>
)

export default function Footer() {
  const navigate = useNavigate()

  const goTo = (path: string) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }

  const handleBooking = () => {
    window.open('https://wa.me/254719202030', '_blank')
  }

  return (
    <footer className="footer">

      <div className="footer__main">

        <div className="footer__brand">
          <div className="footer__logo">
            Glam<span>Box</span>
          </div>
          <p className="footer__tagline">
            Nairobi's finest beauty experience. Where every detail
            is crafted to make you feel extraordinary.
          </p>
          <div className="footer__contact">

            <a href="https://wa.me/254719202030" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
              <span className="footer__contact-dot" />
              +254 719 202 030
            </a>

            <a href="https://instagram.com/theglambox.ke" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
              <span className="footer__contact-dot" />
              @theglambox.ke
            </a>

            <a href="https://tiktok.com/@glam.boxke" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
              <span className="footer__contact-dot" />
              @glam.boxke
            </a>

          </div>
        </div>

        {/* ── Services column — now real routes ── */}
        <div className="footer__col">
          <span className="footer__col-title">Services</span>
          <div className="footer__col-links">
            <span className="footer__col-link" onClick={() => goTo('/wigs')}>Wigs</span>
            <span className="footer__col-link" onClick={() => goTo('/scents')}>Scents</span>
            <span className="footer__col-link" onClick={() => goTo('/lashes')}>Lashes</span>
            <span className="footer__col-link" onClick={() => goTo('/braiding')}>Braiding</span>
            <span className="footer__col-link" onClick={() => goTo('/manicure')}>Manicure</span>
            <span className="footer__col-link" onClick={() => goTo('/makeup')}>Makeup</span>
          </div>
        </div>

        {/* ── Quick links column ── */}
        <div className="footer__col">
          <span className="footer__col-title">Quick Links</span>
          <div className="footer__col-links">

            <span className="footer__col-link" onClick={() => goTo('/')}>
              Home
            </span>

            <span className="footer__col-link" onClick={() => goTo('/gallery')}>
              Gallery
            </span>

            <span className="footer__col-link" onClick={handleBooking}>
              WhatsApp Us
            </span>

            <a href="https://instagram.com/theglambox.ke" target="_blank" rel="noopener noreferrer" className="footer__col-link">
              Instagram
            </a>

            <a href="https://tiktok.com/@glam.boxke" target="_blank" rel="noopener noreferrer" className="footer__col-link">
              TikTok
            </a>

          </div>
        </div>

      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">

        <span className="footer__copyright">
          © {new Date().getFullYear()} Glam Box Kenya. All rights reserved.
        </span>

        <a href="https://wa.me/254791003081" target="_blank" rel="noopener noreferrer" className="footer__credit" title="Built by Royaltie Technologies">
          <div className="footer__crown">
            <CrownIcon />
          </div>
          <div className="footer__credit-text">
            <span className="footer__credit-built">Built by</span>
            <span className="footer__credit-brand">Royaltie Technologies</span>
            <span className="footer__credit-number">+254 791 003 081</span>
          </div>
        </a>

      </div>

    </footer>
  )
}