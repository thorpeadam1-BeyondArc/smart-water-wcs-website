/**
 * Site Configuration — Smart Water Window Cleaning Services
 * ----------------------------------------------------------
 * Single file driving the entire website.
 */

export const siteConfig = {
  // ── Business ──────────────────────────────────────────────
  name: 'Smart Water',
  fullName: 'Smart Water Window Cleaning Services',
  tagline: 'Professional window & exterior cleaning across Doncaster',
  email: 'SmartWaterWCS@outlook.com',
  phone: '07542 472139',
  whatsapp: '447542472139',
  location: 'Doncaster, South Yorkshire',
  founder: 'Ash',

  // ── URLs ──────────────────────────────────────────────────
  url: 'https://smartwaterwcs.co.uk',
  facebook: 'https://www.facebook.com/SWWindowcleaningservices',
  linkedin: '',
  instagram: '',
  twitter: '',
  newsletter: '',

  // ── Design tokens ─────────────────────────────────────────
  colors: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f0f7fc',
    accent: '#3AADE0',
    accentSecondary: '#1A3A6B',
    textPrimary: '#1a1a2e',
    textSecondary: '#5a6a7a',
  },

  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },

  // ── Pages — toggle on/off ────────────────────────────────
  pages: {
    home: true,
    about: true,
    services: true,
    contact: true,
    privacy: true,
    blog: false,
  },

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: "Doncaster's Most Recommended Window Cleaning Service",
    subline: 'Window cleaning, gutter clearing, fascia & soffit cleaning, and conservatory roofs — done properly, priced honestly. Trusted by 350+ regular customers.',
    cta: { text: 'Get a Free Quote', href: 'https://wa.me/447542472139' },
    secondaryCta: { text: 'View Services & Prices', href: '/services' },
  },

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      title: 'Window Cleaning',
      description: 'Crystal-clear windows using a professional water-fed pole system. Frames, sills and doors included — no hidden extras.',
      icon: '🪟',
      price: 'From £13',
    },
    {
      title: 'Gutter Cleaning',
      description: 'Blocked gutters cause damp and damage. We clear and clean them so water flows where it should.',
      icon: '🏠',
      price: 'From £70',
    },
    {
      title: 'Fascia & Soffit Cleaning',
      description: 'Bring your fascias and soffits back to white. Removes years of dirt, algae and weathering.',
      icon: '✨',
      price: 'From £80',
    },
    {
      title: 'Conservatory Roof Cleaning',
      description: 'Safe soft-wash with pure water — no harsh chemicals. Your conservatory roof looking like new again.',
      icon: '🏡',
      price: 'From £80',
    },
  ],

  // ── How It Works ──────────────────────────────────────────
  process: [
    { step: '01', title: 'Get in Touch', description: 'WhatsApp or call Ash for a free quote. No obligation, no pressure.' },
    { step: '02', title: 'Get Your Price', description: 'Ash gets back to you with an honest price. What he quotes is what you pay.' },
    { step: '03', title: 'On the Schedule', description: 'Ash puts you on a regular schedule. Same routine, no need to rebook each time.' },
    { step: '04', title: 'Text the Night Before', description: 'Ash texts you the evening before to confirm he\'s coming. No wondering, no chasing.' },
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    founderName: 'Ash',
    founderRole: 'Owner & Operator',
    bio: 'Ash served in the British Army as a tank driver. After leaving, he moved into construction driving articulated dump trucks. Good work, but long hours building someone else\'s thing.\n\nHe wanted something of his own. A mate told him about window cleaning, and Smart Water was born.\n\nFour and a half years on, he\'s got over 350 regular customers and dozens of five-star reviews. Most of that came through word of mouth. People tell their neighbours. That\'s the bit he\'s most proud of.\n\nAsh still does every job himself. Windows, gutters, fascias, soffits, conservatory roofs. If it needs cleaning on the outside of your house, he\'ll sort it.',
    philosophy: 'Ash texts you the night before to confirm he\'s coming. He turns up when he says he will. Does a proper job. Treats your house like it\'s his own. That\'s it. No gimmicks.',
    values: [
      { title: 'Reliable', description: 'Text the night before to confirm. Turns up on time. Regular schedule you can count on.' },
      { title: 'Honest Prices', description: 'What Ash quotes is what you pay. Frames, sills and doors always included.' },
      { title: 'Fully Insured', description: 'Public liability insurance on every job. Pure water system, no harsh chemicals.' },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────
  testimonials: [
    {
      quote: 'Really easy communications and reliable service! Really happy with work completed, especially on my particularly dirty and difficult to navigate conservatory roof!',
      name: 'Laura M.',
    },
    {
      quote: 'Very happy with the work carried out to our conservatory roof, windows, soffits, facias and gutters. Did a great job, very friendly and a reasonable price.',
      name: 'Brenda Hagyard',
    },
    {
      quote: 'Absolutely fantastic job, and we\'ve booked them again to become their regular customers. Gutters and Fascias look fantastic.',
      name: 'Cheryl Byrne',
    },
    {
      quote: 'I\'ve had all my upvc, fascia\'s, guttering etc done and would 100% recommend. My conservatory roof is actually sparkling! So happy.',
      name: 'Dawn Flanagan',
    },
    {
      quote: 'Ash from Smart Water came and cleaned the exterior of our conservatory and made an excellent job. We are very pleased with the result. Can strongly recommend him.',
      name: 'Allan Rowley',
    },
    {
      quote: 'Had Ash out to give my gutters a good clean out as well as my fascias and soffits — brilliant job. They\'ve come up amazing.',
      name: 'Mandie Winter',
    },
  ],

  // ── Service Areas ─────────────────────────────────────────
  serviceAreas: ['Warmsworth', 'Edlington', 'Balby', 'Cusworth', 'Scawsby', 'Sprotbrough', 'Bessacarr', 'Cantley', 'Tickhill', 'Rossington', 'Doncaster'],
  servicePostcodes: ['DN4', 'DN5', 'DN11', 'DN12'],
  yearsTrading: '4.5',
  insurance: 'Public liability insured',

  // ── Credibility / social proof ────────────────────────────
  credibility: {
    heading: 'Trusted Across Doncaster',
    stats: [
      { value: '4.5+', label: 'Years trading' },
      { value: '350+', label: 'Regular customers' },
      { value: '69', label: 'Five-star reviews' },
      { value: '100%', label: 'Recommendation rate' },
    ],
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    heading: 'Get a Free Quote',
    subline: 'Drop Ash a message on WhatsApp for the fastest reply, or give him a call. He\'ll get back to you with an honest price.',
    formFields: ['name', 'email', 'message'] as const,
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    copyright: 'All rights reserved.',
    builtBy: { name: 'Beyond Arc', url: 'https://beyondarc.com' },
  },

  // ── SEO defaults ──────────────────────────────────────────
  seo: {
    defaultTitle: 'Smart Water Window Cleaning Services | Doncaster',
    defaultDescription: 'Professional window cleaning, gutter clearing, fascia & soffit cleaning and conservatory roof cleaning in Doncaster. 350+ regular customers. Free quotes — call or WhatsApp Ash today.',
    ogImage: '/og-image.png',
  },
} as const;

// ── Type export ─────────────────────────────────────────────
export type SiteConfig = typeof siteConfig;
