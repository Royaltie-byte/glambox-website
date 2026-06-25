import { useEffect, useRef } from 'react'
import { braidStyles } from '../data/braiding'
import BraidCard from '../components/ui/BraidCard'
import '../styles/pages/braiding-page.css'

export default function BraidingPage() {
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
    <section className="braiding-page">

      <div className="braiding-page__header">
        <span className="label">Protective Styles</span>
        <h1 className="section-title">
          Our <span>Braiding</span>
        </h1>
        <p>
          From sleek cornrows to bold Fulani styles — protective braiding
          crafted with precision. Tap any style to book on WhatsApp.
        </p>
      </div>

      <div className="braiding-page__grid">
        {braidStyles.map((braid, i) => (
          <BraidCard
            key={braid.id}
            braid={braid}
            index={i}
            cardRef={(el) => { cardRefs.current[i] = el }}
          />
        ))}
      </div>

    </section>
  )
}