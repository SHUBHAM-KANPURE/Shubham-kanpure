import { useCallback, useState } from 'react'
import { aiProjects } from '../../data'
import Lightbox from '../ui/Lightbox.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import Tags from '../ui/Tags.jsx'
import './AI.css'

export default function AI() {
  const [diagram, setDiagram] = useState(null)
  const close = useCallback(() => setDiagram(null), [])

  return (
    <section id="ai" className="section">
      <Reveal><SectionHeader id="ai" /></Reveal>
      <div className="ai-grid">
        {aiProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="card-surface ai-card">
              <span className="num" aria-hidden="true">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Tags items={p.tags} />
              {p.diagram && (
                <button className="flow-btn" onClick={() => setDiagram(p.diagram)} aria-haspopup="dialog">
                  <img src={p.diagram.src} alt="" width="64" height="43" loading="lazy" decoding="async" />
                  <span><b>View workflow</b><small>{p.diagram.title}</small></span>
                  <i aria-hidden="true">↗</i>
                </button>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      {diagram && <Lightbox image={diagram} onClose={close} />}
    </section>
  )
}
