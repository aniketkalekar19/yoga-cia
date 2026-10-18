import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Calendar
} from 'lucide-react'

export default function Navbar({
  darkMode,
  toggleDarkMode,
  ambientSoundActive,
  toggleAmbientSound,
  onOpenBooking
}) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Four Pillars', href: '#pillars' },
    { name: 'Breath Coach', href: '#breathwork', badge: 'Interactive' },
    { name: 'Live Schedule', href: '#schedule' },
    { name: 'Pose Library', href: '#poses' },
    { name: 'Membership', href: '#pricing' },
    { name: 'About & CIA-2', href: '#about' }
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={(e) => handleLinkClick(e, '#root')}>
          <div className="logo-lotus-wrap">
            <svg viewBox="0 0 100 100" className="brand-lotus-svg" aria-hidden="true">
              <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.12" />
              <path d="M50 20 C42 35 40 55 50 72 C60 55 58 35 50 20 Z" fill="#5B7553" />
              <path d="M50 72 C35 68 22 55 24 40 C32 46 42 58 50 72 Z" fill="#7A9672" />
              <path d="M50 72 C65 68 78 55 76 40 C68 46 58 58 50 72 Z" fill="#7A9672" />
              <path d="M50 72 C28 72 16 64 14 55 C26 55 40 64 50 72 Z" fill="#C86D51" />
              <path d="M50 72 C72 72 84 64 86 55 C74 55 60 64 50 72 Z" fill="#C86D51" />
              <circle cx="50" cy="71" r="3.5" fill="#FAF8F5" />
            </svg>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">PRANAVEDA</span>
            <span className="brand-subtitle">Yoga Sanctuary</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                  {link.badge && <span className="nav-badge-pill">{link.badge}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Sound toggle, Theme, Book CTA) */}
        <div className="nav-actions">
          {/* Ambient Sound Toggle */}
          <button
            type="button"
            className={`icon-action-btn ${ambientSoundActive ? 'sound-active' : ''}`}
            onClick={toggleAmbientSound}
            aria-label={ambientSoundActive ? 'Mute 432Hz ambient drone' : 'Play 432Hz ambient drone'}
            title={ambientSoundActive ? 'Ambient sound active (Click to mute)' : 'Experience 432Hz Sanctuary sound'}
          >
            {ambientSoundActive ? (
              <>
                <Volume2 size={18} className="sound-pulse-icon" />
                <span className="sound-wave-bars">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
              </>
            ) : (
              <VolumeX size={18} />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            className="icon-action-btn"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Book CTA Button */}
          <button
            type="button"
            className="btn-primary nav-book-btn"
            onClick={() => onOpenBooking(null)}
          >
            <Calendar size={15} />
            <span>Book a Class</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-text-block">
                <span className="brand-title">PRANAVEDA</span>
                <span className="brand-subtitle">Yoga Sanctuary</span>
              </div>
              <button
                type="button"
                className="icon-action-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <span>{link.name}</span>
                    {link.badge && <span className="nav-badge-pill">{link.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn-warm full-width-btn"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenBooking(null)
                }}
              >
                <Calendar size={16} />
                Reserve Class Spot
              </button>
              <div className="mobile-sound-row">
                <span>Sanctuary 432Hz Sound</span>
                <button
                  type="button"
                  className={`btn-secondary ${ambientSoundActive ? 'sound-active' : ''}`}
                  onClick={toggleAmbientSound}
                >
                  {ambientSoundActive ? 'Active (Mute)' : 'Enable Sound'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
