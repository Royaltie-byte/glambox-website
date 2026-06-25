import { useState } from 'react'
import '../../styles/sections/booking.css'

const socials = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@theglambox.ke',
    url: 'https://instagram.com/theglambox.ke',
    className: 'social-card--instagram',
    icon: (
      <svg className="social-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="25%" stopColor="#e6683c"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="75%" stopColor="#cc2366"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="1.8"/>
        <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad)"/>
      </svg>
    ),
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@glam.boxke',
    url: 'https://tiktok.com/@glam.boxke',
    className: 'social-card--tiktok',
    icon: (
      <svg className="social-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: '+254 719 202 030',
    url: 'https://wa.me/254719202030',
    className: 'social-card--whatsapp',
    icon: (
      <svg className="social-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
      </svg>
    ),
  },
]

const serviceOptions = [
  'Wigs',
  'Scents',
  'Lashes',
  'Braiding',
  'Manicure',
  'Makeup',
  'Custom Order',
]

export default function Booking() {
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const lines = [
      `Hi! I'd like to make a booking.`,
      name && `Name: ${name}`,
      service && `Service: ${service}`,
      date && `Preferred date: ${date}`,
      message && `Message: ${message}`,
    ].filter(Boolean)

    const text = lines.join('\n')
    const url = `https://wa.me/254719202030?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section className="booking" id="booking">
      <div className="booking__inner">

        {/* Headline */}
        <div className="booking__headline">
          <span className="label">Ready to Glow?</span>
          <h2 className="booking__title">
            Book Your <span>Experience</span>
          </h2>
          <p className="booking__sub">
            Fill in your details below and we'll pick it up on WhatsApp —
            fast, easy, no waiting on hold.
          </p>
        </div>

        {/* Booking form */}
        <form className="booking__form" onSubmit={handleSubmit}>

          <div className="booking__field">
            <label className="booking__label" htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              className="booking__input"
              placeholder="e.g. Wanjiru Kamau"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="booking__row">
            <div className="booking__field">
              <label className="booking__label" htmlFor="service">Service</label>
              <select
                id="service"
                className="booking__select"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="booking__field">
              <label className="booking__label" htmlFor="date">Preferred Date</label>
              <input
                id="date"
                type="date"
                className="booking__input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="booking__field">
            <label className="booking__label" htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              className="booking__textarea"
              placeholder="Tell us more about what you're looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="booking__submit">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send on WhatsApp
          </button>
        </form>

        {/* Divider */}
        <div className="booking__divider">
          <div className="booking__divider-line" />
          <span className="booking__divider-text">Follow Us</span>
          <div className="booking__divider-line" />
        </div>

        {/* Social cards */}
        <div className="booking__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card ${social.className}`}
            >
              {social.icon}
              <span className="social-card__name">{social.name}</span>
              <span className="social-card__handle">{social.handle}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}