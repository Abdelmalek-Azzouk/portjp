'use client'

const projects = [
  {
    id: 1,
    title: "Vision System",
    category: "Computer Vision",
    desc: "Real-time object detection using YOLO architecture. Implementing advanced neural networks for industrial precision.",
    tech: ["Python", "PyTorch", "OpenCV"],
    kanji: "視" // Sight
  },
  {
    id: 2,
    title: "Predictive Analytics",
    category: "Deep Learning",
    desc: "Time series forecasting for market trends using LSTM networks. Achieving high accuracy in chaotic data environments.",
    tech: ["TensorFlow", "LSTM", "Pandas"],
    kanji: "予" // Predict
  },
  {
    id: 3,
    title: "NLP Chatbot",
    category: "Natural Language",
    desc: "Conversational agent using Transformer architecture. Fine-tuned on specialized datasets for human-like interaction.",
    tech: ["Transformers", "FastAPI", "Docker"],
    kanji: "言" // Word
  },
  {
    id: 4,
    title: "Anomaly Detection",
    category: "MLOps",
    desc: "Unsupervised learning system for detecting fraudulent patterns in real-time transaction streams.",
    tech: ["Isolation Forest", "AWS", "Kafka"],
    kanji: "防" // Defend
  }
]

export default function ProjectsScroll() {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <div key={project.id} className="group relative border-l-4 border-neutral-300 bg-white/60 p-12 hover:border-red-800 transition-all duration-500 hover:bg-white/80 shadow-japanese hover:shadow-japanese-hover paper-texture wabi-sabi fade-in-up ink-drop" style={{ animationDelay: `${project.id * 0.15}s` }}>
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.4em] uppercase text-red-800 font-bold block mb-2">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 group-hover:translate-x-3 transition-transform duration-400 ink-shadow">
                {project.title}
              </h3>
              <div className="w-20 h-0.5 bg-red-800/50 group-hover:w-32 group-hover:bg-red-800 transition-all duration-500"></div>
            </div>
            {/* Enhanced Stamp Effect */}
            <div className="hidden md:flex h-16 w-16 border-4 border-neutral-300 text-neutral-400 items-center justify-center text-3xl font-serif rounded-full group-hover:border-red-800 group-hover:text-red-800 transition-all duration-500 group-hover:scale-110 shadow-japanese hover:shadow-japanese-hover hanko">
              {project.kanji}
            </div>
          </div>

          <p className="mt-8 text-neutral-700 leading-relaxed max-w-2xl text-lg mb-8">
            {project.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="text-sm border border-neutral-300 px-5 py-2.5 text-neutral-700 bg-white/70 hover:border-red-800 hover:text-red-900 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-base font-semibold border-b-2 border-red-800 text-red-900 pb-2 cursor-pointer hover:border-red-900 transition-colors inline-flex items-center gap-2">
              Examine Code <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}