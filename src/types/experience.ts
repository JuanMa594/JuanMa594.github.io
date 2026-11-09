import type { StaticImageData } from 'next/image';
import type { Localized } from './i18n';

export interface ExperienceItem {
  id: string;
  role: Localized<string>;
  company: string;
  location: Localized<string>;
  dateRange: Localized<string>;
  /** Key achievements, 2-3 short sentences. */
  bullets: Localized<string[]>;
  /** Keys of TECH_META. */
  techKeys: string[];
  /** Company mark; a generic icon is shown when missing. */
  logo?: StaticImageData;
}

export type EducationType = 'higher_ed' | 'technical' | 'high_school';

export interface EducationItem {
  id: string;
  degree: Localized<string>;
  institution: string;
  dateRange: Localized<string>;
  type: EducationType;
  description: Localized<string>;
  /** Institution mark; a generic icon is shown when missing. */
  logo?: StaticImageData;
  /** Still in progress: gets the glowing timeline node. */
  current?: boolean;
}
