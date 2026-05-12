import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <>
      <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
