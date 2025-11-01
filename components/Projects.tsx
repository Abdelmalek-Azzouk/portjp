'use client'

import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    id: 1,
    title: "Computer Vision System",
    description: "Real-time object detection and classification using YOLO architecture with 95% accuracy. Advanced neural network implementation for industrial applications.",
    tags: ["Python", "PyTorch", "OpenCV", "YOLO"],
    category: "Computer Vision",
    gradient: "from-gray-600 to-gray-400",
    icon: "👁️"
  },
  {
    id: 2,
    title: "Predictive Analytics",
    description: "Time series forecasting model for stock market predictions with LSTM networks. Achieves 92% accuracy in trend prediction using advanced deep learning.",
    tags: ["TensorFlow", "LSTM", "Pandas", "Scikit-learn"],
    category: "Deep Learning",
    gradient: "from-gray-500 to-gray-300",
    icon: "📈"
  },
  {
    id: 3,
    title: "NLP Chatbot",
    description: "AI-powered conversational agent using transformer models for customer support. Leverages GPT architecture for natural language understanding.",
    tags: ["Transformers", "HuggingFace", "FastAPI", "Docker"],
    category: "NLP",
    gradient: "from-gray-700 to-gray-500",
    icon: "💬"
  },
  {
    id: 4,
    title: "Anomaly Detection",
    description: "Unsupervised learning system for detecting fraudulent transactions in real-time. Processes millions of transactions with sub-second latency.",
    tags: ["Isolation Forest", "AWS", "Kafka", "Python"],
    category: "MLOps",
    gradient: "from-gray-600 to-gray-400",
    icon: "🔍"
  }
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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
    <section ref={sectionRef} id="projects" className="relative py-24 px-6">
      <div className="w-full flex justify-center">
        <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest AI and machine learning implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative glass rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? (hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)') 
                  : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              {/* Gradient Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Image/Icon Area */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                    {project.icon}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 glass backdrop-blur-md rounded-full text-gray-300 text-sm font-medium border border-white/20 group-hover:border-gray-400/50 transition-all">
                    {project.category}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-gray-400 transition-all duration-300 font-[var(--font-space-grotesk)]">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 glass rounded-lg text-gray-300 text-sm border border-white/10 group-hover:border-gray-400/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="group/btn w-full px-6 py-3 rounded-lg border-2 border-gray-400/50 text-white font-medium hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <span>View Details</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
