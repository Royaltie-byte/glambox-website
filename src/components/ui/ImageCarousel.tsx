import { useState, useRef } from 'react'
import type { TouchEvent } from 'react'
import '../../styles/components/image-carousel.css'

interface Slide {
  src: string
  label: string
}

interface Props {
  slides: Slide[]
}

export default function ImageCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goTo = (i: number) => {
    const safe = (i + slides.length) % slides.length
    setIndex(safe)
  }

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) > 40) {
      if (delta > 0) goTo(index + 1)
      else goTo(index - 1)
    }
  }

  return (
    <div
      className="img-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="img-carousel__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="img-carousel__slide" key={i}>
            {slide.src ? (
              <img src={slide.src} alt={slide.label} className="img-carousel__img" />
            ) : (
              <div className="img-carousel__placeholder">Photo coming soon</div>
            )}
          </div>
        ))}
      </div>

      <span className="img-carousel__label">{slides[index].label}</span>

      <button
        className="img-carousel__arrow img-carousel__arrow--left"
        onClick={() => goTo(index - 1)}
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        className="img-carousel__arrow img-carousel__arrow--right"
        onClick={() => goTo(index + 1)}
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      <div className="img-carousel__dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`img-carousel__dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}