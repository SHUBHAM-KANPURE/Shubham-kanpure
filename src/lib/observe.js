// One shared IntersectionObserver for every "reveal once" element on the page.
const callbacks = new WeakMap()
let observer

const getObserver = () =>
  (observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        callbacks.get(entry.target)?.()
        callbacks.delete(entry.target)
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -80px 0px' },
  ))

export function onceVisible(el, callback) {
  if (!el) return () => {}
  callbacks.set(el, callback)
  getObserver().observe(el)
  return () => {
    callbacks.delete(el)
    observer?.unobserve(el)
  }
}

export const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
