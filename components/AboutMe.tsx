'use client'

export default function AboutMe() {
  return (
    <div className="space-y-6 text-yellow-400">
      <h2 className="text-2xl mb-6 pixel-text uppercase">About Me</h2>
      
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Welcome to my retro portfolio! I'm a developer passionate about creating
          innovative solutions and pushing the boundaries of technology.
        </p>
        
        <p>
          With a focus on clean code and user experience, I bring ideas to life
          through modern web technologies and creative problem-solving.
        </p>
        
        <div className="mt-8 space-y-3">
          <h3 className="text-lg pixel-text uppercase mb-4">Interests</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">▶</span>
              <span>Web Development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">▶</span>
              <span>AI & Machine Learning</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">▶</span>
              <span>Creative Coding</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">▶</span>
              <span>Retro Gaming</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

