import { useState, useEffect, useRef } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Wind,
  Activity
} from 'lucide-react'
import { playSingingBowlChime } from '../utils/audioSynthesizer'

const TECHNIQUES = [
  {
    id: 'nadi-shodhana',
    name: 'Nadi Shodhana',
    english: 'Alternate Nostril Purification',
    purpose: 'Balances left & right brain hemispheres, dissolves mental fog, restores nervous system equilibrium.',
    stages: [
      { name: 'Inhale Left', duration: 4, instruction: 'Close right nostril with thumb. Inhale slowly through left.' },
      { name: 'Retain / Hold', duration: 4, instruction: 'Close both nostrils gently. Hold breath at heart center.' },
      { name: 'Exhale Right', duration: 4, instruction: 'Release thumb. Exhale smoothly through right nostril.' },
      { name: 'Inhale Right', duration: 4, instruction: 'Keep left closed. Inhale smoothly through right.' },
      { name: 'Retain / Hold', duration: 4, instruction: 'Close both nostrils. Retain prana in stillness.' },
      { name: 'Exhale Left', duration: 4, instruction: 'Release ring finger. Exhale completely through left.' }
    ]
  },
  {
    id: 'box-breathing',
    name: 'Sama Vritti (Box Breath)',
    english: 'Equal Ratio Centering',
    purpose: 'Rapidly resets high stress, down-regulates fight-or-flight, sharpens laser focus.',
    stages: [
      { name: 'Inhale', duration: 4, instruction: 'Inhale deeply through nose, filling diaphragm and ribs.' },
      { name: 'Hold Full', duration: 4, instruction: 'Hold breath steady without clenching throat.' },
      { name: 'Exhale', duration: 4, instruction: 'Exhale softly and completely through nose.' },
      { name: 'Hold Empty', duration: 4, instruction: 'Rest in the pause before the next breath arises.' }
    ]
  },
  {
    id: 'deep-calm-478',
    name: '4-7-8 Prashanti Breath',
    english: 'Vagus Nerve Reset',
    purpose: 'Natural sedative for the nervous system, eases racing thoughts before meditation or sleep.',
    stages: [
      { name: 'Inhale', duration: 4, instruction: 'Inhale quietly through nose into deep belly.' },
      { name: 'Hold', duration: 7, instruction: 'Retain breath comfortably with relaxed facial muscles.' },
      { name: 'Exhale', duration: 8, instruction: 'Exhale fully through pursed lips with a gentle whoosh.' }
    ]
  },
  {
    id: 'ujjayi-flow',
    name: 'Ujjayi Pranayama',
    english: 'Oceanic Whispering Breath',
    purpose: 'Builds internal core heat (Agni), anchors rhythm in Vinyasa, expands lung elasticity.',
    stages: [
      { name: 'Inhale (Ocean Sound)', duration: 5, instruction: 'Inhale through nose with slight gentle constriction in throat.' },
      { name: 'Soft Pause', duration: 2, instruction: 'Brief pause in fullness.' },
      { name: 'Exhale (Ocean Sound)', duration: 5, instruction: 'Exhale with soft ocean whisper sound in throat.' },
      { name: 'Soft Pause', duration: 2, instruction: 'Brief pause in stillness.' }
    ]
  }
]

export default function BreathworkCoach() {
  const [activeTechId, setActiveTechId] = useState('nadi-shodhana')
  const [isRunning, setIsRunning] = useState(false)
  const [stageIndex, setStageIndex] = useState(0)
  const [secondsRemaining, setSecondsRemaining] = useState(4)
  const [completedCycles, setCompletedCycles] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)

  const activeTechnique = TECHNIQUES.find((t) => t.id === activeTechId) || TECHNIQUES[0]
  const currentStage = activeTechnique.stages[stageIndex]

  // Track timer interval
  const timerRef = useRef(null)

  // Reset when technique changes
  const handleSelectTechnique = (techId) => {
    setIsRunning(false)
    setActiveTechId(techId)
    setStageIndex(0)
    const tech = TECHNIQUES.find((t) => t.id === techId)
    setSecondsRemaining(tech.stages[0].duration)
    setCompletedCycles(0)
  }

  // Handle Play/Pause
  const togglePlay = () => {
    if (!isRunning && soundEnabled) {
      playSingingBowlChime(432, 2.5)
    }
    setIsRunning(!isRunning)
  }

  // Handle Reset
  const handleReset = () => {
    setIsRunning(false)
    setStageIndex(0)
    setSecondsRemaining(activeTechnique.stages[0].duration)
    setCompletedCycles(0)
  }

  // Timer loop
  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev > 1) {
          return prev - 1
        }

        // Advance to next stage
        setStageIndex((prevStage) => {
          const nextStageIndex = (prevStage + 1) % activeTechnique.stages.length
          const nextStage = activeTechnique.stages[nextStageIndex]

          // If looped back to stage 0, cycle is complete
          if (nextStageIndex === 0) {
            setCompletedCycles((c) => c + 1)
          }

          // Optional sound chime on stage change
          if (soundEnabled) {
            const freq = nextStage.name.includes('Inhale') ? 528 : nextStage.name.includes('Hold') ? 432 : 396
            playSingingBowlChime(freq, 2.0)
          }

          return nextStageIndex
        })

        // Return next stage duration
        const nextStageIdx = (stageIndex + 1) % activeTechnique.stages.length
        return activeTechnique.stages[nextStageIdx].duration
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRunning, activeTechnique, stageIndex, soundEnabled])

  // Orb scaling calculation based on stage
  const isInhale = currentStage.name.toLowerCase().includes('inhale')
  const isHold = currentStage.name.toLowerCase().includes('hold') || currentStage.name.toLowerCase().includes('retain')
  const isExhale = currentStage.name.toLowerCase().includes('exhale')

  let orbClass = 'orb-neutral'
  if (isRunning) {
    if (isInhale) orbClass = 'orb-inhale'
    else if (isHold) orbClass = 'orb-hold'
    else if (isExhale) orbClass = 'orb-exhale'
  }

  return (
    <section className="section breathwork-section" id="breathwork">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Wind size={14} />
            <span>Interactive Pranayama Studio</span>
          </div>
          <h2 className="section-title">Paced Conscious Breath Coach</h2>
          <p className="section-subtitle">
            Synchronize your breath with our interactive Pranayama engine. Experience immediate autonomic nervous system
            regulation, increased vagal tone, and luminous mental clarity.
          </p>
        </div>

        {/* Technique Selector Pills */}
        <div className="tech-selector-grid">
          {TECHNIQUES.map((tech) => {
            const isSelected = tech.id === activeTechId
            return (
              <button
                key={tech.id}
                type="button"
                className={`tech-card-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelectTechnique(tech.id)}
              >
                <div className="tech-btn-header">
                  <Wind size={18} className="tech-icon" />
                  <strong>{tech.name}</strong>
                </div>
                <span className="tech-english-sub">{tech.english}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Breathing Stage Showcase */}
        <div className="breathwork-stage-card glass-card">
          <div className="stage-top-meta">
            <div className="tech-info-left">
              <span className="current-tech-badge">{activeTechnique.name}</span>
              <p className="tech-purpose-text">{activeTechnique.purpose}</p>
            </div>

            <div className="stage-toggles-right">
              <button
                type="button"
                className={`chime-toggle-btn ${soundEnabled ? 'active' : ''}`}
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Singing bowl chimes enabled' : 'Chimes muted'}
              >
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span>Bowl Chime: {soundEnabled ? 'On' : 'Off'}</span>
              </button>
              <div className="cycle-counter-badge">
                <Activity size={14} />
                <span>Cycles: <strong>{completedCycles}</strong></span>
              </div>
            </div>
          </div>

          {/* Central Breathing Orb Visualization */}
          <div className="breath-orb-canvas">
            {/* Ambient Background Aura Rings */}
            <div className={`orb-ring ring-3 ${orbClass}`}></div>
            <div className={`orb-ring ring-2 ${orbClass}`}></div>
            <div className={`orb-ring ring-1 ${orbClass}`}></div>

            {/* Central Animated Orb */}
            <div className={`central-breathing-orb ${orbClass}`}>
              <div className="orb-inner-content">
                <span className="stage-status-label">
                  {isRunning ? currentStage.name : 'Ready'}
                </span>
                <span className="stage-timer-count">
                  {isRunning ? `${secondsRemaining}s` : `${activeTechnique.stages[0].duration}s`}
                </span>
                <span className="stage-guidance-sub">
                  {isInhale ? 'Expanding lungs' : isHold ? 'Stillness & Presence' : isExhale ? 'Releasing tension' : 'Click Begin'}
                </span>
              </div>
            </div>
          </div>

          {/* Prompt Instruction */}
          <div className="stage-instruction-box">
            <p className="instruction-text">
              {isRunning
                ? currentStage.instruction
                : 'Sit upright with a tall, relaxed spine. Press "Begin Practice" to start paced Pranayama.'}
            </p>
          </div>

          {/* Stage Sequence Progress Bar */}
          <div className="stage-steps-track">
            {activeTechnique.stages.map((stg, idx) => {
              const isCurrent = idx === stageIndex && isRunning
              const isPassed = idx < stageIndex && isRunning
              return (
                <div
                  key={idx}
                  className={`stage-step-node ${isCurrent ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                >
                  <span className="step-circle">{idx + 1}</span>
                  <span className="step-label">{stg.name}</span>
                  <span className="step-dur">({stg.duration}s)</span>
                </div>
              )
            })}
          </div>

          {/* Controls Bar */}
          <div className="breath-controls-row">
            <button
              type="button"
              className={`btn-primary breath-play-btn ${isRunning ? 'playing' : ''}`}
              onClick={togglePlay}
            >
              {isRunning ? (
                <>
                  <Pause size={18} />
                  <span>Pause Coach</span>
                </>
              ) : (
                <>
                  <Play size={18} />
                  <span>Begin Practice</span>
                </>
              )}
            </button>

            <button
              type="button"
              className="btn-secondary breath-reset-btn"
              onClick={handleReset}
              title="Reset breath session"
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
