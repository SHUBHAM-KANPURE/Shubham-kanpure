import { useEffect, useState } from 'react'
import { sections, profile } from '../../data'
import ThemeToggle from './ThemeToggle.jsx'
import './Header.css'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header${solid || open ? ' is-solid' : ''}`}>
      <a href="#top" className="brand" onClick={close}>
        <img src="/images/logo.png" alt="" width="28" height="28" />{profile.name}<span>.</span>
      </a>
      <div className="header-right">
        <nav id="site-nav" className={open ? 'is-open' : ''} aria-label="Primary">
          {sections.map(({ id, nav }) => <a key={id} href={`#${id}`} onClick={close}>{nav}</a>)}
        </nav>
        <ThemeToggle />
        <button className={`burger${open ? ' is-open' : ''}`} aria-label="Toggle menu" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          <i /><i />
        </button>
      </div>
    </header>
  )
}
