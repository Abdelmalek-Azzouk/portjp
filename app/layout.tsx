import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI/ML Portfolio | Transforming Ideas With Intelligence',
  description: 'Showcasing cutting-edge AI and Machine Learning projects. Building innovative solutions that solve real-world problems.',
  keywords: ['AI', 'Machine Learning', 'Deep Learning', 'Data Science', 'Portfolio'],
  authors: [{ name: 'AI/ML Engineer' }],
  openGraph: {
    title: 'AI/ML Portfolio',
    description: 'Showcasing cutting-edge AI and Machine Learning projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}