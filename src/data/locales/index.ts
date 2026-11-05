import type { Language } from '../../types/i18n';
import { en, type Translation } from './en';
import { es } from './es';

export type { Translation };

export const DICTIONARIES: Record<Language, Translation> = { en, es };
