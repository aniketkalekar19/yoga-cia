import { useState } from 'react'
import { Send, Sparkles, ShieldCheck, MapPin } from 'lucide-react'

const CURRENT_YEAR = 2026

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="sanctuary-footer">
      <div className="container">
        {/* Newsletter Callout Banner */}
        <div className="newsletter-callout glass-card">
          <div className="newsletter-text-block">
            <span className="newsletter-eyebrow">
              <Sparkles size={14} />
              <span>Weekly Sangha Wisdom</span>
            </span>
            <h3 className="newsletter-title">Receive Sacred Sutras & Breathwork Guides</h3>
            <p className="newsletter-sub">
              Every Sunday sunrise, we share one practical translation of Patanjali’s sutras and a 5-minute guided breath exercise.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            {!subscribed ? (
              <div className="newsletter-input-group">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for the Sunday Sutra..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="btn-primary newsletter-submit-btn">
                  <span>Subscribe</span>
                  <Send size={15} />
                </button>
              </div>
            ) : (
              <div className="newsletter-success-badge">
                <ShieldCheck size={18} />
                <span>Namaste! You are enrolled in the Sunday Sangha Sutra.</span>
              </div>
            )}
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-columns-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <div className="logo-lotus-wrap small">
                <svg viewBox="0 0 100 100" className="brand-lotus-svg">
                  <circle cx="50" cy="50" r="48" fill="#5B7553" />
                  <path d="M50 20 C42 35 40 55 50 72 C60 55 58 35 50 20 Z" fill="#FDFBF7" />
                  <path d="M50 72 C35 68 22 55 24 40 C32 46 42 58 50 72 Z" fill="#E8DFD5" />
                  <path d="M50 72 C65 68 78 55 76 40 C68 46 58 58 50 72 Z" fill="#E8DFD5" />
                  <circle cx="50" cy="71" r="3.5" fill="#FAF8F5" />
                </svg>
              </div>
              <span className="brand-title">PRANAVEDA</span>
            </div>
            <p className="footer-bio">
              A sacred digital sanctuary bridging authentic Himalayan traditions with modern somatics, neuroscience,
              and conscious living.
            </p>
            <div className="footer-location-row">
              <MapPin size={15} />
              <span>Dedicated Global Online Sanctuary & Ashram Lineage</span>
            </div>
          </div>

          {/* Column 1: The 4 Pillars */}
          <div className="footer-col">
            <h4 className="footer-col-title">The Four Pillars</h4>
            <ul className="footer-links-list">
              <li><a href="#pillars">Asana Alignment & Flow</a></li>
              <li><a href="#pillars">Pranayama & Kriya Breath</a></li>
              <li><a href="#pillars">Dhyana & Yoga Nidra</a></li>
              <li><a href="#pillars">Karma Yoga & Seva Living</a></li>
              <li><a href="#schedule">Live Class Timetable</a></li>
            </ul>
          </div>

          {/* Column 2: Interactive Tools */}
          <div className="footer-col">
            <h4 className="footer-col-title">Interactive Studio</h4>
            <ul className="footer-links-list">
              <li><a href="#breathwork">Paced Breath Coach</a></li>
              <li><a href="#poses">Asana Pose Encyclopedia</a></li>
              <li><a href="#pricing">Membership Tuition</a></li>
              <li><a href="#testimonials">Sangha Stories</a></li>
              <li><a href="#about">Academic Lineage</a></li>
            </ul>
          </div>

          {/* Column 3: Academic Coursework (CIA-2) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Course Information</h4>
            <div className="cia-footer-info">
              <span className="cia-badge-small">CIA-2 Evaluation Project</span>
              <p className="cia-subtext">
                Continuous Internal Assessment 2 on Full-Stack / Front-End Web Application Architecture.
              </p>
              <div className="cia-stack-tags">
                <span className="stack-tag">React 19</span>
                <span className="stack-tag">Vite 8</span>
                <span className="stack-tag">Web Audio API</span>
                <span className="stack-tag">Vanilla CSS Tokens</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {CURRENT_YEAR} PranaVeda Yoga Sanctuary • Created with reverence for CIA-2 Course Assessment.
          </p>
          <div className="footer-bottom-links">
            <a href="#hero">Privacy Policy</a>
            <span>•</span>
            <a href="#hero">Terms of Sadhana</a>
            <span>•</span>
            <a href="#hero">Code of Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
