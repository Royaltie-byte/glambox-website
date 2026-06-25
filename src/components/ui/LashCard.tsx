import type { LashService } from '../../data/lashes'
import '../../styles/pages/lashes-page.css'

interface Props {
  lash: LashService
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}

export default function LashCard({ lash, index, cardRef }: Props) {
  const handleBook = () => {
    const message = `Hi! I'd like to book the ${lash.name} — KES ${lash.price.toLocaleString()}.`
    const url = `https://wa.me/254719202030?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="lash-card" ref={cardRef} data-index={index}>

      <div className="lash-card__image-wrap">
        {lash.duration && <span className="lash-card__duration">{lash.duration}</span>}
        {lash.image ? (
          <img src={lash.image} alt={lash.name} className="lash-card__image" />
        ) : (
          <div className="lash-card__image-placeholder">Photo coming soon</div>
        )}
      </div>

      <div className="lash-card__info">
        <h3 className="lash-card__name">{lash.name}</h3>
        <p className="lash-card__desc">{lash.description}</p>

        <div className="lash-card__price-row">
          <span className="lash-card__price">KES {lash.price.toLocaleString()}</span>
        </div>

        <button className="lash-card__book" onClick={handleBook}>
          Book This
        </button>
      </div>

    </div>
  )
}