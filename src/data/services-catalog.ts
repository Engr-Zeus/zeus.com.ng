// Proposed service taxonomy for the Services directory page.
// IMPORTANT: this is the proposed taxonomy. Confirm every offering with the company before publishing,
// and delete any line the company cannot deliver. The page renders whatever is listed here.
import { services, training } from './site';

const svc = (slug: string) => services.find((s) => s.slug === slug)!;

export type ArtName = 'managed' | 'web' | 'software' | 'infra' | 'hardware' | 'cctv' | 'training';

export interface Category {
  id: string; // anchor id suffix, e.g. "a" -> #cat-a
  code: string; // A-G
  title: string;
  chip: string; // short filter label
  need: string; // "I need..." phrase for the starting-points list
  description: string;
  offerings: string[];
  href: string;
  art: ArtName;
}

export const categories: Category[] = [
  {
    id: 'a',
    code: 'A',
    title: svc('it-managed-services').title,
    chip: 'IT support',
    need: 'My computers or systems keep having problems',
    description:
      'Day-to-day technical support and proactive management for the computers, servers, and systems your organization depends on.',
    offerings: [
      'IT support and troubleshooting',
      'Systems administration',
      'Preventive maintenance',
      'Server and endpoint management',
      'IT consultancy and technology planning',
    ],
    href: svc('it-managed-services').href,
    art: 'managed',
  },
  {
    id: 'b',
    code: 'B',
    title: svc('web-development').title,
    chip: 'Websites',
    need: 'I need a website or a web application',
    description: 'Websites and web applications designed, built, hosted, and maintained for businesses and institutions.',
    offerings: [
      'Business websites',
      'Corporate and institutional websites',
      'Responsive web applications',
      'Website redesign and maintenance',
      'Website hosting and deployment',
    ],
    href: svc('web-development').href,
    art: 'web',
  },
  {
    id: 'c',
    code: 'C',
    title: svc('software-development').title,
    chip: 'Software',
    need: 'I want software built around my process',
    description: 'Software designed around the way you work: built, integrated, tested, and maintained.',
    offerings: [
      'Custom business applications',
      'Workflow and process automation',
      'Database-driven applications',
      'System integration and API development',
      'Software testing and maintenance',
    ],
    href: svc('software-development').href,
    art: 'software',
  },
  {
    id: 'd',
    code: 'D',
    title: svc('it-infrastructure-cloud-networking').title,
    chip: 'Network and cloud',
    need: 'I am setting up a network, server, or cloud system',
    description: 'The servers, networks, and cloud services that keep your people and systems connected and backed up.',
    offerings: [
      'Server deployment and maintenance',
      'LAN and WAN implementation',
      'Network cabling and infrastructure',
      'Cloud configuration and management',
      'Backup and recovery solutions',
    ],
    href: svc('it-infrastructure-cloud-networking').href,
    art: 'infra',
  },
  {
    id: 'e',
    code: 'E',
    title: svc('hardware-sales-repairs-maintenance').title,
    chip: 'Hardware',
    need: 'I need equipment, or something repaired',
    description: 'Equipment supplied, installed, repaired, and maintained, with support for procurement.',
    offerings: [
      'Servers, desktops, and laptops',
      'Computer peripherals and accessories',
      'Hardware diagnostics and repair',
      'Equipment installation and configuration',
      'Preventive maintenance and procurement support',
    ],
    href: svc('hardware-sales-repairs-maintenance').href,
    art: 'hardware',
  },
  {
    id: 'f',
    code: 'F',
    title: svc('home-automation-cctv').title,
    chip: 'CCTV and automation',
    need: 'I want to secure or automate a home or small office',
    description: 'CCTV, surveillance, and connected-device systems installed and supported for homes and small offices.',
    offerings: [
      'CCTV installation and configuration',
      'Remote surveillance configuration',
      'Smart lighting and connected devices',
      'Home and small-office automation',
      'System maintenance and troubleshooting',
    ],
    href: svc('home-automation-cctv').href,
    art: 'cctv',
  },
  {
    id: 'g',
    code: 'G',
    title: training.title,
    chip: 'Training',
    need: 'My team or I need to build technology skills',
    description: 'Practical technology training that builds digital skills for individuals, teams, and organizations.',
    offerings: [
      'Computer and digital skills',
      'Practical IT training',
      'Corporate technology training',
      'Technical skills development',
    ],
    href: training.href,
    art: 'training',
  },
];

export const offeringCount = categories.reduce((n, c) => n + c.offerings.length, 0);
