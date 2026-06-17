import { useEffect, useRef } from 'react'
import { wigs } from '../../data/wigs'
import '../../styles/sections/wig-showcase.css'

{/*function MannequinHead({ colorHex, colorHex2 }: { colorHex: string; colorHex2?: string }) {
  const c2 = colorHex2 ?? colorHex
  return (
    <div className="mannequin">
      <div className="mannequin__head">
        <div className="mannequin__wig">
          <div
            className="mannequin__wig-top"
            style={{ background: `linear-gradient(135deg, ${colorHex}, ${c2})` }}
          />
          <div className="mannequin__wig-sides">
            <div
              className="mannequin__wig-side"
              style={{ background: `linear-gradient(180deg, ${colorHex}, ${c2})` }}
            />
            <div
              className="mannequin__wig-side"
              style={{ background: `linear-gradient(180deg, ${colorHex}, ${c2})` }}
            />
          </div>
        </div>
      </div>
      <div className="mannequin__neck" />
      <div className="mannequin__shoulder" />
    </div>
  )
}*/}

export default function WigShowcase() {
  const trackRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // drag to scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onDown  = (e: MouseEvent) => { isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft }
    const onUp    = () => { isDown = false }
    const onLeave = () => { isDown = false }
    const onMove  = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x    = e.pageX - track.offsetLeft
      const walk = (x - startX) * 1.5
      track.scrollLeft = scrollLeft - walk
    }

    track.addEventListener('mousedown',  onDown)
    track.addEventListener('mouseup',    onUp)
    track.addEventListener('mouseleave', onLeave)
    track.addEventListener('mousemove',  onMove)
    return () => {
      track.removeEventListener('mousedown',  onDown)
      track.removeEventListener('mouseup',    onUp)
      track.removeEventListener('mouseleave', onLeave)
      track.removeEventListener('mousemove',  onMove)
    }
  }, [])

  // scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el    = entry.target as HTMLElement
            const index = Number(el.dataset.index)
            setTimeout(() => el.classList.add('visible'), index * 120)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    cardRefs.current.forEach((card) => { if (card) observer.observe(card) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="wigs" id="wigs">

      <div className="wigs__header">
        <span className="label">Our Collection</span>
        <h2 className="section-title">
          The Wig <span>Shelf</span>
        </h2>
        <p className="wigs__subtitle">
          Each piece is handpicked for quality, texture and elegance.
          Drag to explore the full collection.
        </p>
      </div>

      <div className="wigs__track" ref={trackRef}>
        {wigs.map((wig, i) => (
          <div
            key={wig.id}
            className="wig-card"
            ref={(el) => { cardRefs.current[i] = el }}
            data-index={i}
          >
            {wig.tag && <span className="wig-card__tag">{wig.tag}</span>}

            {/*<div className="wig-card__display">
              <MannequinHead colorHex={wig.colorHex} colorHex2={wig.colorHex2} />
            </div>*/}
            <div className="wig-card__display">
                <img
                    src={wig.image}
                    alt={wig.name}
                    className="wig-card__image"
                    loading="lazy"
                />
            </div>

            <div className="wig-card__info">
              <h3 className="wig-card__name">{wig.name}</h3>
              <span className="wig-card__type">{wig.type}</span>
              <div className="wig-card__meta">
                <span className="wig-card__length">{wig.length}</span>
                <div
                  className="wig-card__color-dot"
                  style={{ background: `linear-gradient(135deg, ${wig.colorHex}, ${wig.colorHex2 ?? wig.colorHex})` }}
                  title={wig.color}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="wigs__hint">
        <span className="wigs__hint-text">Drag to explore</span>
        <div className="wigs__hint-line" />
      </div>

    </section>
  )
}