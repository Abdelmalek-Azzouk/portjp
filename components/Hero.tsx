'use client'

import { useState, useEffect } from 'react'

const typingTexts = [
  'AI Engineer',
  'ML Specialist',
  'Data Scientist',
  'Deep Learning Expert',
]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const type = () => {
      const currentText = typingTexts[currentTextIndex]
      
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }

    const timeout = setTimeout(type, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full flex justify-center">
        <div className="container mx-auto max-w-6xl relative z-10 text-center w-full">
        {/* Badge */}
        <div className="inline-block mb-8 px-6 py-3 glass rounded-full border border-gray-400/30 backdrop-blur-sm glow-effect">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-sm font-medium">
            AI & Machine Learning Engineer
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight font-[var(--font-space-grotesk)]">
          <span className="block mb-2">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Transforming
            </span>
          </span>
          <span className="block">
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 bg-clip-text text-transparent">
              Ideas With
            </span>
          </span>
          <span className="block mt-2">
            <span className="text-shimmer">
              Intelligence
            </span>
          </span>
        </h1>

        {/* Typing Effect */}
        <div className="mb-8 h-12 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-semibold text-gray-300">
            I'm a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-bold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building innovative{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-semibold">
            AI solutions
          </span>
          {' '}and machine learning models that solve real-world problems and push the boundaries of what's possible.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => handleScrollTo('#projects')}
            className="group relative px-10 py-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 border border-gray-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={() => handleScrollTo('#contact')}
            className="group px-10 py-4 glass border-2 border-gray-400/50 rounded-xl font-semibold text-white hover:border-gray-300 hover:bg-gray-500/10 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
          </div>
        </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
