// App.jsx
import './App.css'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import SketchfabEmbed from './components/SketchFabEmbed.jsx'
import { useRef } from 'react'
import './index.css'; // or './styles/tailwind.css' — wherever you added Tailwind directives


function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--x', `${x}%`)
    e.currentTarget.style.setProperty('--y', `${y}%`)
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--x', '-9999px')
    e.currentTarget.style.setProperty('--y', '-9999px')
  }

  return (
    <div className="main-container">
      {/* Hero Section */}
      <div className="fullscreen section">
        <SketchfabEmbed />

        {/* Dual Title */}
        <div className="glass-title-wrapper">
          <div
            className="glass-title-block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ '--default-x': '50%', '--default-y': '50%' }}
          >
            <span className="kanji-layer">プラヤッシュ</span>
            <span className="english-layer">PRAYASH’S</span>
          </div>

          <div
            className="glass-title-block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ '--default-x': '50%', '--default-y': '50%' }}
          >
            <span className="kanji-layer">プロフィール</span>
            <span className="english-layer">DEVELOPER</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
          <button onClick={() => scrollToSection(experienceRef)}>Experience</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </div>
      </div>

      {/* Scrollable Sections */}
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  )
}

export default App
