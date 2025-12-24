'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface CardImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function CardImage({ src, alt, fill = false, className = '', priority = false }: CardImageProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [isReturning, setIsReturning] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    setIsReturning(false)
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -10 // Max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10 // Max 10 degrees
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`)
  }

  const handleMouseLeave = () => {
    setIsReturning(true)
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)')
    
    // Remove returning class after animation completes
    setTimeout(() => {
      setIsReturning(false)
    }, 800)
  }

  return (
    <div
      ref={cardRef}
      className={`kojiro-card ${fill ? 'absolute inset-0' : ''} ${isReturning ? 'returning' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={className}
        priority={priority}
      />
    </div>
  )
}

