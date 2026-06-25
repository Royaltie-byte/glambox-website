import type { NailService } from '../../data/manicure'
import '../../styles/pages/manicure-page.css'

interface Props {
  nail: NailService
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}

export default function NailCard({ nail, index, cardRef }: Props) {
  const handleBook = () => {
    const message = `Hi! I'd like to book ${nail.name} — KES ${nail.price.toLocaleString()}.`
    const url = `https://wa.me/254719202030?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="nail-card" ref={cardRef} data-index={index}>

      <div className="nail-card__image-wrap">
        {nail.duration && <span className="nail-card__duration">{nail.duration}</span>}
        {nail.image ? (
          <img src={nail.image} alt={nail.name} className="nail-card__image" />
        ) : (
          <div className="nail-card__image-placeholder">Photo coming soon</div>
        )}
      </div>

      <div className="nail-card__info">
        <h3 className="nail-card__name">{nail.name}</h3>
        <p className="nail-card__desc">{nail.description}</p>
        {nail.note && <span className="nail-card__note">{nail.note}</span>}

        <div className="nail-card__price-row">
          <span className="nail-card__price">KES {nail.price.toLocaleString()}</span>
        </div>

        <button className="nail-card__book" onClick={handleBook}>
          Book This
        </button>
      </div>

    </div>
  )
}