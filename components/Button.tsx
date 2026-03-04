import { ButtonHTMLAttributes, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'
  icon?: LucideIcon
  children: ReactNode
}

export default function Button({ 
  variant = 'primary', 
  icon: Icon, 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary',
    secondary: 'bg-white text-primary hover:bg-gray-100',
    accent: 'bg-accent text-dark hover:bg-opacity-90',
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  )
}
