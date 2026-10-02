import { skillGroups } from '../../data'
import Reveal from '../ui/Reveal.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import Tags from '../ui/Tags.jsx'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><SectionHeader id="skills" /></Reveal>
      <div className="skill-grid">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.07}>
            <div className="card-surface skill-card"><h3>{g.title}</h3><Tags items={g.items} /></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
