import React from 'react'
import { ArrowRight, Wind, Bell, Sparkles, ShieldCheck, Heart, Users } from 'lucide-react'
import { playSingingBowlChime } from '../utils/audioSynthesizer'

export default function Hero({ onOpenBooking }) {
  const handleChimeClick = () => {
    playSingingBowlChime(528, 4.0)
  }

  return (
    <section className="hero-section" id="hero">
      <div className="hero-backdrop-container">
        <img
          src="./images/hero-sanctuary.jpg"
          alt="Serene PranaVeda Yoga Sanctuary Studio with natural sunlight and plants"
          className="hero-backdrop-image"
        />
        <div className="hero-overlay-gradient"></div>
      </div>

      <div className="container hero-content-wrapper">
        <div className="hero-text-block">
          {/* Eyebrow badge */}
          <div className="hero-badge">
            <Sparkles size={14} className="hero-sparkle-icon" />
            <span>Sacred Lineage • Mindful Modernity • CIA-2 Project</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Awaken Inner Harmony <br />
            <span className="hero-title-italic">Through Ancient Yogic Wisdom</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            Step inside PranaVeda Sanctuary. An authentic journey unifying precision{' '}
            <strong>Asana alignment</strong>, transformative <strong>Pranayama breathwork</strong>, deep{' '}
            <strong>Dhyana meditation</strong>, and selfless <strong>Karma Yoga</strong> living.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#pillars" className="btn-primary hero-btn-main">
              <span>Explore The 4 Pillars</span>
              <ArrowRight size={18} />
            </a>

            <a href="#breathwork" className="btn-secondary hero-btn-sub">
              <Wind size={18} />
              <span>Interactive Breath Coach</span>
            </a>

            {/* Micro-interaction: Tibetan Singing Bowl chime */}
            <button
              type="button"
              className="hero-chime-btn"
              onClick={handleChimeClick}
              title="Ring Tibetan Singing Bowl (Synthesized chime)"
            >
              <Bell size={16} />
              <span>Sound Bell</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <ShieldCheck size={16} className="trust-icon" />
              <span>Patanjali & Hatha Lineage</span>
            </div>
            <div className="trust-dot">•</div>
            <div className="trust-item">
              <Heart size={16} className="trust-icon" />
              <span>Somatic Nervous System Healing</span>
            </div>
            <div className="trust-dot">•</div>
            <div className="trust-item">
              <Users size={16} className="trust-icon" />
              <span>Global Online Sangha</span>
            </div>
          </div>
        </div>

        {/* Floating Quick Card */}
        <div className="hero-floating-card glass-card">
          <div className="card-top-row">
            <span className="live-pulse-dot"></span>
            <span className="live-card-status">Upcoming Sanctuary Gathering</span>
          </div>
          <h3 className="floating-card-title">Sunrise Pranic Alignment Flow</h3>
          <p className="floating-card-meta">
            With Acharya Maya Sharma • 75 Min Live Session
          </p>
          <div className="floating-card-features">
            <span className="feature-pill">Diaphragmatic Breath</span>
            <span className="feature-pill">Hip Decompression</span>
            <span className="feature-pill">Live Q&A</span>
          </div>
          <div className="card-action-row">
            <button
              type="button"
              className="btn-warm card-reserve-btn"
              onClick={() => onOpenBooking(null)}
            >
              Reserve Free Mat Spot
            </button>
          </div>
        </div>
      </div>

      {/* Sanctuary Statistics Bar */}
      <div className="hero-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">4</span>
            <span className="stat-label">Classical Core Pillars</span>
            <span className="stat-sub">Asana • Prana • Dhyana • Karma</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">200+</span>
            <span className="stat-label">On-Demand Masterclasses</span>
            <span className="stat-sub">4K Audio-Visual Archive</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">432 Hz</span>
            <span className="stat-label">Harmonic Sound Healing</span>
            <span className="stat-sub">Pure Sacred Frequencies</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">4.9 ★</span>
            <span className="stat-label">Student Community Trust</span>
            <span className="stat-sub">From 48+ Countries</span>
          </div>
        </div>
      </div>
    </section>
  )
}
