import React from 'react';

const LinkedInIcon = () => (
  <svg fill="#000000" width="800px" height="800px" viewBox="-2 -2 24 24"
    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-linkedin">
    <path d='M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z' />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.34c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.03c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="footer" className="s-footer target-section">

      <div className="row">
        <div className="column lg-12">
          <div className="section-header light-on-dark" data-num="03">
            <h2 className="text-display-title">Get In Touch.</h2>
          </div>
        </div>
      </div>

      <div className="row s-footer__content">
        <div className="column xl-8 md-12 s-footer__block">
          <p className="attention-getter">
            I'm actively looking for opportunities to grow as a developer and contribute to impactful
            projects. If you're hiring or looking for a passionate developer who values clean code,
            problem-solving, and continuous learning — let's connect.
            Feel free to reach out via email or the contact form. I'll respond promptly.
          </p>
        </div>

        <div className="column xl-4 md-12 s-footer__block s-footer__site-links">
          <h5>Contact Me</h5>
          <ul className="link-list">
            <li><a href="mailto:shubhkanpure27@gmail.com">shubhkanpure27@gmail.com</a></li>
            <li><a href="tel:8871148578">+91 88711 48578</a></li>
          </ul>
        </div>
      </div>

      <div className="row s-footer__buttons">
        <div className="column xl-6 tab-12">
          <a href="mailto:shubhkanpure27@gmail.com" className="btn btn--primary btn--large u-fullwidth">
            Message Me
          </a>
        </div>
        <div className="column xl-6 tab-12">
          <a href="/Shubham_Kanpure_CV.pdf" target="_blank" rel="noreferrer" className="btn btn--stroke btn--large u-fullwidth">Get My CV</a>
        </div>
      </div>

      <div className="row s-footer__bottom">
        <div className="column xl-12 lg-12">
          <ul className="s-footer__social social-list" aria-label="Professional profiles">
            <li>
              <a href="https://www.linkedin.com/in/shubham-kanpure-702124233" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/SHUBHAM-KANPURE" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="mailto:shubhkanpure27@gmail.com" aria-label="Email Shubham">
                <EmailIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            style={{ fill: 'rgba(0, 0, 0, 1)' }}>
            <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
          </svg>
        </a>
        <span>Back To Top</span>
      </div>

    </footer>
  );
}
