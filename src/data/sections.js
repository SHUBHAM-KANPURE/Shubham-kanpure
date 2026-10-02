// Single source of truth for page sections: drives the nav, the numbered eyebrows and the headings.
export const sections = [
  { id: 'works', nav: 'Work', eyebrow: 'Selected work', title: "Products I've shipped." },
  { id: 'ai', nav: 'AI', eyebrow: 'AI & automation', title: 'Workflows that run themselves.' },
  { id: 'skills', nav: 'Skills', eyebrow: 'Skills', title: 'Tools I work with.' },
  { id: 'journey', nav: 'Journey', eyebrow: 'Journey', title: 'Experience & education.' },
  { id: 'contact', nav: 'Contact', eyebrow: 'Contact', title: "Let's build something smart." },
]

export const sectionNumber = (id) => String(sections.findIndex((s) => s.id === id) + 1).padStart(2, '0')
export const getSection = (id) => sections.find((s) => s.id === id)
