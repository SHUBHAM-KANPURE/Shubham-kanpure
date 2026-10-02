import Background from './components/layout/Background.jsx'
import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import Marquee from './components/sections/Marquee.jsx'
import Works from './components/sections/Works.jsx'
import AI from './components/sections/AI.jsx'
import Skills from './components/sections/Skills.jsx'
import Journey from './components/sections/Journey.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Works />
        <AI />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </>
  )
}
