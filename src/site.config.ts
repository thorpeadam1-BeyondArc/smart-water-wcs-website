/**
 * Site Configuration
 * ------------------
 * This single file drives the entire website.
 * Fork the repo, edit this file, replace public/logo.png, and deploy.
 */

export const siteConfig = {
  // ── Business ──────────────────────────────────────────────
  name: 'Client Name',
  tagline: 'What they do in one line',
  email: 'hello@client.com',
  phone: '', // optional — leave empty to hide
  location: 'City, Country',

  // ── URLs ──────────────────────────────────────────────────
  url: 'https://client.com',
  linkedin: '',
  instagram: '',
  twitter: '',
  newsletter: '', // Beehiiv / Substack URL — leave empty to hide newsletter CTA

  // ── Design tokens ─────────────────────────────────────────
  colors: {
    bgPrimary: '#0a1020',
    bgSecondary: '#12203d',
    accent: '#00d9ff',
    accentSecondary: '#d4a574',
    textPrimary: '#ffffff',
    textSecondary: '#8ea4bc',
  },

  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'DM Sans', sans-serif",
  },

  // ── Pages — toggle on/off ────────────────────────────────
  pages: {
    home: true,
    about: true,
    services: true,
    contact: true,
    privacy: true,
    blog: false, // when true, links to external newsletter URL above
  },

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: 'Your headline here',
    subline: 'Your subline here — describe what makes the business unique.',
    cta: { text: 'Contact Us', href: '/contact' },
    secondaryCta: { text: 'Our Services', href: '/services' },
  },

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      title: 'Service One',
      description: 'A concise description of the first core service offering.',
      icon: '⚡',
    },
    {
      title: 'Service Two',
      description: 'A concise description of the second core service offering.',
      icon: '🔧',
    },
    {
      title: 'Service Three',
      description: 'A concise description of the third core service offering.',
      icon: '🧭',
    },
  ],

  // ── How We Work (services page process steps) ─────────────
  process: [
    { step: '01', title: 'Discovery', description: 'We learn about your goals, challenges, and vision.' },
    { step: '02', title: 'Strategy', description: 'We design a tailored approach based on what we learn.' },
    { step: '03', title: 'Execution', description: 'We deliver the work with transparency at every stage.' },
    { step: '04', title: 'Review', description: 'We measure results, iterate, and refine.' },
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    founderName: 'Founder Name',
    founderRole: 'Founder & CEO',
    bio: 'Write a compelling founder bio here. Share the journey, the motivation, and what drives the work.',
    philosophy: 'Describe the company philosophy here. What principles guide every engagement?',
    values: [
      { title: 'Integrity', description: 'We do what we say we will do.' },
      { title: 'Craft', description: 'Every detail matters.' },
      { title: 'Impact', description: 'Results over rhetoric.' },
    ],
  },

  // ── Credibility / social proof ────────────────────────────
  credibility: {
    heading: 'Trusted by forward-thinking companies',
    stats: [
      { value: '50+', label: 'Projects delivered' },
      { value: '12', label: 'Years experience' },
      { value: '100%', label: 'Client satisfaction' },
    ],
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    heading: 'Get in Touch',
    subline: 'Ready to start a conversation? Reach out and we will get back to you within 24 hours.',
    formFields: ['name', 'email', 'message'] as const,
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    copyright: `All rights reserved.`,
    builtBy: { name: 'Beyond Arc', url: 'https://beyondarc.com' },
  },

  // ── SEO defaults ──────────────────────────────────────────
  seo: {
    defaultTitle: 'Client Name — Tagline',
    defaultDescription: 'A short meta description for search engines (150-160 chars).',
    ogImage: '/og-image.png', // place in public/
  },
} as const;

// ── Type export ─────────────────────────────────────────────
export type SiteConfig = typeof siteConfig;
