import { FC, ReactNode } from 'react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  animate?: boolean
}

const Card: FC<CardProps> = ({ children, className, hover = true, animate = false }) => {
  const cardContent = (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-lg p-6',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {cardContent}
      </motion.div>
    )
  }

  return cardContent
}

export default Card