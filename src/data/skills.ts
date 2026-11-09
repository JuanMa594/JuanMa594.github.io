import type { Localized } from '../types/i18n';

export interface SkillCategory {
  id: string;
  title: Localized<string>;
  keys: string[];
}

// `keys` map into TECH_META (see ./techIcons) for the icon + display label.
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: {
      en: 'Programming Languages',
      es: 'Lenguajes de programación',
    },
    keys: ['python', 'sql', 'csharp', 'java', 'javascript', 'typescript'],
  },
  {
    id: 'frameworks',
    title: {
      en: 'Frameworks & Libraries',
      es: 'Frameworks y librerías',
    },
    keys: [
      'nextjs',
      'react',
      'streamlit',
      'net',
      'tailwindcss',
      'fastapi',
      'bootstrap',
      'pyside',
      'pytorch',
      'sqlite',
      'chromadb',
    ],
  },
  {
    id: 'tools',
    title: {
      en: 'Tools & Automation',
      es: 'Herramientas y automatización',
    },
    keys: [
      'docker',
      'n8n',
      'git',
      'github',
      'bun',
      'vscode',
      'sqlserver',
      'postgresql',
      'vercel',
      'postman',
      'powerplatform',
      'claudecode',
      'codex',
      'opencode',
    ],
  },
];
