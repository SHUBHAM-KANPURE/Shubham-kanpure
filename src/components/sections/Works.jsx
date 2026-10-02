import { projects, SHOT } from '../../data'
import { useLoopCarousel } from '../../hooks/useLoopCarousel.js'
import Reveal from '../ui/Reveal.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import './Works.css'

const COPIES = [0, 1, 2] // see useLoopCarousel: 3 copies, rest in the middle one
const N = projects.length
const pad = (n) => String(n).padStart(2, '0')

function ProjectCard({ project, index, clone }) {
  return (
    <a className="card-surface project" href={project.url} target="_blank" rel="noreferrer" draggable="false"
      aria-hidden={clone || undefined} tabIndex={clone ? -1 : undefined} aria-label={`${project.title}: open live site`}>
      <div className="shot">
        <img src={project.img} width={SHOT.width} height={SHOT.height} alt={clone ? '' : project.title} loading="lazy" decoding="async" draggable="false" />
      </div>
      <div className="meta">
        <div><small>{pad(index + 1)} · {project.cat}</small><h3>{project.title}</h3><p>{project.desc}</p></div>
        <span className="arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  )
}

export default function Works() {
  const { trackRef, active, playing, next, prev, goDot, rootProps, trackProps } = useLoopCarousel({ count: N, interval: 3000 })

  return (
    <section id="works" className="section">
      <Reveal>
        <div className="works-head">
          <SectionHeader id="works" />
          <div className="car-ctrl">
            <span className="car-count"><b>{pad(active + 1)}</b> / {pad(N)}</span>
            <button className="car-btn" onClick={prev} aria-label="Previous project">←</button>
            <button className="car-btn" onClick={next} aria-label="Next project">→</button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Projects" tabIndex={0} {...rootProps}>
          <div ref={trackRef} className="car-track" {...trackProps}>
            {COPIES.flatMap((c) => projects.map((p, i) => <ProjectCard key={`${c}-${p.title}`} project={p} index={i} clone={c !== 1} />))}
          </div>
        </div>
        <div className={`car-dots${playing ? ' is-playing' : ''}`} role="tablist" aria-label="Choose project">
          {projects.map((p, i) => (
            <button key={p.title} role="tab" aria-selected={i === active} aria-label={p.title} className={i === active ? 'is-on' : ''} onClick={() => goDot(i)} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
