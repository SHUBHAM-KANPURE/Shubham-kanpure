# Shubham Kanpure — Portfolio

React 18 + Vite. No UI/animation libraries: animations are CSS, scroll reveals share one
`IntersectionObserver`, fonts are self-hosted. Light/dark theme, endless auto-playing projects carousel,
mobile menu.

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the build locally
```

## Where things live
```
src/
  data/          all content — edit these, not components
    profile.js     name, headline, tagline, links, stats
    projects.js    product projects + AI/automation projects
    skills.js      skill groups + the scrolling ticker
    career.js      experience + education
    sections.js    section order, nav labels, titles (numbering is generated from this)
  components/
    ui/            Button, Reveal, SectionHeader, Tags (reusable pieces)
    layout/        Header, ThemeToggle, Background
    sections/      Hero, Marquee, Works, AI, Skills, Journey, Contact (each with its own .css)
  hooks/         useTheme, useCountUp, useLoopCarousel
  lib/observe.js shared IntersectionObserver + reduced-motion helper
  styles/
    tokens.css     colours/shadows for light + dark  <- change the theme here
    base.css       reset, typography, layout helpers
    ui.css         buttons, tags, reveal animation
public/          images (WebP), résumé PDF, sitemap.xml, robots.txt
vercel.json      long-term caching for /assets and /images + security headers
```

## Common tasks
- **Add a project:** add an object to `src/data/projects.js` and a 1200px-wide `.webp` to `public/images/folio/`.
- **Add a section:** create it in `components/sections/`, add an entry to `data/sections.js` (nav + numbering follow automatically), render it in `App.jsx`.
- **Change colours:** edit the variables in `styles/tokens.css` (`:root` = light, `[data-theme='dark']` = dark).
- **Images:** export as WebP at the displayed size (~2x). Give every `<img>` `width`/`height` to avoid layout shift.

## Deploy (Vercel)
Import the repo — Vercel auto-detects Vite (build `npm run build`, output `dist`).
