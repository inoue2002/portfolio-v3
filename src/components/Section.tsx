import { useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

const Section = ({ children, background }: SectionProps) => {
  const ref = useRef(null)
  // @ts-ignore
  const isInView = useInView(ref, { triggerOnce: true })

  return (
    <section
      ref={ref}
      style={{
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        padding: '50px',
        background: background,
      }}
    >
      <span
        style={{
          display: 'block',
          opacity: isInView ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
        }}
      >
        {children}
      </span>
    </section>
  )
}

interface SectionProps {
  children: ReactNode
  background: string
}

export default Section
