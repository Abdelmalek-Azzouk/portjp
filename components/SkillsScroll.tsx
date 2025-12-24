'use client'

const skillCategories = [
  { name: "Machine Learning", kanji: "機械学習", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"] },
  { name: "Deep Learning", kanji: "深層学習", skills: ["Neural Networks", "CNN", "RNN/LSTM", "Transformers"] },
  { name: "Development", kanji: "開発", skills: ["Python", "TypeScript", "React", "Docker", "AWS"] },
  { name: "Data Science", kanji: "データ", skills: ["Pandas", "NumPy", "Matplotlib", "Plotly"] }
]

export default function SkillsScroll() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="bg-white/70 p-10 relative overflow-hidden group hover:shadow-japanese-hover transition-all duration-500 shadow-japanese border border-neutral-200/60 paper-texture wabi-sabi fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
          {/* Enhanced Background Kanji Watermark */}
          <div className="absolute -bottom-8 -right-8 text-[10rem] text-neutral-400/6 font-bold group-hover:text-red-900/10 transition-all duration-700 select-none pointer-events-none kanji-watermark" style={{ fontFamily: 'Zen Old Mincho, Noto Serif JP' }}>
            {cat.kanji}
          </div>
          
          {/* Subtle ink bleed effect */}
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(185, 28, 28, 0.05) 0%, transparent 70%)' }}></div>

          <div className="flex items-center gap-5 mb-8 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 ink-shadow">
              {cat.name}
            </h3>
            <span className="text-2xl text-neutral-500 font-serif opacity-70 kanji-watermark">{cat.kanji}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neutral-300 via-red-800/30 to-transparent"></div>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10">
            {cat.skills.map((skill, skillIdx) => (
              <span 
                key={skill}
                className="px-5 py-2.5 bg-white/90 border border-neutral-300 text-sm text-neutral-700 hover:border-red-800 hover:text-red-900 hover:bg-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:scale-105"
                style={{ transitionDelay: `${skillIdx * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}