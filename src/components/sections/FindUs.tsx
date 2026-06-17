import '../../styles/sections/find-us.css'

const hours = [
  { day: 'Monday',    time: '8:00 AM – 8:00 PM' },
  { day: 'Tuesday',   time: '8:00 AM – 8:00 PM' },
  { day: 'Wednesday', time: '8:00 AM – 8:00 PM' },
  { day: 'Thursday',  time: '8:00 AM – 8:00 PM' },
  { day: 'Friday',    time: '8:00 AM – 8:00 PM' },
  { day: 'Saturday',  time: '8:00 AM – 8:00 PM' },
  { day: 'Sunday',    time: '10:00 AM – 6:00 PM' },
]

export default function FindUs() {
  return (
    <section className="findus" id="location">

      <div className="findus__inner">

        {/* ── Left: info ── */}
        <div className="findus__info">

          <div className="findus__header">
            <span className="label">Visit Us</span>
            <h2 className="section-title">
              Find <span>Us</span>
            </h2>
          </div>

          <div className="findus__details">

            <div className="findus__detail">
              <span className="findus__detail-title">Location</span>
              <span className="findus__detail-value">Juja, Kiambu County</span>
              <span className="findus__detail-sub">Along Thika Road · Near JKUAT</span>
            </div>

            <div className="findus__detail">
              <span className="findus__detail-title">Contact</span>
              <span className="findus__detail-value">+254 719 202 030</span>
              <span className="findus__detail-sub">WhatsApp & calls welcome</span>
            </div>

            <div className="findus__detail">
              <span className="findus__detail-title">Opening Hours</span>
              <div className="findus__hours">
                {hours.map(h => (
                  <div key={h.day} className="findus__hour-row">
                    <span className="findus__hour-day">{h.day}</span>
                    <span className={`findus__hour-time ${h.time === 'Closed' ? 'findus__hour-time--closed' : ''}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="findus__directions">
            <a
              href="https://www.google.com/maps/place/GlamBox/@-1.0951617,37.0185197,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Get Directions
            </a>
            <a
              href="https://wa.me/254719202030"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </div>

        </div>

        {/* ── Right: embedded map ── */}
        <div className="findus__map">
          <iframe
            title="Glam Box Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0!2d37.0159448!3d-1.0951617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47f6ad545ad7%3A0xfedbe7b338206226!2sGlamBox!5e0!3m2!1sen!2ske!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

    </section>
  )
}