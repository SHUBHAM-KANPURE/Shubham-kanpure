import React from 'react';

const mernProjects = [
  {
    id: 'testuity',
    title: 'Testuity',
    cat: 'IQ-Management',
    thumb: '/images/folio/testuity.png',
    thumb2x: '/images/folio/testuity@2x.png',
    desc: 'IQ tests are standardized tests designed to measure intelligence, which is defined as the ability to understand complex ideas, adapt to new situations, and learn from experience. IQ tests typically measure a range of cognitive abilities, such as verbal and mathematical reasoning, spatial perception, and pattern recognition.',
    url: 'https://testuity.com',
  },
  {
    id: 'withzibi',
    title: 'Withzibi',
    cat: 'Zibi Virtual',
    thumb: '/images/folio/withzibi.png',
    thumb2x: '/images/folio/withzibi@2x.png',
    desc: 'A browser-based cognitive testing tool designed to assess users\' memory, attention, and mental agility. The system was built with guidance from neuroscience principles and delivers personalized results.',
    url: 'https://withzibi-frontend.ibrcloud.com',
  },
  {
    id: 'consumer-law',
    title: 'Consumer-Law',
    cat: 'Consumer Law Dispute.ai Platform',
    thumb: '/images/folio/consumer-law.png',
    thumb2x: '/images/folio/consumer-law@2x.png',
    desc: 'All-in-one Consumer Law 3.0 based & AI-powered Dispute Software that everyday consumers & credit repair professionals can use to repair, rebuild and restore their credit.',
    url: 'https://www.consumerlawdispute.ai',
  },
  {
    id: 'ortek',
    title: 'Ortek',
    cat: 'Inventory Management Dashboard',
    thumb: '/images/folio/ortek.png',
    thumb2x: '/images/folio/ortek@2x.png',
    desc: 'Built a modern web-based inventory management dashboard for Ortek to help businesses track, manage, and optimize their stock and operations in real time.',
    url: 'https://ortek-frontend.ibrcloud.com',
  },
];

const aiProjects = [
  {
    id: 'ai-merchant-funding',
    title: 'AI-Powered Merchant Funding & Lead Qualification Automation Platform',
    stack: 'n8n, Zoho CRM, VAPI, Twilio, VICIdial, OpenAI, JavaScript, REST APIs, Webhooks, AI Automation, Prompt Engineering, Zoho Calendar',
    desc: 'Built an end-to-end AI-powered merchant funding automation platform that manages lead ingestion, automated SMS conversations, AI-based lead qualification, appointment scheduling, and live Funding Advisor call transfers. Integrated n8n with Zoho CRM, Twilio, VAPI, and VICIdial to automate multi-step communication workflows, maintain conversation context, dynamically manage caller IDs, and route qualified merchants to live advisors.',
  },
  {
    id: 'ai-voice-recruitment',
    title: 'AI-Powered Voice Recruitment Automation System',
    stack: 'VAPI, GoHighLevel (GHL), OpenAI, Twilio, JavaScript, Prompt Engineering, Webhook Architecture, REST APIs, CRM Automation',
    desc: 'Built an end-to-end AI voice calling agent using VAPI integrated with GoHighLevel CRM via custom middleware. The system autonomously contacts leads, conducts structured qualification interviews through a scripted AI agent, evaluates candidate responses in real time, and triggers automated CRM actions including appointment booking or lead disqualification — streamlining recruitment pipelines for the insurance industry.',
  },
  {
    id: 'ai-invoice-accounting',
    title: 'AI-Powered Invoice & Accounting Automation System',
    stack: 'n8n, OpenAI, Google Sheets API, Gmail API, Google Drive API, Holded API, JavaScript, Prompt Engineering, PDF Data Extraction',
    desc: 'Designed and implemented an AI-driven automation system using OpenAI, n8n, Google Sheets, Gmail, Google Drive, and Holded APIs to automate invoice processing and accounting workflows — extracting and validating invoice data from emails and PDFs, matching suppliers/accounts, and creating purchase invoices automatically while handling multiple business edge cases.',
  },
  {
    id: 'ai-property-management',
    title: 'AI-Powered Property Management & Guest Communication System',
    stack: 'n8n, OpenAI, Claude AI, Twilio, Hospitable API, Turno API, Trello API, WhatsApp Business API, RingCentral, Prompt Engineering',
    desc: 'Built an end-to-end AI automation platform for Airbnb short-term rental operations covering AI guest communication, noise complaint protocol automation with multi-step WhatsApp security alerts, and operations reporting using Turno webhooks for real-time inventory/damage classification — auto-creating Trello cards and notifying managers via WhatsApp.',
  },
];

export default function Works() {
  return (
    <section id="works" className="s-works target-section">

      <div className="row">
        <div className="column xl-12">
          <div className="section-header" data-num="02">
            <h2 className="text-display-title">Selected Works.</h2>
          </div>
        </div>
      </div>

      {/* MERN Projects */}
      <div className="row folio-entries">
        {mernProjects.map((project, i) => (
          <div className="column entry" key={project.id}>
            <a
              href={project.thumb2x}
              className="entry__link glightbox"
              data-glightbox={`title: ${project.title}; description: .entry__desc-0${i + 1}`}
            >
              <div className="entry__thumb">
                <img
                  src={project.thumb}
                  srcSet={`${project.thumb} 1x, ${project.thumb2x} 2x`}
                  alt={project.title}
                />
              </div>
              <div className="entry__info">
                <h4 className="entry__title">{project.title}</h4>
                <div className="entry__cat">{project.cat}</div>
              </div>
            </a>
            <div className={`glightbox-desc entry__desc-0${i + 1}`}>
              <p>
                {project.desc}{' '}
                <a href={project.url} target="_blank" rel="noreferrer">{project.url}</a>.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* AI & Automation Projects */}
      <div className="row">
        <div className="column xl-12">
          <h3 className="s-testimonials__header" style={{ marginTop: '6rem', marginBottom: '3rem' }}>
            AI &amp; Automation Projects
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="column xl-12">
          {aiProjects.map((project) => (
            <div
              key={project.id}
              style={{
                marginBottom: '4rem',
                padding: '3.2rem',
                background: 'var(--color-gray-3)',
                borderRadius: 'var(--border-radius)',
                borderLeft: '4px solid var(--color-1)',
              }}
            >
              <h4 style={{ marginBottom: '0.8rem', fontSize: 'var(--text-md)', color: 'var(--color-2)' }}>
                {project.title}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)', marginBottom: '1.2rem', fontStyle: 'italic' }}>
                <strong>Tech Stack:</strong> {project.stack}
              </p>
              <p style={{ marginBottom: 0 }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Slider */}
      <div className="row s-testimonials">
        <div className="column xl-12">
          <h3 className="s-testimonials__header">My Education</h3>

          <div className="swiper-container s-testimonials__slider">
            <div className="swiper-wrapper text-center">

              <div className="s-testimonials__slide swiper-slide">
                <div className="s-education__author">
                  <img src="/images/vits.jpg" alt="VITS" className="s-education__avatar" />
                </div>
                <strong>VINDHYA INSTITUTE OF TECHNOLOGY AND SCIENCE, DAVV INDORE-MP</strong>
                <p>Master of Business Administration: Information Technology</p>
              </div>

              <div className="s-testimonials__slide swiper-slide">
                <div className="s-education__author">
                  <img src="/images/hdc.jpg" alt="HDC" className="educationls__avatar" />
                </div>
                <strong>HARDA DEGREE COLLEGE, BARKATULLAH UNIVERSITY BHOPAL-MP</strong>
                <p>Bachelor of Commerce: Computer and Accounting</p>
              </div>

              <div className="s-testimonials__slide swiper-slide">
                <div className="s-education__author">
                  <img src="/images/vits.jpg" alt="VITS" className="s-teducation_avatar" />
                </div>
                <strong>VINDHYA INSTITUTE OF TECHNOLOGY AND SCIENCE, DAVV INDORE-MP</strong>
                <p>Master of Business Administration: Information Technology</p>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>

    </section>
  );
}
