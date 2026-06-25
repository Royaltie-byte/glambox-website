import type { Wig } from '../../data/wigs'
import ImageCarousel from './ImageCarousel'
import '../../styles/pages/wigs-page.css'

interface Props {
  wig: Wig
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}

export default function WigProductCard({ wig, index, cardRef }: Props) {
  const handleBook = () => {
    const message = `Hi! I'd like to book the ${wig.name} (${wig.color}, ${wig.length}) — KES ${wig.price.toLocaleString()}.`
    const url = `https://wa.me/254719202030?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const slides = [
    { src: wig.images.front, label: 'Front' },
    { src: wig.images.side,  label: 'Side'  },
    { src: wig.images.back,  label: 'Back'  },
  ]

  return (
    <div className="wig-product-card" ref={cardRef} data-index={index}>

      <div className="wig-product-card__image-zone">
        <ImageCarousel slides={slides} />
      </div>

      <div className="wig-product-card__info">
        <h3 className="wig-product-card__name">{wig.name}</h3>
        <span className="wig-product-card__type">{wig.type} · {wig.style}</span>

        <div className="wig-product-card__details">
          <div className="wig-product-card__detail">
            <span className="wig-product-card__detail-label">Length</span>
            <span className="wig-product-card__detail-value">{wig.length}</span>
          </div>
          <div className="wig-product-card__detail">
            <span className="wig-product-card__detail-label">Color</span>
            <span className="wig-product-card__detail-value">{wig.color}</span>
          </div>
        </div>

        {wig.note && <span className="wig-product-card__note">{wig.note}</span>}

        <div className="wig-product-card__price-row">
          <span className="wig-product-card__price">KES {wig.price.toLocaleString()}</span>
          {wig.priceRange && <span className="wig-product-card__price-range">{wig.priceRange}</span>}
        </div>

        <button className="wig-product-card__book" onClick={handleBook}>
          Book This
        </button>
      </div>

    </div>
  )
}