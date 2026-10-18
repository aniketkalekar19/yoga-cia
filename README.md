# PranaVeda Yoga Sanctuary (CIA-2 Project)

> An authentic, holistic online yoga platform bridging ancient Himalayan traditions (Asana, Pranayama, Dhyana, Karma Yoga) with cutting-edge web architecture, zero-dependency Web Audio synthesis, interactive breathing guides, and luxury aesthetics.

---

## 🧘 Project Overview

**PranaVeda Yoga Sanctuary** is a full-featured web application engineered as part of the **Continuous Internal Assessment (CIA-2)**. Rather than treating yoga as superficial gym exercise, the platform articulates the authentic four-fold path of classical yoga according to Patanjali's Yoga Sutras and the Hatha Yoga Pradipika.

### ✨ Key Interactive Features

1. **The Four Classical Pillars**:
   - **Asana**: Physical alignment, Sukshma Vyayama, biomechanical balance & somatic flow.
   - **Pranayama & Kriya**: Conscious breath alchemy, vagal nerve stimulation & nadi purification.
   - **Dhyana & Yoga Nidra**: Mindful meditation, witnessing awareness, and conscious restorative sleep.
   - **Karma Yoga & Philosophy**: Living wisdom, Bhagavad Gita ethics, and community seva.
   - *Interactive curriculum tabs with authentic Sanskrit terminology and classical sutra quotes.*

2. **Interactive Paced Breathwork Coach**:
   - Built-in breathing tool with animated expanding/contracting mandala orb visualizer.
   - 4 Classical Techniques: *Nadi Shodhana*, *Sama Vritti (Box Breathing)*, *4-7-8 Prashanti*, and *Ujjayi Flow*.
   - Real-time countdown timer, stage-by-stage breath instructions, cycle counter, and singing bowl chimes.

3. **Web Audio Sanctuary Synthesizer**:
   - Replicating physical bronze Tibetan singing bowl chimes with realistic partials and exponential decay.
   - Continuous 432 Hz Pythagorean harmonic ambient drone for calming parasympathetic resonance.
   - Zero external audio file dependencies — works 100% offline.

4. **Interactive Asana Anatomy & Alignment Guide**:
   - Filterable pose encyclopedia (Standing, Balancing, Backbends, Inversions, Restorative, Seated).
   - Modal deep-dive with precise biomechanical alignment cues, target chakras, therapeutic benefits, and contraindications.

5. **Live & On-Demand Schedule with Booking Engine**:
   - Filterable by pillar and experience level.
   - Real-time spots remaining capacity progress bar.
   - Interactive booking modal with form validation, confirmation reference generation (`PV-XXXX`), and calendar export simulation.

6. **Membership & Sacred Tuition Matrix**:
   - Monthly vs. Annual toggle with automated 20% discount badge.
   - 3 Tiers: *Sadhaka Pass*, *Abhyasa Immersion* (Featured), and *Guru Kula Circle*.

7. **Aesthetics & Theme**:
   - Organic Zen Luxury color palette: Sage green (`#5B7553`), terracotta (`#C86D51`), warm sand linen (`#FDFBF7`).
   - Cormorant Garamond luxury serif typography + Plus Jakarta Sans UI font.
   - Full Light / Dark Theme toggle with persistence.
   - 100% responsive across mobile, tablet, and widescreen desktop.

---

## 🛠️ Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 (`@vitejs/plugin-react`)
- **Styling**: Vanilla CSS3 with Design Tokens, Glassmorphism, and Keyframe Animations
- **Icons**: Lucide React (`lucide-react`)
- **Audio Engine**: Native Web Audio API (Singing Bowl Synthesis & 432Hz Drone)
- **Linter**: Oxlint (0 warnings, 0 errors)

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Run Linter**:
   ```bash
   npm run lint
   ```
