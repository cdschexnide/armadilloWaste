import { FC, ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

const Section: FC<SectionProps> = ({ children, className, id, fullWidth = false }) => {
  return (
    <section
      id={id}
      className={clsx(
        'py-16 md:py-24',
        !fullWidth && 'container-custom',
        className
      )}
    >
      {children}
    </section>
  )
}

export default Section