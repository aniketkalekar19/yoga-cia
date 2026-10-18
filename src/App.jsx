import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PillarsSection from './components/PillarsSection'
import BreathworkCoach from './components/BreathworkCoach'
import ScheduleSection from './components/ScheduleSection'
import PoseLibrary from './components/PoseLibrary'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutSanctuary from './components/AboutSanctuary'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import SoundBar from './components/SoundBar'
import { sanctuaryDrone } from './utils/audioSynthesizer'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('pranaveda_theme') === 'dark'
  })

  const [ambientSoundActive, setAmbientSoundActive] = useState(false)
  const [bookingModalItem, setBookingModalItem] = useState(null)

  // Apply dark mode attribute
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('pranaveda_theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('pranaveda_theme', 'light')
    }
  }, [darkMode])

  // Toggle dark/light theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Toggle ambient 432Hz sound
  const toggleAmbientSound = () => {
    if (ambientSoundActive) {
      sanctuaryDrone.stop()
      setAmbientSoundActive(false)
    } else {
      sanctuaryDrone.start(0.22)
      setAmbientSoundActive(true)
    }
  }

  // Handle open booking modal
  const handleOpenBooking = (item = null) => {
    setBookingModalItem(item || { title: 'Sanctuary Mat Reservation' })
  }

  const handleCloseBooking = () => {
    setBookingModalItem(null)
  }

  return (
    <div className="sanctuary-app-root">
      {/* Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        ambientSoundActive={ambientSoundActive}
        toggleAmbientSound={toggleAmbientSound}
        onOpenBooking={handleOpenBooking}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4 Pillars of Yoga */}
        <PillarsSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Breathwork Coach */}
        <BreathworkCoach />

        {/* Live & On-Demand Schedule */}
        <ScheduleSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Pose Alignment Library */}
        <PoseLibrary onOpenBooking={handleOpenBooking} />

        {/* Tuition & Membership Pricing */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Testimonials & Sangha Transformation */}
        <TestimonialsSection />

        {/* About Sanctuary, Lineage & CIA-2 Project */}
        <AboutSanctuary />
      </main>

      {/* Sanctuary Footer */}
      <Footer />

      {/* Floating Sound Bar Controller */}
      <SoundBar
        ambientSoundActive={ambientSoundActive}
        toggleAmbientSound={toggleAmbientSound}
      />

      {/* Booking Dialog Modal */}
      {bookingModalItem && (
        <BookingModal
          bookingItem={bookingModalItem}
          onClose={handleCloseBooking}
        />
      )}
    </div>
  )
}
