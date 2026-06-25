import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../../styles/components/navbar.css'
import glamboxLogo from '../../assets/images/glambox-logo.png'



const navLinks = [
  { label: 'Wigs',     path: '/wigs'     },
  { label: 'Scents',   path: '/scents'   },
  { label: 'Lashes',   path: '/lashes'   },
  { label: 'Braiding', path: '/braiding' },
  { label: 'Manicure', path: '/manicure' },
  { label: 'Makeup',   path: '/makeup'   },
  { label: 'Gallery',  path: '/gallery'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // close mobile menu and scroll to top whenever route changes
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  const handleNav = (path: string) => {
    setMenuOpen(false)
    navigate(path)
  }

  const handleBooking = () => {
    setMenuOpen(false)
    window.open('https://wa.me/254719202030', '_blank')
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

        
        <div className="navbar__logo" onClick={() => navigate('/')}>
          <img src={glamboxLogo} alt="GlamBox" className="navbar__logo-img" />
          <span className="navbar__logo-text">Glam<span>Box</span></span>
        </div>


        <div className="navbar__links">
          {navLinks.map(link => (
            <span
              key={link.label}
              className="navbar__link"
              onClick={() => handleNav(link.path)}
            >
              {link.label}
            </span>
          ))}
        </div>

        <button className="navbar__book" onClick={handleBooking}>
          Book Now
        </button>

        <div
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>

      </nav>

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <span
            key={link.label}
            className="navbar__mobile-link"
            onClick={() => handleNav(link.path)}
          >
            {link.label}
          </span>
        ))}
        <button className="navbar__mobile-book" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </>
  )
}