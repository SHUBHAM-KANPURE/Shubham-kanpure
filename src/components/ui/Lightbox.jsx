import { useEffect, useRef, useState } from 'react'
import './Lightbox.css'

// Full-screen image viewer: Esc / backdrop / × to close, click the image to zoom, focus is trapped and restored.
export default function Lightbox({ image, onClose }) {
  const [zoomed, setZoomed] = useState(false)
  const panel = useRef(null)
  const closeBtn = useRef(null)

  useEffect(() => {
    const opener = document.activeElement
    const html = document.documentElement
    html.style.overflow = 'hidden'
    closeBtn.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const items = [...panel.current.querySelectorAll('button, a[href]')]
      const first = items[0], last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); html.style.overflow = ''; opener?.focus?.() }
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <div ref={panel} className="lightbox-panel" role="dialog" aria-modal="true" aria-label={image.title} onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-bar">
          <h3>{image.title}</h3>
          <span className="lightbox-hint">{zoomed ? 'Click to fit' : 'Click image to zoom'}</span>
          <button ref={closeBtn} className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className={`lightbox-stage${zoomed ? ' is-zoomed' : ''}`}>
          <button className="lightbox-zoom" onClick={() => setZoomed(!zoomed)} aria-label={zoomed ? 'Fit image to screen' : 'Zoom to full size'}>
            <img src={image.src} alt={image.alt} decoding="async" />
          </button>
        </div>
      </div>
    </div>
  )
}
