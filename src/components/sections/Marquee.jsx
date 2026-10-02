import { skillTicker } from '../../data'
import './Marquee.css'

// The list is rendered twice and the track moves -50%, so the loop restarts invisibly.
export default function Marquee() {
  return (
    <div className="marquee" aria-label="Skills">
      <div className="marquee-track" aria-hidden="true">
        {[...skillTicker, ...skillTicker].map((s, i) => <span key={i}>{s}<em>✦</em></span>)}
      </div>
    </div>
  )
}
