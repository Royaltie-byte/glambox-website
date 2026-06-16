import { useEffect, useRef } from 'react'
import { services } from '../../data/services'
import '../../styles/sections/services.css'

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el    = entry.target as HTMLElement
            const index = Number(el.dataset.index)
            setTimeout(() => el.classList.add('visible'), index * 100)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    cardRefs.current.forEach((card) => { if (card) observer.observe(card) })
    return () => observer.disconnect()
  }, [])

  const handleBooking = () => {
    window.open('https://wa.me/254719202030', '_blank')
  }

  return (
    <section className="services" id="services">

      <div className="services__header">
        <span className="label">What We Do</span>
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
        <p>
          Every service at Glam Box is delivered with precision,
          care and an obsession with making you look extraordinary.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service, i) => (
          <div
            key={service.id}
            className="service-card"
            ref={(el) => { cardRefs.current[i] = el }}
            data-index={i}
          >
            {service.tag && (
              <span className="service-card__tag">{service.tag}</span>
            )}

            <div className="service-card__icon">{service.icon}</div>

            <h3 className="service-card__title">{service.title}</h3>

            <p className="service-card__desc">{service.description}</p>

            {service.items && (
              <div className="service-card__items">
                {service.items.map((item) => (
                  <span key={item} className="service-card__item">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="services__cta">
        <button className="btn-glow" onClick={handleBooking}>
          Book a Service
        </button>
      </div>

    </section>
  )
}