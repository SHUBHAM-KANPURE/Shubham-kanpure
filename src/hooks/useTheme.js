import { useCallback, useEffect, useState } from 'react'

// The initial theme is applied before first paint by the inline script in index.html.
const read = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

export function useTheme() {
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggle = useCallback(() => {
    const root = document.documentElement
    const next = theme === 'dark' ? 'light' : 'dark'
    root.classList.add('theme-anim')
    setTimeout(() => root.classList.remove('theme-anim'), 450)
    try { localStorage.setItem('theme', next) } catch { /* private mode: just don't persist */ }
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}
