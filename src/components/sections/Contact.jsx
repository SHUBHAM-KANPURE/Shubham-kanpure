import { links, profile } from '../../data'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <SectionHeader id="contact" className="contact-head">Let's build something <span className="grad">smart</span>.</SectionHeader>
        <p className="lead">Hiring or have an idea? I reply promptly.</p>
        <div className="cta">
          <Button href={`mailto:${links.email}`} arrow="↗">{links.email}</Button>
          <Button href={links.cv} variant="ghost">Get my CV</Button>
        </div>
        <div className="socials">
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`tel:${links.phone.replace(/\s/g, '')}`}>{links.phone}</a>
        </div>
      </Reveal>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </section>
  )
}
