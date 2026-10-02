import { useEffect, useRef, useState } from 'react'
import { onceVisible } from '../../lib/observe.js'

// Fades + slides its children in the first time they scroll into view (pure CSS animation).
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => onceVisible(ref.current, () => setShown(true)), [])
  return (
    <div ref={ref} className={`reveal${shown ? ' is-visible' : ''} ${className}`.trim()} style={delay ? { '--d': `${delay}s` } : undefined}>
      {children}
    </div>
  )
}
