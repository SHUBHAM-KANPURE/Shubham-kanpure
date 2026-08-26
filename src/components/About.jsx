import React from 'react';

export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row s-about__content">
        <div className="column xl-12">

          <div className="section-header" data-num="01">
            <h2 className="text-display-title">About Me.</h2>
          </div>

          <p className="attention-getter">
            Good with skills in requirements definition, release management
            and code debugging. Innovative and creative in developing
            fresh designs to meet current and forecasted needs. Works
            great with technical and non-technical teams to coordinate
            on-time, quality releases.
          </p>

          <div className="attention-getter attention-smaller">
            <b>Backend Development:</b>
            <p>"Node.js and Express.js skills allow us to create efficient and scalable server-side applications."</p>

            <b>Frontend Development:</b>
            <p>"I have excel in building interactive and responsive user interfaces using React.js, ensuring a smooth and engaging user experience."</p>

            <b>Database Management:</b>
            <p>"I'm proficient in designing and managing MongoDB databases, ensuring data integrity and efficient querying."</p>

            <b>Full-Stack Integration:</b>
            <p>"I'm adept at integrating the frontend and backend components, creating cohesive and functional web applications."</p>

            <b>AI & Automation:</b>
            <p>"I build intelligent automation systems integrating OpenAI, Claude AI, VAPI, and n8n into client workflows — including voice-based recruitment, invoice processing, and property management platforms."</p>

            <b>Technologies:</b>
            <p>"Have expertise includes React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript (HTML, CSS), OpenAI, Claude AI, VAPI, n8n, CRM, Twilio and related tools."</p>
          </div>

          <div className="grid-list-items s-about__blocks">

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Experience</h4>
              <ol className="s-about__list s-about__list__experience">
                <li>
                  <b>IBR INFOTECH - MERN Stack Developer &amp; AI Automation Engineer</b>
                  <span>01/2023 - Current</span>
                  <p>With over three years of technical experience, I am an analytical and skilled MERN stack developer and AI automation engineer proficient in React.js, Next.js, Node.js, MongoDB, Express.js, JavaScript, and AI/automation tools including OpenAI, Claude AI, VAPI, n8n, and CRM platforms.</p>
                </li>
                <li>
                  <b>INFINITEE CLICKS TECHNOLOGIES - PHP (CodeIgniter)</b>
                  <span>08/2022 - 01/2023</span>
                  <p>Explored and created new ways to resolve problems with processes, identified issues, analyzed information, and provided solutions to problems.</p>
                </li>
              </ol>
            </div>

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Skills</h4>
              <ul className="s-about__list">
                <li>React.js, Next.js, Node.js, Express.js</li>
                <li>MongoDB, MySQL, PHP</li>
                <li>JavaScript, jQuery</li>
                <li>UI, HTML &amp; CSS</li>
                <li>Bootstrap, Material UI, Tailwind</li>
                <li>OpenAI, Claude AI, VAPI</li>
                <li>n8n, Prompt Engineering, LLM Integration</li>
                <li>CRM, Twilio</li>
                <li>Webhook Architecture, REST APIs</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

