import { links, profile, stats } from '../../data'
import { useCountUp } from '../../hooks/useCountUp.js'
import Button from '../ui/Button.jsx'
import './Hero.css'

// headline words get a staggered reveal; precompute each word's position once
let position = 0
const headline = profile.headline.map((line) => line.map((word) => ({ word, i: position++ })))
const plainHeadline = profile.headline.flat().join(' ')

function Stat({ n, suffix, label }) {
  const [ref, value] = useCountUp(n)
  return <li><b ref={ref}>{value}{suffix}</b><span>{label}</span></li>
}

const delay = (s) => ({ '--d': `${s}s` })

export default function Hero() {
  const { photo, current } = profile
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <div className="chip fade-up" style={{ ...delay(0), '--y': '10px' }}>
          <span className="pulse" /> Open to opportunities
        </div>
        <p className="hero-name fade-up" style={delay(0.1)}>Hi, I'm <b>{profile.name}</b></p>
        <h1 aria-label={plainHeadline}>
          {headline.map((line, li) => (
            <span className="h1-line" key={li}>
              {line.map(({ word, i }) => (
                <span className="mask" key={word} aria-hidden="true">
                  <span className={`word${word === profile.highlight ? ' grad' : ''}`} style={{ '--i': i }}>{word}&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="role fade-up" style={delay(0.55)}>{profile.tagline}</p>
        <ul className="tech-tags fade-up" aria-label="Focus areas" style={delay(0.65)}>
          {profile.focus.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="cta fade-up" style={delay(0.75)}>
          <Button href="#works" arrow="→">View my work</Button>
          <Button href={links.cv} variant="ghost">Download résumé</Button>
        </div>
        <ul className="stats fade-up" style={delay(0.9)}>
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </ul>
      </div>

      <div className="hero-media fade-up" style={{ '--d': '0.05s', '--y': '24px' }}>
        <div className="ring" />
        <img src={photo.src} width={photo.width} height={photo.height} alt={profile.name} fetchpriority="high" decoding="async" />
        <div className="badge"><small>Currently</small><b>{current.title}</b></div>
      </div>
    </section>
  )
}
