import React from 'react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.33V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.31 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.04H3.53V8.98h3.56v11.47z" /></svg>
);


const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.34c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.03c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7z" /></svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
);

export default function Intro() {
  return (
    <section id="intro" className="s-intro target-section">
      <div className="row s-intro__content width-sixteen-col">
        <div className="column lg-12 s-intro__content-inner grid-block grid-16">
          <div className="s-intro__content-text">
            <p className="s-intro__content-pretitle">MERN Stack Developer · AI Automation Engineer</p>
            <h1 className="s-intro__content-title">I build scalable web products and intelligent AI automations.</h1>
            <p className="s-intro__content-description">
              Hi, I’m Shubham Kanpure. I develop modern full-stack applications and AI-powered
              workflows that help businesses work smarter and scale faster.
            </p>
            <div className="s-intro__content-btns">
              <a className="smoothscroll btn" href="#works">View My Work</a>
              <a className="btn btn--stroke" href="/Shubham_Kanpure_CV.pdf" target="_blank" rel="noreferrer">Download Résumé</a>
            </div>
            <ul className="s-intro__proof" aria-label="Professional highlights">
              <li><strong>3+</strong><span>Years of experience</span></li>
              <li><strong>10+</strong><span>Projects completed</span></li>
              <li><strong>Open</strong><span>To opportunities</span></li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="s-intro__social social-list" aria-label="Professional profiles">
        <li><a href="https://www.linkedin.com/in/shubham-kanpure-702124233" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedInIcon /></a></li>
        <li><a href="https://github.com/SHUBHAM-KANPURE" target="_blank" rel="noreferrer" aria-label="GitHub profile"><GitHubIcon /></a></li>
        <li><a href="mailto:shubhkanpure27@gmail.com" aria-label="Email Shubham"><EmailIcon /></a></li>
      </ul>

      <div className="s-intro__content-media">
        <img src="/images/shubham-professional.png" alt="Shubham Kanpure, MERN Stack Developer and AI Automation Engineer" />
      </div>

      <div className="s-intro__scroll-down">
        <a href="#about" className="smoothscroll" aria-label="Scroll to About section">
          <div className="scroll-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
          </div>
          <span className="scroll-text u-screen-reader-text">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}




