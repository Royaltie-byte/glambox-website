import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { serviceCategories } from '../../data/serviceCategories'
import '../../styles/sections/category-cards.css'

export default function ServiceCategories() {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const index = Number(el.dataset.index)
            setTimeout(() => el.classList.add('visible'), index * 90)
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
    <section className="categories">

      <div className="categories__header">
        <span className="label">Explore Our World</span>
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
        <p>
          Every detail crafted to perfection. Tap a category to explore
          our full collection and prices.
        </p>
      </div>

      <div className="categories__grid">
        {serviceCategories.map((cat, i) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="category-card"
            ref={(el) => { cardRefs.current[i] = el }}
            data-index={i}
          >
            {cat.image ? (
              <img src={cat.image} alt={cat.name} className="category-card__image" />
            ) : (
              <div className="category-card__image-placeholder">Photo coming soon</div>
            )}

            <div className="category-card__overlay">
              <h3 className="category-card__name">{cat.name}</h3>
              <p className="category-card__tagline">{cat.tagline}</p>
              <span className="category-card__cta">
                Explore {cat.name}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}