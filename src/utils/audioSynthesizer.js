// Pure Web Audio API Synthesizer for Tibetan Singing Bowl & 432Hz Drone
// Requires no external audio files, works offline, 100% reliable!

let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

/**
 * Play a resonant Tibetan Singing Bowl chime
 * @param {number} baseFreq Base frequency in Hz (default 528 Hz or 432 Hz)
 * @param {number} duration Duration in seconds
 */
export function playSingingBowlChime(baseFreq = 528, duration = 3.5) {
  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.001, now)
    masterGain.gain.linearRampToValueAtTime(0.35, now + 0.05)
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    masterGain.connect(ctx.destination)

    // Harmonics replicating physical bronze singing bowl partials
    const partials = [
      { ratio: 1.0, gain: 0.6 },
      { ratio: 2.76, gain: 0.3 },
      { ratio: 5.4, gain: 0.15 },
      { ratio: 8.9, gain: 0.05 }
    ]

    partials.forEach(({ ratio, gain }) => {
      const osc = ctx.createOscillator()
      const oscGain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(baseFreq * ratio, now)

      oscGain.gain.setValueAtTime(gain, now)
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration * (1 / (ratio * 0.4 + 0.6)))

      osc.connect(oscGain)
      oscGain.connect(masterGain)

      osc.start(now)
      osc.stop(now + duration)
    })
  } catch (err) {
    console.warn('Audio synthesis warning:', err)
  }
}

/**
 * Ambient Drone Controller (432Hz Harmonic Serenade)
 */
class SanctuaryDrone {
  constructor() {
    this.isPlaying = false
    this.masterGain = null
    this.oscillators = []
    this.lfo = null
  }

  start(volume = 0.25) {
    if (this.isPlaying) return
    try {
      const ctx = getAudioContext()
      if (!ctx) return

      const now = ctx.currentTime
      this.masterGain = ctx.createGain()
      this.masterGain.gain.setValueAtTime(0.001, now)
      this.masterGain.gain.linearRampToValueAtTime(volume, now + 2) // smooth 2s fade in

      // Lowpass filter for warm temple sound
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(750, now)

      filter.connect(ctx.destination)
      this.masterGain.connect(filter)

      // 432 Hz Pythagorean sacred frequencies:
      // Root: 216Hz, Fifth: 324Hz, Octave: 432Hz, Warm tenth: 540Hz
      const droneFreqs = [216, 324, 432, 648]

      this.oscillators = droneFreqs.map((freq, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        // slight detuning for natural shimmer
        osc.frequency.setValueAtTime(freq + (idx * 0.3 - 0.45), now)

        const level = idx === 0 ? 0.35 : idx === 1 ? 0.25 : 0.15
        gain.gain.setValueAtTime(level, now)

        osc.connect(gain)
        gain.connect(this.masterGain)
        osc.start(now)
        return osc
      })

      this.isPlaying = true
    } catch (err) {
      console.warn('Drone start error:', err)
    }
  }

  stop() {
    if (!this.isPlaying || !this.masterGain) return
    try {
      const ctx = getAudioContext()
      if (ctx) {
        const now = ctx.currentTime
        this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.5)
        setTimeout(() => {
          this.oscillators.forEach(osc => {
            try {
              osc.stop()
              osc.disconnect()
            } catch {
              // ignore
            }
          })
          this.oscillators = []
          this.isPlaying = false
        }, 1600)
      }
    } catch (err) {
      console.warn('Drone stop error:', err)
      this.isPlaying = false
    }
  }

  setVolume(vol) {
    if (this.masterGain && this.isPlaying) {
      const ctx = getAudioContext()
      if (ctx) {
        this.masterGain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.1)
      }
    }
  }
}

export const sanctuaryDrone = new SanctuaryDrone()
