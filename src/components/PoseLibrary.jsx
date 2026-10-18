import React, { useState } from 'react'
import { posesData } from '../data/poses'
import { BookOpen, Sparkles, Check, AlertCircle, ChevronRight, Layers, X, Award, Eye } from 'lucide-react'

export default function PoseLibrary({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPose, setSelectedPose] = useState(null)

  const categories = ['All', 'Seated & Meditation', 'Balancing', 'Backbend', 'Restorative', 'Pranayama & Seated', 'Standing']

  const demonstratedPoses = posesData.filter((p) => p.isDemonstrated)

  const filteredPoses = activeCategory === 'All'
    ? posesData
    : posesData.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()))

  return (
    <section className="section pose-library-section" id="poses">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <BookOpen size={14} />
            <span>Interactive Asana Encyclopedia</span>
          </div>
          <h2 className="section-title">Anatomy & Alignment Pose Guide</h2>
          <p className="section-subtitle">
            Deepen your bodily intelligence. Explore classical asanas demonstrated for the CIA-2 Portfolio with
            biomechanical cues, chakra activations, and precise anatomical precautions.
          </p>
        </div>

        {/* Featured Student Practicum Showcase Strip */}
        <div className="student-showcase-card glass-card">
          <div className="showcase-header">
            <div className="showcase-badge-group">
              <span className="showcase-badge">
                <Award size={14} />
                <span>CIA-2 Student Practicum Showcase</span>
              </span>
              <h3 className="showcase-title">Five Core Yogic Asanas & Mudras</h3>
            </div>
            <p className="showcase-desc">
              Authentic student demonstrations in natural surroundings, capturing the progression from grounding meditation to spinal extension, balance, breathwork, and conscious relaxation.
            </p>
          </div>

          <div className="showcase-thumbnails-grid">
            {demonstratedPoses.map((pose) => (
              <div
                key={pose.id}
                className="showcase-thumb-item"
                onClick={() => setSelectedPose(pose)}
              >
                <div className="thumb-image-wrap">
                  <img
                    src={pose.image}
                    alt={pose.english}
                    className="thumb-img"
                    loading="lazy"
                  />
                  <div className="thumb-overlay">
                    <Eye size={18} />
                    <span>View Alignment</span>
                  </div>
                </div>
                <div className="thumb-meta">
                  <strong className="thumb-sanskrit">{pose.sanskrit}</strong>
                  <span className="thumb-english">{pose.english.split('(')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="pose-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Poses Grid */}
        <div className="poses-grid">
          {filteredPoses.map((pose) => (
            <div
              key={pose.id}
              className="pose-card glass-card"
              onClick={() => setSelectedPose(pose)}
            >
              {/* Pose Card Image Thumbnail */}
              {pose.image && (
                <div className="pose-card-image-wrap">
                  <img
                    src={pose.image}
                    alt={pose.english}
                    className="pose-card-img"
                    loading="lazy"
                  />
                  {pose.isDemonstrated && (
                    <span className="student-demo-pill">
                      <Sparkles size={11} />
                      CIA-2 Student Photo
                    </span>
                  )}
                </div>
              )}

              <div className="pose-card-header">
                <span className="pose-level-tag">{pose.level}</span>
                <span className="pose-category-tag">{pose.category}</span>
              </div>

              <div className="pose-title-block">
                <h3 className="pose-sanskrit-title">{pose.sanskrit}</h3>
                <span className="pose-english-name">{pose.english}</span>
              </div>

              <div className="pose-chakra-row">
                <Sparkles size={14} className="chakra-icon" />
                <span className="chakra-name">{pose.chakra}</span>
              </div>

              <p className="pose-card-benefits">{pose.benefits}</p>

              <div className="pose-card-footer">
                <span className="view-details-prompt">
                  View Alignment Cues <ChevronRight size={15} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Pose Modal */}
        {selectedPose && (
          <div className="modal-backdrop-overlay" onClick={() => setSelectedPose(null)}>
            <div className="pose-detail-modal glass-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header-row">
                <div>
                  <span className="modal-category-badge">{selectedPose.category} • {selectedPose.level}</span>
                  <h3 className="modal-sanskrit-title">{selectedPose.sanskrit}</h3>
                  <span className="modal-english-sub">{selectedPose.english}</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedPose(null)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* High-res Image Showcase inside Modal */}
              {selectedPose.image && (
                <div className="modal-pose-image-wrap">
                  <img
                    src={selectedPose.image}
                    alt={selectedPose.english}
                    className="modal-pose-full-img"
                  />
                  {selectedPose.isDemonstrated && (
                    <div className="modal-image-caption">
                      <Award size={14} />
                      <span>Continuous Internal Assessment (CIA-2) Student Practicum Demonstration</span>
                    </div>
                  )}
                </div>
              )}

              <div className="modal-body-content">
                <div className="modal-info-block">
                  <h4 className="modal-block-heading">
                    <Layers size={16} />
                    <span>Precise Biomechanical Cues:</span>
                  </h4>
                  <ul className="modal-cues-list">
                    {selectedPose.cues.map((cue, idx) => (
                      <li key={idx} className="modal-cue-item">
                        <Check size={16} className="cue-check-icon" />
                        <span>{cue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-meta-grid">
                  <div className="meta-card">
                    <span className="meta-card-label">Energetic Chakra Center</span>
                    <strong className="meta-card-value">{selectedPose.chakra}</strong>
                  </div>
                  <div className="meta-card">
                    <span className="meta-card-label">Therapeutic Value</span>
                    <p className="meta-card-text">{selectedPose.benefits}</p>
                  </div>
                </div>

                {selectedPose.cautions && (
                  <div className="modal-caution-alert">
                    <AlertCircle size={18} className="caution-icon" />
                    <div>
                      <strong>Anatomical Contraindications:</strong>
                      <p>{selectedPose.cautions}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer-row">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setSelectedPose(null)}
                >
                  Close Guide
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    const pose = selectedPose
                    setSelectedPose(null)
                    onOpenBooking({ title: `${pose.sanskrit} Live Immersion`, pillar: 'asana' })
                  }}
                >
                  Practice in Live Class
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
