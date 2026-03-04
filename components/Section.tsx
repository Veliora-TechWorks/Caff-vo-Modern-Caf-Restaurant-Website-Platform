import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'cream' | 'primary'
}

export default function Section({ children, className = '', background = 'cream' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    cream: 'bg-cream',
    primary: 'bg-primary text-white',
  }

  return (
    <section className={`section-padding ${backgrounds[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}
