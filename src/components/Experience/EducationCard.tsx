'use client';

import { FiBookOpen } from 'react-icons/fi';
import type { EducationItem } from '../../types/experience';
import { useLanguage } from '../LanguageContext';
import { OrgLogo } from './OrgLogo';

interface EducationCardProps {
  item: EducationItem;
}

export function EducationCard({ item }: EducationCardProps) {
  const { language, t } = useLanguage();

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-ink/10 bg-surface p-6 transition hover:border-accent/40">
      <div className="flex items-start justify-between gap-3">
        <OrgLogo logo={item.logo} alt={`${item.institution} logo`} fallbackIcon={FiBookOpen} />
        <span className="rounded-full border border-ink/10 px-3 py-1 font-mono text-[11px] text-muted">
          {t.experience.types[item.type]}
        </span>
      </div>

      <div>
        <h4 className="text-base font-semibold">{item.degree[language]}</h4>
        <p className="mt-1 text-sm text-muted">{item.institution}</p>
      </div>

      <p className="flex-1 text-sm leading-6 text-muted">{item.description[language]}</p>

      <span className="font-mono text-xs text-accent">{item.dateRange[language]}</span>
    </article>
  );
}
