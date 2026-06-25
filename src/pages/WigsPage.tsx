import { useEffect, useRef } from 'react'
import { wigs } from '../data/wigs'
import WigProductCard from '../components/ui/WigProductCard'
import '../styles/pages/wigs-page.css'

export default function WigsPage() {
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
    <section className="wigs-page">

      <div className="wigs-page__header">
        <span className="label">Our Collection</span>
        <h1 className="section-title">
          The Wig <span>Shelf</span>
        </h1>
        <p>
          Every wig is handpicked for quality, texture and elegance.
          Swipe each photo to see front, side and back views.
        </p>
      </div>

      <div className="wigs-page__grid">
        {wigs.map((wig, i) => (
          <WigProductCard
            key={wig.id}
            wig={wig}
            index={i}
            cardRef={(el) => { cardRefs.current[i] = el }}
          />
        ))}
      </div>

    </section>
  )
}