import type { BraidStyle } from '../../data/braiding'
import '../../styles/pages/braiding-page.css'

interface Props {
  braid: BraidStyle
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}

export default function BraidCard({ braid, index, cardRef }: Props) {
  const handleBook = () => {
    const message = `Hi! I'd like to book ${braid.name} — KES ${braid.price.toLocaleString()}.`
    const url = `https://wa.me/254719202030?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="braid-card" ref={cardRef} data-index={index}>

      <div className="braid-card__image-wrap">
        {braid.duration && <span className="braid-card__duration">{braid.duration}</span>}
        {braid.image ? (
          <img src={braid.image} alt={braid.name} className="braid-card__image" />
        ) : (
          <div className="braid-card__image-placeholder">Photo coming soon</div>
        )}
      </div>

      <div className="braid-card__info">
        <h3 className="braid-card__name">{braid.name}</h3>
        <p className="braid-card__desc">{braid.description}</p>

        <div className="braid-card__price-row">
          <span className="braid-card__price">KES {braid.price.toLocaleString()}</span>
        </div>

        <button className="braid-card__book" onClick={handleBook}>
          Book This
        </button>
      </div>

    </div>
  )
}