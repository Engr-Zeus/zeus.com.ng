// Single source of truth for company details, navigation and services.
// Facts here come from the project brief / company registration only. Do not add unverified claims.

export const company = {
  brandName: 'Zeus System Technologies',
  legalName: 'Zeus System Technology Nig. Ltd.',
  url: 'https://zeus.com.ng',
  email: 'info@zeus.com.ng',
  phone: '+234 703 855 6687',
  phoneHref: 'tel:+2347038556687',
  founded: 2010,
  address: {
    street: 'Plot 373 Ameh Ebute Street',
    area: 'Wuye',
    city: 'Abuja',
    country: 'Nigeria',
  },
} as const;

export interface Service {
  slug: string;
  title: string;
  short: string; // dropdown / footer label
  description: string;
  icon: string;
  href: string;
}

export const services: Service[] = [
  {
    slug: 'it-managed-services',
    title: 'IT Managed Services',
    short: 'IT Managed Services',
    description:
      'Ongoing technical support and management of your IT environment, so issues are handled and systems stay in working order.',
    icon: 'shield',
    href: '/services/it-managed-services/',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Web Development',
    description:
      'Website design and development, hosting, and web-based applications for businesses and organizations.',
    icon: 'browser',
    href: '/services/web-development/',
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    short: 'Software Development',
    description:
      'Custom software designed, built, tested, implemented, and maintained around the way you work.',
    icon: 'code',
    href: '/services/software-development/',
  },
  {
    slug: 'it-infrastructure-cloud-networking',
    title: 'IT Infrastructure, Cloud and Networking',
    short: 'Infrastructure, Cloud and Networking',
    description:
      'Servers, networks, and cloud services planned, set up, and managed to keep your operations connected.',
    icon: 'server',
    href: '/services/it-infrastructure-cloud-networking/',
  },
  {
    slug: 'hardware-sales-repairs-maintenance',
    title: 'Hardware Sales, Repairs and Maintenance',
    short: 'Hardware Sales and Repairs',
    description:
      'Servers, desktops, laptops, and peripherals supplied, installed, repaired, and maintained.',
    icon: 'laptop',
    href: '/services/hardware-sales-repairs-maintenance/',
  },
  {
    slug: 'home-automation-cctv',
    title: 'Home Automation and CCTV',
    short: 'Home Automation and CCTV',
    description:
      'Home automation, CCTV, and surveillance systems installed for homes and business premises.',
    icon: 'camera',
    href: '/services/home-automation-cctv/',
  },
];

export const training = {
  title: 'Technology Training',
  description:
    'Technology training for individuals, teams, and organizations, so the people using your systems can use them well.',
  href: '/training/',
};

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Training', href: '/training/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
];

export const quoteHref = '/request-quote/';
export const contactHref = '/contact/';

// Pages that exist as links but are not built yet.
export const pendingPages: { slug: string; title: string; description: string }[] = [];
