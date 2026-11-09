'use client';

import type { Language } from '../types/i18n';
import { useLanguage } from './LanguageContext';

const OPTIONS: Language[] = ['en', 'es'];

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      translate="no"
      className="flex items-center rounded-full border border-ink/10 bg-surface p-1 shadow-sm"
    >
      {OPTIONS.map((option) => {
        const isActive = language === option;
        const label = option === 'en' ? t.language.en : t.language.es;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            aria-pressed={isActive}
            aria-label={label}
            title={label}
            className={`rounded-full px-2 py-1 font-mono text-xs uppercase transition sm:px-2.5 ${
              isActive ? 'bg-accent/15 text-accent' : 'text-muted hover:bg-ink/5 hover:text-ink'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
