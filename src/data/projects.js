export const projects = [
  { title: 'Testuity', cat: 'IQ Management', img: '/images/folio/testuity.webp', url: 'https://testuity.com',
    desc: 'Standardized IQ testing platform measuring verbal, mathematical and spatial reasoning with pattern recognition.' },
  { title: 'Withzibi', cat: 'Zibi Virtual', img: '/images/folio/withzibi.webp', url: 'https://withzibi-frontend.ibrcloud.com',
    desc: 'Browser-based cognitive testing tool assessing memory, attention and mental agility with personalized results.' },
  { title: 'Consumer Law', cat: 'AI Dispute Platform', img: '/images/folio/consumer-law.webp', url: 'https://www.consumerlawdispute.ai',
    desc: 'AI-powered dispute software helping consumers and credit repair professionals rebuild and restore credit.' },
  { title: 'Ortek', cat: 'Inventory Dashboard', img: '/images/folio/ortek.webp', url: 'https://ortek-frontend.ibrcloud.com',
    desc: 'Modern inventory dashboard to track, manage and optimize stock and operations in real time.' },
]
// every project screenshot is exported at this size
export const SHOT = { width: 1200, height: 573 }

// Optional `diagram` on an AI project adds a "View workflow" button; drop the image in public/images/workflows/.
export const aiProjects = [
  { title: 'Merchant Funding & Lead Qualification', tags: ['n8n', 'Zoho CRM', 'VAPI', 'Twilio', 'VICIdial', 'OpenAI'],
    desc: 'End-to-end automation: lead ingestion, AI SMS conversations, qualification, scheduling and live advisor call transfers.',
    diagram: {
      src: '/images/workflows/AI%20SMS%20Qualification%20Flowchart.png',
      title: 'AI SMS Qualification & Scheduling Flow',
      alt: 'Workflow diagram: a new lead in Zoho CRM triggers an n8n webhook, an initial SMS is sent through Twilio, and the customer reply starts an AI qualification flow (business bank account and monthly deposits), then either schedules a call or places an immediate Vapi call to a Funding Advisor.',
    } },
  { title: 'Voice Recruitment Agent', tags: ['n8n', 'VAPI', 'GoHighLevel', 'OpenAI', 'Twilio'],
    desc: 'AI voice agent that interviews leads, scores answers in real time and triggers CRM booking or disqualification.',
    diagram: {
      src: '/images/workflows/Voice%20Recruitment%20Agent%20Workflow.png',
      title: 'Voice Recruitment Agent Workflow',
      alt: 'Workflow diagram for the AI voice recruitment agent that interviews leads, scores answers and triggers CRM booking or disqualification.',
    } },
  { title: 'Invoice & Accounting Automation', tags: ['n8n', 'OpenAI', 'Gmail API', 'Google Sheets', 'Holded'],
    desc: 'Extracts and validates invoice data from emails and PDFs, matches suppliers and creates purchase invoices automatically.',
    diagram: {
      src: '/images/workflows/AI%20Invoice%20Automation%20Workflow.png',
      title: 'AI Invoice & Accounting Automation Flow',
      alt: 'Invoice automation workflow: receive invoice emails, extract PDF data with OpenAI, validate records in Google Sheets, match suppliers and accounting accounts in Holded, create purchase invoices, attach original files and log completion.',
    } },
  { title: 'Property Management & Guest Comms', tags: ['n8n', 'Claude AI', 'WhatsApp', 'Hospitable', 'Trello', 'Air BNB API'],
    desc: 'Airbnb ops platform: AI guest messaging, noise-complaint protocols and damage reports routed to Trello and WhatsApp.',
    diagram: {
      src: '/images/workflows/Airbnb%E2%80%93Hospitable%20AI%20Automation%20Flow.png',
      title: 'Airbnb–Hospitable AI Automation Flow',
      alt: 'Airbnb and Hospitable workflow diagram showing AI guest replies, tax collection, noise protocols, maintenance tickets, listing scheduling and AI group management.',
    } },
]
