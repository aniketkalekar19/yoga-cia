import React from 'react'
import { testimonialsData } from '../data/testimonials'
import { Star, Quote, Heart } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Heart size={14} />
            <span>Sangha Reflections</span>
          </div>
          <h2 className="section-title">Stories of Transformation & Peace</h2>
          <p className="section-subtitle">
            Hear from dedicated practitioners—from hospital physicians and software architects to artists—who have made
            PranaVeda their spiritual home.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((test) => (
            <div key={test.id} className="testimonial-card glass-card">
              <div className="testimonial-top">
                <div className="rating-stars">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" fill="currentColor" />
                  ))}
                </div>
                <span className="testimonial-tag-pill">{test.tag}</span>
              </div>

              <blockquote className="testimonial-quote">
                <Quote size={24} className="quote-icon" />
                <p>"{test.quote}"</p>
              </blockquote>

              <div className="testimonial-author-row">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-info">
                  <strong className="author-name">{test.name}</strong>
                  <span className="author-role">{test.role}</span>
                  <span className="author-city">{test.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Holistic Wellness Metrics Banner */}
        <div className="wellness-metrics-strip glass-card">
          <div className="metric-box">
            <span className="metric-num">87%</span>
            <span className="metric-desc">Reported significant reduction in cortisol and daily mental anxiety</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-num">94%</span>
            <span className="metric-desc">Achieved measurable improvements in spinal posture and hip mobility</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-num">10,000+</span>
            <span className="metric-desc">Paced conscious Pranayama breathwork sessions completed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
