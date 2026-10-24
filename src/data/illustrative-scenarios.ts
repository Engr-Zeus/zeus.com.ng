// ILLUSTRATIVE SCENARIOS. These are hypothetical examples of how Zeus would approach a common requirement.
// They are NOT projects, clients, or results, and they are always labeled as such on the page.
// Keep them separate from src/data/projects.ts so the two can never be confused.
import type { CardData } from './project-model';

export const illustrativeScenarios: CardData[] = [
  {
    slug: 'example-office-network',
    title: 'An office whose network has outgrown its setup',
    industry: 'Example: small office',
    category: 'IT Infrastructure, Cloud and Networking',
    need: 'A small office has added staff and devices, and the Wi-Fi and wired connections have become slow and inconsistent.',
    solution:
      'Assess the premises and existing equipment, then recommend a network layout with suitable switching, structured cabling where needed, and Wi-Fi coverage planned for the space.',
    services: ['it-infrastructure-cloud-networking', 'it-managed-services'],
    approach: [
      'Review the premises, the equipment, and how people work.',
      'Propose a network design and scope for approval.',
      'Install and configure the equipment and cabling.',
      'Test coverage and connections before handover.',
    ],
  },
  {
    slug: 'example-request-tracking',
    title: 'Replacing paper-based request tracking',
    industry: 'Example: administrative team',
    category: 'Software Development',
    need: 'Requests arrive by phone, message, and paper form, and it is hard to see what has been approved or completed.',
    solution:
      'A custom web-based workflow where requests are submitted, reviewed, approved, and recorded in one place.',
    services: ['software-development', 'web-development'],
    approach: [
      'Document how requests are handled today.',
      'Design the workflow and the information to be recorded.',
      'Build and test with the people who will use it.',
      'Deploy, train users, and refine the system.',
    ],
  },
  {
    slug: 'example-business-website',
    title: 'A local business with no online presence',
    industry: 'Example: small business',
    category: 'Web Development',
    need: 'A local business has no website, so potential customers cannot easily find its services or contact details.',
    solution:
      'A clear, mobile-friendly business website with the pages and enquiry routes the business needs, set up with hosting and ongoing maintenance.',
    services: ['web-development'],
    approach: [
      'Discuss goals, audience, and content.',
      'Design the page structure and visual style for review.',
      'Build, test across devices, and launch.',
      'Maintain and update the site after launch.',
    ],
  },
];
