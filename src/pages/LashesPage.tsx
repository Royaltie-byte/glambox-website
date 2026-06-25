import { useEffect, useRef } from 'react'
import { lashes } from '../data/lashes'
import LashCard from '../components/ui/LashCard'
import '../styles/pages/lashes-page.css'

export default function LashesPage() {
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
    <section className="lashes-page">

      <div className="lashes-page__header">
        <span className="label">Signature Lashes</span>
        <h1 className="section-title">
          Our <span>Lashes</span>
        </h1>
        <p>
          From natural to dramatic — find the perfect lash style for your eyes.
          Tap any style to book on WhatsApp.
        </p>
      </div>

      <div className="lashes-page__grid">
        {lashes.map((lash, i) => (
          <LashCard
            key={lash.id}
            lash={lash}
            index={i}
            cardRef={(el) => { cardRefs.current[i] = el }}
          />
        ))}
      </div>

    </section>
  )
}