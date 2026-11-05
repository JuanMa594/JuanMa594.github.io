export type ContactKind = 'github' | 'linkedin' | 'email';

export interface ContactLink {
  kind: ContactKind;
  /** Shown text: a URL for GitHub/LinkedIn, the address for email. */
  value: string;
}

// Labels come from the active locale (`t.contact.links`), keyed by `kind`.
export const CONTACT: ContactLink[] = [
  { kind: 'github', value: 'https://github.com/JuanMa594' },
  { kind: 'linkedin', value: 'https://www.linkedin.com/in/juan-manuel-usuga-galeano-00073437a' },
  { kind: 'email', value: 'jmusuga1122@gmail.com' },
];

export function getContactHref(link: ContactLink): string {
  return link.kind === 'email' ? `mailto:${link.value}` : link.value;
}

/** Downloadable CV in public/cv/. Set to null to hide every "Download CV" button. */
export const CV_PATH: string | null = '/cv/JuanMa-CV.pdf';
