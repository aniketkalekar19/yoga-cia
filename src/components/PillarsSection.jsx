import React, { useState } from 'react'
import { programsData } from '../data/programs'
import { CheckCircle2, BookOpen, User, Sparkles, ArrowRight, Play } from 'lucide-react'

export default function PillarsSection({ onOpenBooking }) {
  const [activePillarId, setActivePillarId] = useState('asana')

  const activePillar = programsData.find((p) => p.id === activePillarId) || programsData[0]

  return (
    <section className="section pillars-section" id="pillars">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>The Classical Framework</span>
          </div>
          <h2 className="section-title">The Four Sacred Pillars of Yoga</h2>
          <p className="section-subtitle">
            Yoga is not just physical gymnastics. At PranaVeda, our holistic curriculum balances the physical,
            respiratory, meditative, and ethical dimensions of human consciousness.
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="pillar-tabs-container">
          <div className="pillar-tabs-wrapper">
            {programsData.map((pillar) => {
              const isActive = pillar.id === activePillarId
              return (
                <button
                  key={pillar.id}
                  type="button"
                  className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActivePillarId(pillar.id)}
                >
                  <span className="pillar-tab-tag">{pillar.tag}</span>
                  <span className="pillar-tab-title">{pillar.title.split(':')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Pillar Showcase Card */}
        <div className="active-pillar-card glass-card">
          <div className="pillar-grid">
            {/* Left: Image with Overlays */}
            <div className="pillar-image-column">
              <div className="pillar-image-frame">
                <img
                  src={activePillar.image}
                  alt={activePillar.title}
                  className="pillar-display-img"
                />
                <div className="pillar-image-badge">
                  <span className="sanskrit-text">{activePillar.sanskritName}</span>
                </div>
              </div>

              {/* Classical Quote Callout */}
              <blockquote className="pillar-quote-box">
                <p>{activePillar.quote}</p>
              </blockquote>
            </div>

            {/* Right: Details, Curriculum, Instructor */}
            <div className="pillar-details-column">
              <div className="pillar-meta-row">
                <span className="pillar-badge-pill">{activePillar.tag}</span>
                <span className="pillar-level-pill">{activePillar.level}</span>
                <span className="pillar-freq-pill">{activePillar.frequency}</span>
              </div>

              <h3 className="pillar-main-title">{activePillar.title}</h3>
              <p className="pillar-lead-subtitle">{activePillar.subtitle}</p>
              <p className="pillar-body-text">{activePillar.description}</p>

              {/* Core Benefits */}
              <div className="pillar-benefits-block">
                <h4 className="benefits-title">Core Physiological & Spiritual Outcomes:</h4>
                <ul className="benefits-list">
                  {activePillar.benefits.map((benefit, i) => (
                    <li key={i} className="benefit-item">
                      <CheckCircle2 size={18} className="benefit-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum Modules Preview */}
              <div className="pillar-curriculum-block">
                <h4 className="curriculum-title">Curriculum Progression:</h4>
                <div className="curriculum-grid">
                  {activePillar.curriculum.map((item, idx) => (
                    <div key={idx} className="curriculum-item">
                      <span className="curriculum-step-tag">{item.week}</span>
                      <strong className="curriculum-item-title">{item.title}</strong>
                      <p className="curriculum-item-details">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Instructor & Action CTAs */}
              <div className="pillar-footer-row">
                <div className="instructor-badge">
                  <User size={16} className="instructor-icon" />
                  <div>
                    <span className="instructor-label">Lead Mentor</span>
                    <strong className="instructor-name">{activePillar.leadInstructor}</strong>
                  </div>
                </div>

                <div className="pillar-action-buttons">
                  {activePillar.id === 'pranayama' && (
                    <a href="#breathwork" className="btn-warm">
                      <Play size={16} />
                      <span>Start Breath Coach</span>
                    </a>
                  )}
                  {activePillar.id === 'asana' && (
                    <a href="#poses" className="btn-secondary">
                      <BookOpen size={16} />
                      <span>Pose Alignment Guide</span>
                    </a>
                  )}
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => onOpenBooking({ title: `${activePillar.title} Immersion`, pillar: activePillar.id })}
                  >
                    <span>Reserve Class</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
