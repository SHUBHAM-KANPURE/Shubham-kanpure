import { useEffect, useRef, useState } from 'react'
import { onceVisible, prefersReducedMotion } from '../lib/observe.js'

const easeOutCubic = (p) => 1 - (1 - p) ** 3

// Counts from 0 to `target` the first time the element scrolls into view.
export function useCountUp(target, duration = 1600) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) { setValue(target); return }
    let raf = 0
    const stop = onceVisible(ref.current, () => {
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration)
        setValue(Math.round(target * easeOutCubic(p)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    return () => { stop(); cancelAnimationFrame(raf) }
  }, [target, duration])

  return [ref, value]
}
