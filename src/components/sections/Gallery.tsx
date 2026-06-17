import { useState, useEffect, useRef } from 'react'
import { galleryItems } from '../../data/gallery'
import type { GalleryItem } from '../../data/gallery'
import '../../styles/sections/gallery.css'

type Filter = 'all' | 'makeup' | 'lashes' | 'wigs' | 'nails' | 'braiding'

const filters: { label: string; value: Filter }[] = [
  { label: 'All',      value: 'all'     },
  { label: 'Makeup',   value: 'makeup'  },
  { label: 'Lashes',   value: 'lashes'  },
  { label: 'Wigs',     value: 'wigs'    },
  { label: 'Nails',    value: 'nails'   },
  { label: 'Braiding', value: 'braiding'},
]

export default function Gallery() {
  const [active, setActive]     = useState<Filter>('all')
  const itemRefs                = useRef<(HTMLDivElement | null)[]>([])

  const filtered = active === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el    = entry.target as HTMLElement
            const index = Number(el.dataset.index)
            setTimeout(() => el.classList.add('visible'), index * 80)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    itemRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [filtered])

  const handleBooking = () => {
    window.open('https://wa.me/254719202030', '_blank')
  }

  return (
    <section className="gallery" id="gallery">

      <div className="gallery__header">
        <span className="label">The Work</span>
        <h2 className="section-title">
          Our <span>Gallery</span>
        </h2>
        <p>
          Every look tells a story. Browse our work and imagine
          what we can create for you.
        </p>
      </div>

      <div className="gallery__filters">
        {filters.map(f => (
          <button
            key={f.value}
            className={`gallery__filter ${active === f.value ? 'active' : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery__grid">
        {filtered.length === 0 ? (
          <div className="gallery__empty">No items in this category yet.</div>
        ) : (
          filtered.map((item: GalleryItem, i: number) => (
            <div
              key={item.id}
              className={`gallery__item gallery__item--${item.size}`}
              ref={(el) => { itemRefs.current[i] = el }}
              data-index={i}
            >
              <div className="gallery__placeholder" />
              <div className="gallery__overlay">
                <span className="gallery__item-label">{item.label}</span>
                <span className="gallery__item-category">{item.category}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="gallery__cta">
        <button className="btn-glow" onClick={handleBooking}>
          Book Your Look
        </button>
      </div>

    </section>
  )
}