import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gray-300/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="w-full flex justify-center">
          <div className="container mx-auto max-w-6xl text-center w-full">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI/ML Portfolio. Built with Next.js and Tailwind CSS.
          </p>
          </div>
        </div>
      </footer>
    </main>
  )
}