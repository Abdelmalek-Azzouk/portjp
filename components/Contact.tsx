'use client'

import Image from 'next/image'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <section
      id="contact"
      className="min-h-[90vh] flex items-center relative overflow-hidden bg-[#0a0a0a] text-[#fafaf6] border-y-4 border-[#a81616]/30 paper-texture-dark"
    >
      {/* Elegant Japanese background layering */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/bgg3.jpg"
          alt="Japanese landscape"
          fill
          className="object-cover object-center grayscale contrast-110 brightness-90"
          priority
        />
      </div>
      {/* Neutral gradient overlays - removed yellowish tones */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0f0f0f]/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/40"></div>

      {/* Subtle animated ink splatters */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-red-900/40 rounded-full blur-2xl animate-ink-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-red-700/25 rounded-full blur-lg animate-ink-pulse-slow"></div>
        <div className="absolute bottom-16 left-2/3 w-3 h-3 bg-red-900/20 rounded-full blur-md animate-ink-drift"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Contact Information */}
        <div className="space-y-10 pt-8 md:pt-0 ink-reveal">
          <div className="flex items-center gap-6">
            {/* Removed Japanese letters */}
            <h2 className="text-5xl md:text-7xl font-jp-black font-bold text-white ink-shadow drop-shadow-lg tracking-tight">
              Contact
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#a81616] via-[#e3cec7]/60 to-transparent rounded shadow-red-900 mb-2"></div>
          <p className="text-lg md:text-2xl text-neutral-200 max-w-lg leading-relaxed italic fade-in-up px-1 border-l-4 border-[#a81616]/60 pl-6">
            {/* Removed Japanese phrase */}
            <span className="block">"Avaliable for jobs, hobby projects, or just a chat."</span>
          </p>
          {/* Email */}
          <div className="pt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4 group">
              <span className="text-[#e95e5e] text-3xl transition-transform group-hover:scale-110">✉</span>
              <a
                href="mailto:hello@example.com"
                className="text-2xl md:text-3xl text-white underline decoration-[#a81616]/60 underline-offset-8 hover:text-[#a81616] transition-all"
              >
                hello@example.com
              </a>
            </div>
            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="jap-shadow rounded-lg bg-[#fafaf6]/5 border-2 border-[#a81616]/40 px-5 py-2 text-sm uppercase tracking-widest font-bold hover:bg-[#a81616] hover:text-white hover:border-[#c82525] transition-all duration-200"
              >
                <span className="mr-1 text-lg align-middle">🐙</span> GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="jap-shadow rounded-lg bg-[#fafaf6]/5 border-2 border-[#a81616]/40 px-5 py-2 text-sm uppercase tracking-widest font-bold hover:bg-[#a81616] hover:text-white hover:border-[#c82525] transition-all duration-200"
              >
                <span className="mr-1 text-lg align-middle">💼</span> LinkedIn
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="jap-shadow rounded-lg bg-[#fafaf6]/5 border-2 border-[#a81616]/40 px-5 py-2 text-sm uppercase tracking-widest font-bold hover:bg-[#a81616] hover:text-white hover:border-[#c82525] transition-all duration-200"
              >
                <span className="mr-1 text-lg align-middle">🐦</span> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#231f1f]/70 rounded-2xl p-10 lg:p-14 shadow-xl border-2 border-[#a81616]/30 backdrop-blur-md space-y-8 ink-shade relative"
          style={{
            boxShadow: '0 12px 40px 0 rgba(40,10,10,0.16), 0 0px 3px 1px #a8161622',
          }}
        >
          {/* Removed Japanese seal/letter */}
          <div className="group mb-4">
            <label className="block text-sm font-bold tracking-wide text-[#bda1a1] mb-2 group-focus-within:text-[#a81616] duration-200 transition-all font-jp">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-transparent border-b-2 border-[#bba6a6]/40 py-3 px-1 focus:border-[#a81616] outline-none transition-all font-jp-shadow focus:bg-[#fafaf610] text-lg text-neutral-100"
              required
              placeholder="Your name"
            />
          </div>
          <div className="group mb-4">
            <label className="block text-sm font-bold tracking-wide text-[#bda1a1] mb-2 group-focus-within:text-[#a81616] duration-200 transition-all font-jp">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              className="w-full bg-transparent border-b-2 border-[#bba6a6]/40 py-3 px-1 focus:border-[#a81616] outline-none transition-all font-jp-shadow focus:bg-[#fafaf610] text-lg text-neutral-100 resize-y"
              required
              placeholder="Compose your thoughts..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#a81616] hover:bg-[#e44c4c] active:bg-[#891616] transition-all text-lg text-white font-bold tracking-widest rounded-lg drop-shadow-2xl stroke-font relative jap-shadow group ring-2 ring-[#a81616]/20"
          >
            {/* Removed Japanese character in button, kept visual structure */}
            <span className="hanko border-[#fff]/60 bg-[#e6dddd]/10 text-[#fff] w-6 h-6 text-xl font-semibold flex items-center justify-center rounded-full shadow-sm border mr-2 scale-110 group-hover:scale-125 transition-transform"></span>
            <span className="font-jp tracking-wide">Send Transmission</span>
          </button>
        </form>
      </div>

      {/* corner stamp for Japanese authenticity */}
      <div
        className="absolute bottom-6 right-8 z-20 opacity-60 pointer-events-none select-none"
      >
        {/* Removed Japanese letters for authenticity stamp */}
      </div>
    </section>
  )
}

