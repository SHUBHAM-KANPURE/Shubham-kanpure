import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/observe.js'

/**
 * Endless, swipeable carousel with autoplay.
 * The slides are rendered 3 times; we always rest in the middle copy and silently re-centre
 * after each move, so "next" from the last slide slides forward to the first one (no rewind).
 */
export function useLoopCarousel({ count, interval = 3000 }) {
  const trackRef = useRef(null)
  const drag = useRef({ down: false, x: 0, left: 0, moved: false })
  const activeRef = useRef(0)
  const settleTimer = useRef(0)
  const touchTimer = useRef(0)
  const reduced = useRef(prefersReducedMotion())

  const [active, setActive] = useState(0)
  const [hold, setHold] = useState(false)
  const [inView, setInView] = useState(false)
  const [hidden, setHidden] = useState(false)
  const playing = !hold && inView && !hidden && !reduced.current

  const step = () => {
    const track = trackRef.current
    const slide = track?.children[0]
    return slide ? slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0) : 1
  }
  const index = () => Math.round(trackRef.current.scrollLeft / step())

  // jump without animation or snapping
  const jump = (left) => {
    const track = trackRef.current
    track.style.scrollBehavior = 'auto'
    track.style.scrollSnapType = 'none'
    track.scrollLeft = left
    void track.offsetWidth
    track.style.scrollBehavior = ''
    track.style.scrollSnapType = ''
  }

  // once scrolling has settled, swap to the identical slide in the middle copy (invisible)
  const settle = useCallback(() => {
    const track = trackRef.current
    if (!track || drag.current.down) return
    const i = index()
    if (i >= 2 * count) jump(track.scrollLeft - count * step())
    else if (i < count) jump(track.scrollLeft + count * step())
  }, [count])

  const onScroll = () => {
    const i = ((index() % count) + count) % count
    activeRef.current = i
    setActive(i)
    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(settle, 140)
  }

  useLayoutEffect(() => {
    const place = () => jump((count + activeRef.current) * step())
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [count])

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 })
    io.observe(trackRef.current)
    const onVisibility = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      clearTimeout(settleTimer.current)
      clearTimeout(touchTimer.current)
    }
  }, [])

  const goTo = (k) => trackRef.current.scrollTo({ left: k * step(), behavior: 'smooth' })
  const next = () => goTo(index() + 1)
  const prev = () => goTo(index() - 1)
  const goDot = (i) => goTo(Math.floor(index() / count) * count + i)

  useEffect(() => {
    if (!playing) return
    const id = setTimeout(next, interval)
    return () => clearTimeout(id)
  }, [playing, active, interval])

  const rootProps = {
    onKeyDown: (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    },
    onPointerEnter: (e) => e.pointerType === 'mouse' && setHold(true),
    onPointerLeave: (e) => e.pointerType === 'mouse' && setHold(false),
    onFocus: () => setHold(true),
    onBlur: () => setHold(false),
  }

  const endDrag = () => {
    const d = drag.current
    if (!d.down) return
    d.down = false
    trackRef.current.classList.remove('is-dragging')
    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(settle, 500)
    if (d.moved) setTimeout(() => { d.moved = false }, 0)
  }

  const trackProps = {
    onScroll,
    onPointerDown: (e) => {
      if (e.pointerType !== 'mouse') { // touch: native scrolling, just pause autoplay for a while
        setHold(true)
        clearTimeout(touchTimer.current)
        touchTimer.current = setTimeout(() => setHold(false), 6000)
        return
      }
      drag.current = { down: true, x: e.clientX, left: trackRef.current.scrollLeft, moved: false }
    },
    onPointerMove: (e) => {
      const d = drag.current
      if (!d.down) return
      const dx = e.clientX - d.x
      if (Math.abs(dx) > 5) { d.moved = true; trackRef.current.classList.add('is-dragging') }
      if (d.moved) trackRef.current.scrollLeft = d.left - dx
    },
    onPointerUp: endDrag,
    onPointerLeave: endDrag,
    onClickCapture: (e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation() } },
  }

  return { trackRef, active, playing, next, prev, goDot, rootProps, trackProps }
}
