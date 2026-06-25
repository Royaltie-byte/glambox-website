import type { MakeupService } from '../../data/makeup'
import '../../styles/pages/makeup-page.css'

interface Props {
  service: MakeupService
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}

export default function MakeupCard({ service, index, cardRef }: Props) {
  const handleBook = () => {
    const message = `Hi! I'd like to book ${service.name} — KES ${service.price.toLocaleString()}.`
    const url = `https://wa.me/254719202030?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="makeup-card" ref={cardRef} data-index={index}>

      <div className="makeup-card__image-wrap">
        {service.duration && <span className="makeup-card__duration">{service.duration}</span>}
        {service.image ? (
          <img src={service.image} alt={service.name} className="makeup-card__image" />
        ) : (
          <div className="makeup-card__image-placeholder">Photo coming soon</div>
        )}
      </div>

      <div className="makeup-card__info">
        <h3 className="makeup-card__name">{service.name}</h3>
        <p className="makeup-card__desc">{service.description}</p>
        {service.note && <span className="makeup-card__note">{service.note}</span>}

        <div className="makeup-card__price-row">
          <span className="makeup-card__price">KES {service.price.toLocaleString()}</span>
        </div>

        <button className="makeup-card__book" onClick={handleBook}>
          Book This
        </button>
      </div>

    </div>
  )
}