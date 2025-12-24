import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kojiro | Ronin Developer',
  description: 'Traditional Japanese aesthetic portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}