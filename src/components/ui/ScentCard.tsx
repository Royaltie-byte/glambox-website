import type { Scent } from '../../data/scents'
import '../../styles/pages/scents-page.css'

interface Props {
  scent: Scent
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}

export default function ScentCard({ scent, index, cardRef }: Props) {
  const handleBook = () => {
    const message = `Hi! I'd like to book/order the ${scent.name} (${scent.size}) — KES ${scent.price}.`
    const url = `https://wa.me/254719202030?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="scent-card" ref={cardRef} data-index={index}>

      <div className="scent-card__image-wrap">
        {scent.image ? (
          <img src={scent.image} alt={scent.name} className="scent-card__image" />
        ) : (
          <div className="scent-card__image-placeholder">Photo coming soon</div>
        )}
      </div>

      <div className="scent-card__info">
        <h3 className="scent-card__name">{scent.name}</h3>
        {scent.subtitle && <span className="scent-card__subtitle">{scent.subtitle}</span>}

        <div className="scent-card__meta">
          <span className="scent-card__size">{scent.size}</span>
        </div>

        <div className="scent-card__price-row">
          <span className="scent-card__price">KES {scent.price.toLocaleString()}</span>
        </div>
        {scent.priceNote && <span className="scent-card__price-note">{scent.priceNote}</span>}

        <button className="scent-card__book" onClick={handleBook}>
          Book This
        </button>
      </div>

    </div>
  )
}