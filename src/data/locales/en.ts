/**
 * UI copy dictionary (English, the default language).
 *
 * Section content such as bios, project descriptions or experience bullets
 * lives next to its data in `src/data/*` using `Localized<T>`; this file is
 * only for interface strings shared by components.
 */
export const en = {
  nav: {
    home: 'Home',
    about: 'About Me',
    projects: 'Projects/Skills',
    exp: 'Exp.',
    contact: 'Contact',
  },
  theme: {
    dark: 'Dark',
    light: 'Light',
    toggle: 'Toggle theme',
  },
  language: {
    label: 'Language',
    en: 'English',
    es: 'Spanish',
  },
  hero: {
    eyebrow: '// Software Developer',
    greeting: "I'm",
    role: 'Software, Automation & AI Developer',
  },
  about: {
    title: 'About Me',
    galleryTitle: 'A Few Things I Love',
    gallerySubtitle: 'Here are some of the things that bring me joy outside of coding.',
  },
  projects: {
    title: 'Projects',
    subtitle: "A few things I've built.",
    all: 'All',
    noResults: 'No projects match this filter yet.',
    privateRepo: "Private repository — get in touch and I'll share the link.",
    liveDemo: 'Live Demo',
    preview: 'Preview',
    github: 'GitHub',
    modal: {
      close: 'Close preview',
      previous: 'Previous screenshot',
      next: 'Next screenshot',
      screenshot: 'Screenshot',
    },
  },
  skills: {
    title: 'Skills',
    subtitle: 'Languages, frameworks and tools I reach for day to day.',
  },
  experience: {
    title: 'Experience & Education',
    subtitle: "Where I've worked and what I've studied.",
    experienceLabel: 'Experience',
    educationLabel: 'Education',
    types: {
      higher_ed: 'Higher education',
      technical: 'Technical',
      high_school: 'High school',
    },
  },
  contact: {
    title: 'Contact',
    subtitle: 'Got a project, an opportunity or just a question? Send me a message or reach out directly.',
    links: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      website: 'Website',
    },
    errors: {
      name: 'Name must be 2-100 characters.',
      email: 'Enter a valid email address.',
      message: 'Message must be 10-2000 characters.',
      generic: "Couldn't send your message. Please try again later.",
      rateLimited: 'Too many messages. Please try again in a few minutes.',
      forbidden: 'This request is not allowed from this site.',
      invalidRequest: 'Invalid request. Please check your message and try again.',
    },
    success: "Message sent! I'll get back to you soon.",
  },
  common: {
    downloadCv: 'Download CV',
    dismiss: 'Dismiss notification',
  },
  terminal: {
    homeInfo: "JuanMa's portfolio — home base. Try /about, /skills or /exp for more.",
    projectsInfo: (githubUrl: string) => `Check ${githubUrl} in the meantime.`,
  },
};

export type Translation = typeof en;
