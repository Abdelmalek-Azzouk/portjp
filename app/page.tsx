"use client";

import CardImage from "../components/CardImage";
import JapaneseNav from "../components/JapaneseNav";
import ExperienceScroll from "../components/ExperienceScroll";
import SkillsScroll from "../components/SkillsScroll";
import ProjectsScroll from "../components/ProjectsScroll";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#f0f0e9] selection:bg-red-900 selection:text-white">
      <JapaneseNav />
      
      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden paper-texture">
        {/* Background Kanji with multiple layers */}
        <div className="absolute top-10 right-10 text-[15vw] opacity-[0.025] pointer-events-none font-bold select-none z-0 writing-mode-vertical kanji-watermark">
          武士道
        </div>
        <div className="absolute top-20 right-20 text-[8vw] opacity-[0.02] pointer-events-none font-bold select-none z-0 writing-mode-vertical kanji-watermark">
          道
        </div>
        
        {/* Floating ink particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ink/10 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-seal/10 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-ink/15 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 pt-20">
          <div className="order-2 md:order-1 space-y-8 animate-fade-in-up">
            <div className="flex items-start gap-6">
              <div className="vertical-text text-4xl md:text-5xl font-bold border-l-4 border-red-800 pl-4 h-64 text-neutral-800 tracking-[0.2em] hidden sm:block">
                浪人開発者
              </div>
              <div className="pt-4 ink-reveal">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-neutral-900 drop-shadow-sm ink-shadow">
                  AZZOUK Abdelmalek
                </h1>
                <p className="text-2xl md:text-3xl text-neutral-700 italic font-light mb-8 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                  "Refining intelligence through code."
                </p>
                <div className="brush-divider w-40 mb-10"></div>
                <p className="max-w-md text-neutral-700 leading-relaxed mb-10 text-lg fade-in-up" style={{ animationDelay: '0.4s' }}>
                  I am a masters computer science student, sepcialized in
                  machine learning, deep learning, automation.
                </p>
                <a href="#projects" className="inline-block px-10 py-4 bg-neutral-900 text-[#f0f0e9] hover:bg-red-900 transition-all duration-400 shadow-japanese hover:shadow-japanese-hover wabi-sabi fade-in-up" style={{ animationDelay: '0.6s' }}>
                  View Works
                </a>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 md:order-2 relative h-[500px] md:h-[700px] w-full mix-blend-multiply opacity-90">
             <CardImage 
               src="/kojiro2.png" 
               alt="Samurai Hero" 
               fill 
               className="object-contain object-center"
               priority
             />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* --- ABOUT / SKILLS SECTION --- */}
      <section id="about" className="py-32 relative bg-[#e8e6df] paper-texture">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Image & Intro */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24">
                <div className="relative w-full aspect-square mb-8 mix-blend-multiply">
                  <CardImage 
                    src="/kojiro1.png" 
                    alt="Profile" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 border-b-4 border-neutral-800"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 ink-shadow">The Discipline</h2>
                <div className="brush-divider w-24 mb-6"></div>
                <p className="text-neutral-700 leading-relaxed text-lg mb-4">
                  Just as the warrior trains in the dojo, I train in the environment of data and algorithms. 
                </p>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  My focus lies in Machine Learning, robust Architecture, and clean aesthetic interfaces.
                </p>
              </div>
            </div>

            {/* Right Col: Skills Component */}
            <div id="skills" className="lg:col-span-7 pt-8 lg:pt-0">
               <div className="mb-12">
                 <h2 className="text-2xl font-bold flex items-center gap-4 mb-8">
                   <span className="hanko w-8 h-8 text-sm pt-1">技</span>
                   <span>Technical Arsenal</span>
                 </h2>
                 <SkillsScroll />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-32 bg-[#f0f0e9] paper-texture">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <span className="text-red-800 tracking-[0.4em] uppercase text-xs font-bold mb-6 block">Timeline</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-2 text-neutral-900 ink-shadow">The Path Traveled</h2>
            <div className="brush-divider w-32 mx-auto mt-6"></div>
          </div>
          <ExperienceScroll />
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 bg-[#e8e6df] min-h-screen paper-texture">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="flex justify-between items-end mb-20 border-b-3 border-neutral-300 pb-8">
             <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 ink-shadow">Great Works</h2>
             <span className="vertical-text text-3xl text-red-800 font-bold hidden md:block opacity-70">作品</span>
           </div>
           <ProjectsScroll />
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* --- FOOTER / CONTACT --- */}
      <Contact />
    </main>
  );
}