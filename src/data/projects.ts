// VERIFIED PROJECTS ONLY.
// Add a project here only when the company has confirmed the details and approved them for publication.
// While this array is empty, the Projects page shows an honest empty state, and Home shows its labeled demonstration area.
// Never add: invented client names or logos, testimonials, metrics, screenshots, or outcomes.
//
// Example entry (copy, fill in with real information, put the image in /public/images/projects/):
// {
//   slug: 'project-name',
//   title: 'Project name',
//   client: 'Client name (only with the client\'s permission; otherwise omit)',
//   industry: 'Education',
//   category: 'Web Development',            // must match a service title (see src/data/site.ts) or 'Technology Training'
//   summary: 'One or two factual sentences about what was delivered.',
//   need: 'The problem or business need, in the client\'s own terms.',
//   solution: 'What was proposed and built.',
//   services: ['web-development', 'it-managed-services'],   // service slugs, or 'training'
//   approach: ['Step one', 'Step two', 'Step three'],
//   outcomes: ['Only results that are documented and verified.'],   // omit if none
//   image: '/images/projects/project-name.webp',            // approved image or screenshot
//   imageAlt: 'Describe what the image shows',
//   detail: true,                                           // optional case study page
//   href: '/projects/project-name/',                        // or '/projects/#project-name' if detail is false
// }
import type { Project } from './project-model';

export type { Project };

export const projects: Project[] = [];
