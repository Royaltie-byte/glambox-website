import { useEffect, useRef } from 'react'
import { makeupServices } from '../data/makeup'
import MakeupCard from '../components/ui/MakeupCard'
import '../styles/pages/makeup-page.css'

export default function MakeupPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const index = Number(el.dataset.index)
            setTimeout(() => el.classList.add('visible'), index * 80)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    cardRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="makeup-page">

      <div className="makeup-page__header">
        <span className="label">Beauty Artistry</span>
        <h1 className="section-title">
          Our <span>Makeup</span>
        </h1>
        <p>
          From natural glam to full bridal looks — artistry crafted to make
          you unforgettable. Tap any service to book on WhatsApp.
        </p>
      </div>

      <div className="makeup-page__grid">
        {makeupServices.map((service, i) => (
          <MakeupCard
            key={service.id}
            service={service}
            index={i}
            cardRef={(el) => { cardRefs.current[i] = el }}
          />
        ))}
      </div>

    </section>
  )
}