import { useEffect, useRef } from 'react'
import { nailServices } from '../data/manicure'
import NailCard from '../components/ui/NailCard'
import '../styles/pages/manicure-page.css'

export default function ManicurePage() {
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
    <section className="manicure-page">

      <div className="manicure-page__header">
        <span className="label">Hands & Feet</span>
        <h1 className="section-title">
          Our <span>Manicure</span>
        </h1>
        <p>
          Perfectly sculpted, flawlessly finished nails that speak before
          you say a word. Tap any service to book on WhatsApp.
        </p>
      </div>

      <div className="manicure-page__grid">
        {nailServices.map((nail, i) => (
          <NailCard
            key={nail.id}
            nail={nail}
            index={i}
            cardRef={(el) => { cardRefs.current[i] = el }}
          />
        ))}
      </div>

    </section>
  )
}