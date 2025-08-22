import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-opacity-50'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-red-700 hover:shadow-lg focus:ring-primary',
    secondary: 'bg-accent text-white hover:bg-blue-600 hover:shadow-lg focus:ring-accent',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button