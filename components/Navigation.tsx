'use client'

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = ['About Me', 'Experience', 'Skills', 'Projects', 'Contact Me']

  return (
    <nav className="w-full flex justify-center gap-2 md:gap-4 p-4 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`pixel-button ${
            activeTab === tab ? 'pixel-button-active' : ''
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

