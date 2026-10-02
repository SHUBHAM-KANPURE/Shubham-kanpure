import { getSection, sectionNumber } from '../../data'

// Numbered eyebrow + title, both derived from data/sections.js so numbering can never drift.
export default function SectionHeader({ id, children, className }) {
  const { eyebrow, title } = getSection(id)
  return (
    <div className={className}>
      <p className="eyebrow">{sectionNumber(id)} — {eyebrow}</p>
      <h2>{children ?? title}</h2>
    </div>
  )
}
