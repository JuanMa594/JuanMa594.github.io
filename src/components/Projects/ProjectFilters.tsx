'use client';

import { useLanguage } from '../LanguageContext';
import { ALL_FILTER, useProjectsFilter } from './ProjectsFilterContext';

interface ProjectFiltersProps {
  tags: string[];
}

export function ProjectFilters({ tags }: ProjectFiltersProps) {
  const { activeFilter, setActiveFilter } = useProjectsFilter();
  const { t } = useLanguage();
  const options = [{ value: ALL_FILTER, label: t.projects.all }, ...tags.map((tag) => ({ value: tag, label: tag }))];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = activeFilter === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setActiveFilter(option.value)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
              isActive
                ? 'border-accent/60 bg-accent/15 text-accent'
                : 'border-ink/10 text-muted hover:border-accent/30 hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
