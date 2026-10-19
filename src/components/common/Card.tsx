import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  variant?: 'default' | 'lavender' | 'pink' | 'white' | 'dark'
  onClick?: () => void
}

// pembungkus kartu serbaguna dengan pilihan variasi style
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  variant = 'default',
  onClick,
}) => {
  const variantStyles = {
    default: 'bg-surface border border-charcoal/10 shadow-xs text-charcoal',
    lavender: 'bg-secondary/15 border border-secondary/40 text-charcoal',
    pink: 'bg-accent/25 border border-accent/60 text-charcoal',
    white: 'bg-surface border border-charcoal/10 shadow-sm text-charcoal',
    dark: 'bg-charcoal text-canvas border border-white/10',
  }

  const hoverStyles = hoverable
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40'
    : ''

  return (
    <div
      onClick={onClick}
      className={`rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-xs ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
