'use client'

import { useState, useEffect } from 'react'

export default function JapaneseNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about', kanji: '私' },
    { name: 'Skills', href: '#skills', kanji: '道' },
    { name: 'Experience', href: '#experience', kanji: '技' },
    { name: 'Projects', href: '#projects', kanji: '作' },
  ]

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'bg-[#f0f0e9]/95 backdrop-blur-md py-4 border-b border-neutral-300/50 shadow-japanese' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => scrollTo(e, '#home')} className="group flex items-center gap-3 ink-reveal">
          <span className="hanko w-11 h-11 text-base bg-white shadow-japanese">侍</span>
          <span className="font-bold tracking-[0.2em] text-neutral-800 group-hover:text-red-800 transition-all duration-400 text-lg ink-shadow">KOJIRO</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="group flex flex-col items-center gap-2 fade-in-up wabi-sabi"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="text-base text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-3 group-hover:translate-y-0 font-serif kanji-watermark">
                {item.kanji}
              </span>
              <span className="text-sm font-semibold text-neutral-800 group-hover:text-red-800 tracking-[0.15em] transition-all duration-400 relative">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 group-hover:w-full transition-all duration-400"></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}