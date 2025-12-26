'use client'

import Image from 'next/image'
import {
  siTensorflow,
  siPytorch,
  siScikitlearn,
  siKeras,
  siPython,
  siReact,
  siDocker,     // <-- fixed
  siTypescript,
  siPandas,
  siNumpy,
  siPlotly
} from 'simple-icons'


const skillIconMap: Record<string, any> = {
  TensorFlow: siTensorflow,
  PyTorch: siPytorch,
  'Scikit-learn': siScikitlearn,
  Keras: siKeras,
  Python: siPython,
  React: siReact,
  Docker: siDocker,     // <-- fixed
  TypeScript: siTypescript,
  Pandas: siPandas,
  NumPy: siNumpy,
  Plotly: siPlotly
}


const skillCategories = [
  {
    name: 'Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
    ink: '/inktl.jpg',
    inkAlt: 'Ink top left'
  },
  {
    name: 'Deep Learning',
    skills: ['Neural Networks', 'CNN', 'RNN/LSTM', 'Transformers'],
    ink: '/inktr.jpg',
    inkAlt: 'Ink top right'
  },
  {
    name: 'Development',
    skills: ['Python', 'TypeScript', 'React', 'Docker'],
    ink: '/inkbl.jpg',
    inkAlt: 'Ink bottom left'
  },
  {
    name: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
    ink: '/inkbr.jpg',
    inkAlt: 'Ink bottom right'
  }
]

export default function SkillsScroll() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((cat, idx) => (
        <div
          key={idx}
          className="bg-white/70 p-10 relative overflow-hidden group hover:shadow-japanese-hover transition-all duration-500 shadow-japanese border border-neutral-200/60 paper-texture wabi-sabi fade-in-up"
          style={{ animationDelay: `${idx * 0.15}s` }}
        >
          {/* Ink background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-23 transition-opacity duration-700 pointer-events-none">
            <Image
              src={cat.ink}
              alt={cat.inkAlt}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center gap-5 mb-8 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 ink-shadow">
              {cat.name}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-neutral-300 via-red-800/30 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-3 relative z-10">
            {cat.skills.map((skill, skillIdx) => {
              const icon = skillIconMap[skill]

              return (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/90 border border-neutral-300 text-sm text-neutral-700 hover:border-red-800 hover:text-red-900 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                  style={{ transitionDelay: `${skillIdx * 0.05}s` }}
                >
                  {icon && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d={icon.path} />
                    </svg>
                  )}
                  {skill}
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
