'use client'

import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

interface WindowProps {
  activeTab: string
}

export default function Window({ activeTab }: WindowProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'About Me':
        return <AboutMe />
      case 'Experience':
        return <Experience />
      case 'Skills':
        return <Skills />
      case 'Projects':
        return <Projects />
      case 'Contact Me':
        return <Contact />
      default:
        return <AboutMe />
    }
  }

  return (
    <div className="pixel-window min-h-[600px] max-w-6xl mx-auto my-8">
      <div className="pixel-text text-yellow-400">
        {renderContent()}
      </div>
    </div>
  )
}

