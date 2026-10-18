import {
  GraduationCap,
  Heart,
  Globe,
  Compass
} from 'lucide-react'

export default function AboutSanctuary() {
  const instructors = [
    {
      name: 'Acharya Maya Sharma',
      title: 'E-RYT 500 • Head of Asana Alignment',
      lineage: 'Himalayan Hatha & Iyengar Precision',
      desc: '15+ years guiding students in spinal biomechanics, somatic movement, and functional anatomy.'
    },
    {
      name: 'Swami Devendra Nath',
      title: 'Pranayama & Kriya Master',
      lineage: 'Kaivalyadhama Traditional Breath Science',
      desc: 'Specialist in autonomic nervous system regulation, vagal tone activation, and classical kumbhaka.'
    },
    {
      name: 'Ananya Roy',
      title: 'Dhyana & Yoga Nidra Guide',
      lineage: 'Bihar School of Yoga & Vipassana',
      desc: 'Expert in sleep architecture, theta-wave sound meditation, and emotional stress release.'
    },
    {
      name: 'Dr. Radhakrishnan Iyer',
      title: 'Sanskrit Scholar & Philosophy Dean',
      lineage: 'Classical Advaita & Patanjali Darshana',
      desc: 'Translating ancient texts into modern, practical ethical frameworks and community Karma Yoga service.'
    }
  ]

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={14} />
            <span>Academic Project & Lineage</span>
          </div>
          <h2 className="section-title">Rooted in Tradition, Designed for Tomorrow</h2>
          <p className="section-subtitle">
            PranaVeda Yoga Sanctuary is an authentic student project developed for the Continuous Internal Assessment (CIA-2).
            Our mission is to prove that modern digital interfaces can honor timeless sacred sciences without diluting their essence.
          </p>
        </div>

        {/* Academic CIA-2 Details Box */}
        <div className="cia-academic-card glass-card">
          <div className="cia-card-header">
            <div className="cia-title-group">
              <span className="cia-tag">Academic Coursework</span>
              <h3 className="cia-heading">CIA-2 Web Application Portfolio Project</h3>
            </div>
            <div className="cia-status-pill">
              <span className="pulse-dot"></span>
              <span>Fully Functional Prototype</span>
            </div>
          </div>

          <div className="cia-content-grid">
            <div className="cia-info-item">
              <span className="cia-info-label">Project Domain</span>
              <strong className="cia-info-val">Holistic Digital Yoga & Wellness Platform</strong>
            </div>
            <div className="cia-info-item">
              <span className="cia-info-label">Core Architecture</span>
              <strong className="cia-info-val">Vite 8 + React 19 + Vanilla Design Tokens</strong>
            </div>
            <div className="cia-info-item">
              <span className="cia-info-label">Interactive Innovations</span>
              <strong className="cia-info-val">Paced Pranayama Coach & Web Audio Synthesizer</strong>
            </div>
            <div className="cia-info-item">
              <span className="cia-info-label">Visual & Pedagogic Standard</span>
              <strong className="cia-info-val">Zero Placeholders • Patanjali Ashtanga Integrity</strong>
            </div>
          </div>
        </div>

        {/* Lead Faculty / Instructors Showcase */}
        <div className="teachers-block">
          <div className="teachers-header">
            <h3 className="teachers-section-title">Our Sacred Lineage Guides</h3>
            <p className="teachers-section-sub">
              Learning directly from master teachers with decades of dedicated monastic and clinical experience.
            </p>
          </div>

          <div className="teachers-grid">
            {instructors.map((t, i) => (
              <div key={i} className="teacher-card glass-card">
                <div className="teacher-badge-row">
                  <span className="lineage-pill">{t.lineage}</span>
                </div>
                <h4 className="teacher-name">{t.name}</h4>
                <span className="teacher-title">{t.title}</span>
                <p className="teacher-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Matrix */}
        <div className="values-matrix-grid">
          <div className="value-card glass-card">
            <div className="value-icon-box">
              <Compass size={22} className="value-icon" />
            </div>
            <h4 className="value-title">Authentic Lineage</h4>
            <p className="value-text">
              No fitness gimmicks or superficial trends. Every sequence respects classical roots from the Yoga Sutras and Hatha scriptures.
            </p>
          </div>

          <div className="value-card glass-card">
            <div className="value-icon-box">
              <Heart size={22} className="value-icon" />
            </div>
            <h4 className="value-title">Somatic Safety</h4>
            <p className="value-text">
              Every body is unique. We provide biomechanically sound cues, variations with props, and contraindication notices.
            </p>
          </div>

          <div className="value-card glass-card">
            <div className="value-icon-box">
              <Globe size={22} className="value-icon" />
            </div>
            <h4 className="value-title">Karma & Seva in Action</h4>
            <p className="value-text">
              A portion of our tuition sustains community outreach, tree planting, and conscious nutrition programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
