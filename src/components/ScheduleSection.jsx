import React, { useState } from 'react'
import { classesData } from '../data/classes'
import { Calendar, Clock, User, Sparkles, Filter, CheckCircle2 } from 'lucide-react'

export default function ScheduleSection({ onOpenBooking }) {
  const [selectedPillar, setSelectedPillar] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const filteredClasses = classesData.filter((cls) => {
    const matchPillar = selectedPillar === 'all' || cls.pillar === selectedPillar
    const matchLevel =
      selectedLevel === 'all' ||
      (selectedLevel === 'beginner' && cls.level.toLowerCase().includes('beginner')) ||
      (selectedLevel === 'intermediate' && cls.level.toLowerCase().includes('intermediate'))
    return matchPillar && matchLevel
  })

  return (
    <section className="section schedule-section" id="schedule">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Calendar size={14} />
            <span>Live Sanctuary Schedule</span>
          </div>
          <h2 className="section-title">Weekly Live Classes & Gatherings</h2>
          <p className="section-subtitle">
            Join live interactive sessions with certified Himalayan masters. Practice in real-time, ask questions,
            and feel the collective resonance of our global Sangha.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="schedule-filter-bar glass-card">
          <div className="filter-group">
            <span className="filter-label">
              <Filter size={15} />
              Filter by Pillar:
            </span>
            <div className="filter-pills">
              <button
                type="button"
                className={`filter-btn ${selectedPillar === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedPillar('all')}
              >
                All Pillars
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedPillar === 'asana' ? 'active' : ''}`}
                onClick={() => setSelectedPillar('asana')}
              >
                Asana Flow
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedPillar === 'pranayama' ? 'active' : ''}`}
                onClick={() => setSelectedPillar('pranayama')}
              >
                Pranayama & Kriya
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedPillar === 'meditation' ? 'active' : ''}`}
                onClick={() => setSelectedPillar('meditation')}
              >
                Meditation & Nidra
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedPillar === 'karma-yoga' ? 'active' : ''}`}
                onClick={() => setSelectedPillar('karma-yoga')}
              >
                Karma Yoga Sangha
              </button>
            </div>
          </div>

          <div className="filter-group" style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
            <span className="filter-label">
              <Sparkles size={14} />
              Filter by Level:
            </span>
            <div className="filter-pills">
              <button
                type="button"
                className={`filter-btn ${selectedLevel === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedLevel('all')}
              >
                All Levels
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedLevel === 'beginner' ? 'active' : ''}`}
                onClick={() => setSelectedLevel('beginner')}
              >
                Beginner Friendly
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedLevel === 'intermediate' ? 'active' : ''}`}
                onClick={() => setSelectedLevel('intermediate')}
              >
                Intermediate & Sadhaka
              </button>
            </div>
          </div>
        </div>

        {/* Class Cards Grid */}
        <div className="classes-grid">
          {filteredClasses.map((cls) => {
            const spotsPercent = ((cls.totalCapacity - cls.spotsAvailable) / cls.totalCapacity) * 100
            const isNearlyFull = cls.spotsAvailable <= 5

            return (
              <div key={cls.id} className="class-card glass-card">
                <div className="class-card-top">
                  <div className="day-time-badge">
                    <span className="class-day">{cls.day}</span>
                    <span className="class-time">{cls.time}</span>
                  </div>
                  <span className={`pillar-tag-badge pillar-${cls.pillar}`}>
                    {cls.pillarLabel}
                  </span>
                </div>

                <h3 className="class-title">{cls.title}</h3>
                <p className="class-description">{cls.description}</p>

                <div className="class-meta-grid">
                  <div className="meta-item">
                    <User size={15} className="meta-icon" />
                    <span>{cls.instructor}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={15} className="meta-icon" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Sparkles size={15} className="meta-icon" />
                    <span>Intensity: {cls.intensity}</span>
                  </div>
                  <div className="meta-item">
                    <CheckCircle2 size={15} className="meta-icon" />
                    <span>{cls.level}</span>
                  </div>
                </div>

                {/* Spots Availability Bar */}
                <div className="spots-status-block">
                  <div className="spots-text-row">
                    <span className="spots-label">Live Mat Capacity:</span>
                    <span className={`spots-count ${isNearlyFull ? 'nearly-full' : ''}`}>
                      {cls.spotsAvailable} spots remaining
                    </span>
                  </div>
                  <div className="spots-progress-track">
                    <div
                      className={`spots-progress-fill ${isNearlyFull ? 'warning' : ''}`}
                      style={{ width: `${spotsPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Book Action */}
                <button
                  type="button"
                  className="btn-primary class-book-btn"
                  onClick={() => onOpenBooking(cls)}
                >
                  Reserve Live Spot
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
