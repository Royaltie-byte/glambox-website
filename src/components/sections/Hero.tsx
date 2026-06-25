import '../../styles/sections/hero.css'

export default function Hero() {
  const handleBooking = () => {
    window.open('https://wa.me/254719202030', '_blank')
  }

  return (
    <section className="hero">

      {/* Floating orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content">

        {/* Pre-title */}
        <span className="label hero__pretitle">Nairobi's Finest Beauty Experience</span>

        {/* Main title */}
        <h1 className="hero__title">
          Glam<span>Box</span>
        </h1>

        {/* Tagline */}
        <p className="hero__tagline">
          Where luxury meets beauty. Wigs, makeup, lashes & more —
          crafted for women who demand the finest.
        </p>

        {/* CTA */}
        <div className="hero__cta">
          <button className="btn-glow" onClick={handleBooking}>
            Book Now
          </button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>

    </section>
  )
}