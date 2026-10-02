import { useEffect, useRef } from 'react'
import './Background.css'

// Ambient background + scroll progress. All updates are batched into one rAF and written
// straight to the elements (no React state, no document-wide style recalculation).
export default function Background() {
  const spot = useRef(null)
  const bar = useRef(null)

  useEffect(() => {
    let raf = 0
    let x = 0, y = 0, progress = 0
    const flush = () => {
      raf = 0
      spot.current?.style.setProperty('--mx', `${x}px`)
      spot.current?.style.setProperty('--my', `${y}px`)
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }
    const schedule = () => { raf ||= requestAnimationFrame(flush) }
    const onMove = (e) => { x = e.clientX; y = e.clientY; schedule() }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      progress = max > 0 ? Math.min(1, scrollY / max) : 0
      schedule()
    }
    // the cursor spotlight only makes sense with a real pointer
    if (matchMedia('(pointer: fine)').matches) window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={bar} className="progress" role="presentation" />
      <div className="bg" aria-hidden="true">
        <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
        <div className="grid" />
        <div ref={spot} className="spot" />
      </div>
    </>
  )
}
