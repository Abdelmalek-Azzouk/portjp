'use client'

import { useState, useRef, useEffect } from 'react'

const socialLinks = [
  {
    icon: "📧",
    title: "Email",
    value: "hello@example.com",
    desc: "Send me a message anytime",
    href: "mailto:hello@example.com",
    gradient: "from-gray-500 to-gray-300"
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "linkedin.com/in/username",
    desc: "Let's connect professionally",
    href: "https://linkedin.com/in/username",
    gradient: "from-gray-600 to-gray-400"
  },
  {
    icon: "🐙",
    title: "GitHub",
    value: "github.com/username",
    desc: "Check out my open source work",
    href: "https://github.com/username",
    gradient: "from-gray-700 to-gray-500"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 px-6">
      <div className="w-full flex justify-center">
        <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Interested in collaborating? Let's discuss how we can work together on your next AI project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.6s ease'
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-[var(--font-space-grotesk)]">
              Contact Information
            </h3>
            <div className="space-y-4">
              {socialLinks.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-6 glass rounded-xl border border-white/10 hover:border-gray-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/10"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateX(0)' 
                      : 'translateX(-30px)',
                    transition: `all 0.6s ease ${index * 0.1}s`
                  }}
                >
                  <div className={`text-4xl p-3 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-gray-400 transition-all">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 group-hover:translate-x-1 transition-all">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="glass rounded-2xl border border-white/10 p-8 lg:p-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.6s ease 0.2s'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400/50 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 bg-black/20"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400/50 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 bg-black/20"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400/50 focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 resize-none bg-black/20"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-8 py-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 border border-gray-500/30"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
