export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="container py-4 flex justify-between items-center">
        <a href="#" className="mono text-xs tracking-[0.25em] text-gray-400 hover:text-gray-200 transition-colors">
          PORTFOLIO
        </a>

        <div className="flex items-center gap-8">
          <a href="#work" className="text-sm text-gray-300 hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
          <a
            href="#resume"
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-black bg-white hover:bg-white/90 active:bg-white ring-1 ring-white/20 shadow-sm transition-colors"
            aria-label="View resume"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}