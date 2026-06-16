import { useState, useEffect } from 'react'
import '../../styles/components/navbar.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Wigs',     href: '#wigs'     },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Find Us',  href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBooking = () => {
    setMenuOpen(false)
    window.open('https://wa.me/254719202030', '_blank')
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

        {/* Logo */}
        <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Glam <span>Box</span>
        </div>

        {/* Desktop links */}
        <div className="navbar__links">
          {navLinks.map(link => (
            <span
              key={link.label}
              className="navbar__link"
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* Desktop book button */}
        <button className="navbar__book" onClick={handleBooking}>
          Book Now
        </button>

        {/* Hamburger */}
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

      {/* Mobile full-screen menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <span
            key={link.label}
            className="navbar__mobile-link"
            onClick={() => handleNav(link.href)}
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