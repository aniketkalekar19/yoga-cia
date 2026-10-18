import { useState } from 'react'
import { X, CheckCircle2, Calendar, Clock, User, Sparkles, Download } from 'lucide-react'
import { playSingingBowlChime } from '../utils/audioSynthesizer'
import { classesData } from '../data/classes'

export default function BookingModal({ bookingItem, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    classId: bookingItem?.id || (classesData[0] ? classesData[0].id : ''),
    level: 'Beginner',
    notes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  const selectedClass = classesData.find((c) => c.id === formData.classId) || bookingItem || classesData[0]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Generate unique sanctuary reference code
    const randomCode = `PV-${Math.floor(1000 + Math.random() * 9000)}`
    setBookingRef(randomCode)
    setIsSubmitted(true)
    playSingingBowlChime(528, 3.5)
  }

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="booking-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close booking modal">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="booking-modal-header">
              <span className="booking-eyebrow">
                <Sparkles size={14} />
                {bookingItem?.isPlan ? 'Sanctuary Enrollment' : 'Reserve Sanctuary Mat'}
              </span>
              <h3 className="booking-modal-title">
                {bookingItem?.title || 'Book Your Live Gathering'}
              </h3>
              <p className="booking-modal-sub">
                Secure your real-time practice spot with certified lineage teachers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Aris Thorne"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. aris@sanctuary.org"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {!bookingItem?.isPlan && (
                <div className="form-group">
                  <label htmlFor="classId" className="form-label">Select Session *</label>
                  <select
                    id="classId"
                    name="classId"
                    value={formData.classId}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {classesData.map((cls) => (
                      <option key={cls.id} value={cls.id}>
                        {cls.day} • {cls.title} ({cls.time})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="level" className="form-label">Your Experience</label>
                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Some Experience (6 mo+)">Some Experience (6 mo+)</option>
                    <option value="Dedicated Sadhaka (2 yr+)">Dedicated Sadhaka (2 yr+)</option>
                    <option value="Yoga Teacher / Advanced">Yoga Teacher / Advanced</option>
                  </select>
                </div>

                <div className="form-group half-width">
                  <label htmlFor="notes" className="form-label">Injury / Health Notes</label>
                  <input
                    type="text"
                    id="notes"
                    name="notes"
                    placeholder="e.g. stiff lower back, wrist sensitivity"
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-notice-box">
                <p>
                  ✓ 100% complimentary trial spot for new practitioners • Live Zoom & Studio replay link delivered immediately.
                </p>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary form-submit-btn">
                  <span>Confirm Reservation</span>
                  <CheckCircle2 size={16} />
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Confirmation Success Screen */
          <div className="booking-success-view">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="success-icon" />
            </div>

            <h3 className="success-title">Your Mat is Reserved!</h3>
            <p className="success-subtitle">
              Namaste, <strong>{formData.name}</strong>. Your sanctuary gathering invitation has been dispatched to{' '}
              <strong>{formData.email}</strong>.
            </p>

            <div className="confirmation-card glass-card">
              <div className="conf-code-row">
                <span className="conf-label">Sanctuary Passcode</span>
                <strong className="conf-code">{bookingRef}</strong>
              </div>

              <div className="conf-details-list">
                <div className="conf-item">
                  <Calendar size={16} className="conf-icon" />
                  <span>{selectedClass.day || 'Scheduled Live Session'}</span>
                </div>
                <div className="conf-item">
                  <Clock size={16} className="conf-icon" />
                  <span>{selectedClass.time || '10:00 AM IST'}</span>
                </div>
                <div className="conf-item">
                  <User size={16} className="conf-icon" />
                  <span>Instructor: {selectedClass.instructor || 'Lead Acharya'}</span>
                </div>
              </div>

              <div className="conf-zoom-badge">
                <span>HD Interactive Studio Stream Access: <strong>Included</strong></span>
              </div>
            </div>

            <div className="success-actions">
              <button
                type="button"
                className="btn-warm"
                onClick={() => {
                  alert(`Calendar event saved! Booking Ref: ${bookingRef}`)
                  onClose()
                }}
              >
                <Download size={16} />
                <span>Save to Calendar</span>
              </button>
              <button type="button" className="btn-secondary" onClick={onClose}>
                Return to Sanctuary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
