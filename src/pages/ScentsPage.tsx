import { useEffect, useRef } from 'react'
import { scents } from '../data/scents'
import ScentCard from '../components/ui/ScentCard'
import '../styles/pages/scents-page.css'

export default function ScentsPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const index = Number(el.dataset.index)
            setTimeout(() => el.classList.add('visible'), index * 60)
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
    <section className="scents-page">

      <div className="scents-page__header">
        <span className="label">Signature Fragrances</span>
        <h1 className="section-title">
          Our <span>Scents</span>
        </h1>
        <p>
          A curated collection of fragrances to complete your glam.
          Tap any scent to book or order directly on WhatsApp.
        </p>
      </div>

      <div className="scents-page__grid">
        {scents.map((scent, i) => (
          <ScentCard
            key={scent.id}
            scent={scent}
            index={i}
            cardRef={(el) => { cardRefs.current[i] = el }}
          />
        ))}
      </div>

    </section>
  )
}