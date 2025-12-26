'use client'

const projects = [
  {
    id: 1,
    title: "Binary Classification",
    category: "Computer Vision",
    desc: "Melanoma Detection System using convolutional neural networks, and transformers.",
    tech: ["Python", "PyTorch", "TensorFlow", "CNNs", "Transformers"],
    link: "https://huggingface.co/Melidk/Melanoma_Classification"
  },
  {
    id: 2,
    title: "Predictive Analytics",
    category: "Deep Learning",
    desc: "Time series forecasting for market trends using LSTM networks. Achieving high accuracy in chaotic data environments.",
    tech: ["TensorFlow", "LSTM", "Pandas"],
    link: "/projects/predictive-analytics"
  },
  {
    id: 3,
    title: "NLP Chatbot",
    category: "Natural Language",
    desc: "Conversational agent using Transformer architecture. Fine-tuned on specialized datasets for human-like interaction.",
    tech: ["Transformers", "FastAPI", "Docker"],
    link: "/projects/nlp-chatbot"
  },
  {
    id: 4,
    title: "Anomaly Detection",
    category: "MLOps",
    desc: "Unsupervised learning system for detecting fraudulent patterns in real-time transaction streams.",
    tech: ["Isolation Forest", "AWS", "Kafka"],
    link: "/projects/anomaly-detection"
  }
]

function isExternalLink(link: string) {
  return /^https?:\/\//.test(link)
}

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
            {/* Stamp Effect Removed - Kanji deleted */}
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
            <a
              href={project.link}
              className="text-base font-semibold border-b-2 border-red-800 text-red-900 pb-2 cursor-pointer hover:border-red-900 transition-colors inline-flex items-center gap-2"
              {...(isExternalLink(project.link)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Examine <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}