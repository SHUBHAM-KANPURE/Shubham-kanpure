import { education, experience } from '../../data'
import Reveal from '../ui/Reveal.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import './Journey.css'

export default function Journey() {
  return (
    <section id="journey" className="section">
      <Reveal><SectionHeader id="journey" /></Reveal>
      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 0.1}>
            <div className="t-item">
              <span className="dot" aria-hidden="true" />
              <small>{e.when}</small><h3>{e.role}</h3><b>{e.org}</b><p>{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="edu">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="card-surface edu-card">
              <img src={e.img} width="64" height="64" alt="" loading="lazy" decoding="async" />
              <div><h4>{e.title}</h4><p>{e.org}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
