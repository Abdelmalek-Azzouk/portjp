'use client'

const experiences = [
  {
    title: 'Computer Science Bachelor',
    college: 'UMMB, Faculty of Science',
    period: '2022 - 2025',
    desc: 'Specialty of Information Systems'
  },
  {
    title: 'Computer Science Masters',
    college: 'UMMB, Faculty of Science',
    period: '2025 - Present',
    desc: 'Speciality of Applied AI'
  },
]

export default function ExperienceScroll() {
  return (
    <div className="space-y-12 relative pl-8 md:pl-0">
      {/* Vertical Line (The Path) */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-300 transform -translate-x-1/2 hidden md:block"></div>
      
      {experiences.map((exp, index) => (
        <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        }`}>
          
          {/* Timeline Dot (Hanko style) */}
          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-red-800 rounded-full border-4 border-[#f0f0e9] transform md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

          {/* Content */}
          <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'} fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="group border-l-4 md:border-l-0 border-neutral-300 pl-10 md:pl-0 hover:border-red-800 transition-all duration-500 shadow-japanese hover:shadow-japanese-hover p-8 bg-white/50 hover:bg-white/70 paper-texture wabi-sabi">
              <span
                className="text-xs tracking-[0.4em] text-neutral-500 uppercase block mb-4 font-bold"
                style={index === 0 ? { marginLeft: '1.5rem' } : {}}
              >
                {exp.period}
              </span>
              <h3
                className="text-2xl md:text-3xl font-bold text-neutral-900 group-hover:text-red-900 transition-colors mb-3 ink-shadow"
                style={index === 0 ? { marginLeft: '1.5rem' } : {}}
              >
                {exp.title}
              </h3>
              <div
                className="w-16 h-0.5 bg-red-800/40 mb-4 group-hover:w-24 group-hover:bg-red-800 transition-all duration-500"
                style={index === 0 ? { marginLeft: '1.5rem' } : {}}
              ></div>
              <p
                className="text-base text-neutral-600 italic mb-4"
                style={index === 0 ? { marginLeft: '1.5rem' } : {}}
              >
                {exp.college}
              </p>
              <p
                className="text-neutral-700 leading-relaxed text-lg"
                style={index === 0 ? { marginLeft: '1.5rem' } : {}}
              >
                {exp.desc}
              </p>
            </div>
          </div>
          
          {/* Spacer for the other side */}
          <div className="hidden md:block w-1/2"></div>
        </div>
      ))}
    </div>
  )
}