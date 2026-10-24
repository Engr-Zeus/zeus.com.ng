// Shared model + helpers for the Projects page and case study pages.
import { services, training } from './site';

export interface CardData {
  slug: string;
  title: string;
  industry: string; // industry or client type, e.g. "Education" (NOT a client name unless permitted)
  category: string; // must equal a service title from site.ts, or the training title
  need: string; // problem or business need
  solution: string; // proposed solution
  services: string[]; // service slugs from site.ts, or 'training'
  approach: string[]; // implementation approach, in order
  outcomes?: string[]; // ONLY documented, verified results. Leave undefined if none.
  image?: string; // approved image or screenshot, e.g. /images/projects/name.webp
  imageAlt?: string;
}

// A verified, approved company project. Keeps the legacy fields the Home page "Featured work" section reads.
export interface Project extends CardData {
  client?: string; // only with the client's permission
  summary: string; // one or two factual sentences
  href: string; // `/projects/${slug}/` when detail is true, otherwise `/projects/#${slug}`
  detail?: boolean; // true = generate an optional case study page at /projects/<slug>/
}

export const categoryOrder: string[] = [...services.map((s) => s.title), training.title];

export function serviceLink(key: string): { title: string; href: string } | undefined {
  if (key === 'training') return { title: training.title, href: training.href };
  const s = services.find((x) => x.slug === key);
  return s ? { title: s.title, href: s.href } : undefined;
}
