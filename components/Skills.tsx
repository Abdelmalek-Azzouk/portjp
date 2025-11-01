'use client'

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    name: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"],
    icon: "🧠",
    gradient: "from-gray-600 to-gray-400"
  },
  {
    name: "Deep Learning",
    skills: ["Neural Networks", "CNN", "RNN/LSTM", "Transformers", "GANs"],
    icon: "⚡",
    gradient: "from-gray-500 to-gray-300"
  },
  {
    name: "Languages & Tools",
    skills: ["Python", "R", "SQL", "Docker", "Git", "AWS"],
    icon: "🛠️",
    gradient: "from-gray-700 to-gray-500"
  },
  {
    name: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    icon: "📊",
    gradient: "from-gray-600 to-gray-400"
  }
]

const expertiseData = [
  { name: "Machine Learning", level: 95, color: "from-gray-400 to-gray-200" },
  { name: "Deep Learning", level: 90, color: "from-gray-500 to-gray-300" },
  { name: "Python Development", level: 92, color: "from-gray-400 to-gray-200" },
  { name: "Data Analysis", level: 88, color: "from-gray-500 to-gray-300" }
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 px-6">
      <div className="w-full flex justify-center">
        <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in modern AI/ML technologies and frameworks
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="group relative glass rounded-2xl border border-white/10 p-8 hover:border-gray-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 glass rounded-lg border border-white/10 text-gray-300 hover:border-gray-400/50 hover:text-white hover:bg-gray-500/10 transition-all duration-300 transform hover:scale-105 cursor-default"
                      style={{
                        transitionDelay: `${skillIndex * 0.05}s`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Expertise Bars */}
          <div className="glass rounded-2xl border border-white/10 p-8">
            <h3 className="text-3xl font-bold text-white mb-8 font-[var(--font-space-grotesk)]">
              Expertise Level
            </h3>
            <div className="space-y-6">
              {expertiseData.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-gray-300 mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-bold">
                      {isVisible ? skill.level : 0}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="glass rounded-2xl border border-white/10 p-8">
            <h3 className="text-3xl font-bold text-white mb-8 font-[var(--font-space-grotesk)]">
              Certifications
            </h3>
            <div className="space-y-4">
              {[
                "AWS Certified Machine Learning",
                "TensorFlow Developer Certificate",
                "Deep Learning Specialization",
                "Data Science Professional Certificate"
              ].map((cert, index) => (
                <div 
                  key={cert} 
                  className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-gray-400/50 hover:bg-gray-500/5 transition-all duration-300 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease ${index * 0.1}s`
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
