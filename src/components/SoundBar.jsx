import { useState } from 'react'
import { Volume2, VolumeX, Bell, ChevronDown, ChevronUp } from 'lucide-react'
import { playSingingBowlChime, sanctuaryDrone } from '../utils/audioSynthesizer'

export default function SoundBar({ ambientSoundActive, toggleAmbientSound }) {
  const [volume, setVolume] = useState(0.25)
  const [minimized, setMinimized] = useState(false)

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    sanctuaryDrone.setVolume(val)
  }

  const handleRingChime = () => {
    playSingingBowlChime(528, 4.0)
  }

  return (
    <div className={`sanctuary-sound-bar ${minimized ? 'minimized' : ''} glass-card`}>
      <div className="soundbar-header" onClick={() => setMinimized(!minimized)}>
        <div className="soundbar-title-row">
          <div className="sound-pulse-wrap">
            <span className={`audio-dot ${ambientSoundActive ? 'pulse' : ''}`}></span>
          </div>
          <span className="soundbar-label">432Hz Sanctuary Audio</span>
        </div>
        <button
          type="button"
          className="soundbar-collapse-btn"
          onClick={(e) => {
            e.stopPropagation()
            setMinimized(!minimized)
          }}
          aria-label={minimized ? 'Expand soundbar' : 'Collapse soundbar'}
        >
          {minimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {!minimized && (
        <div className="soundbar-body">
          <div className="sound-control-row">
            <button
              type="button"
              className={`sound-toggle-main-btn ${ambientSoundActive ? 'active' : ''}`}
              onClick={toggleAmbientSound}
              title={ambientSoundActive ? 'Mute 432Hz Drone' : 'Play 432Hz Drone'}
            >
              {ambientSoundActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
              <span>{ambientSoundActive ? 'Ambient Playing' : 'Ambient Off'}</span>
            </button>

            {/* Sing Bowl chime trigger */}
            <button
              type="button"
              className="sound-chime-single-btn"
              onClick={handleRingChime}
              title="Ring Tibetan Bronze Singing Bowl"
            >
              <Bell size={15} />
              <span>Singing Bowl</span>
            </button>
          </div>

          {/* Volume Slider */}
          {ambientSoundActive && (
            <div className="soundbar-volume-row">
              <span className="vol-label">Vol:</span>
              <input
                type="range"
                min="0.05"
                max="0.6"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="sound-volume-slider"
                aria-label="Sanctuary ambient sound volume"
              />
            </div>
          )}

          <p className="soundbar-footnote">
            Harmonic Pythagorean tuning designed for calm parasympathetic resonance.
          </p>
        </div>
      )}
    </div>
  )
}
