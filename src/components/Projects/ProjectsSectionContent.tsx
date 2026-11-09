'use client';

import type { FeaturedProject } from '../../lib/github';
import { useLanguage } from '../LanguageContext';
import { ProjectsGrid } from './ProjectsGrid';

interface ProjectsSectionContentProps {
  projects: FeaturedProject[];
}

export function ProjectsSectionContent({ projects }: ProjectsSectionContentProps) {
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.projects.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {t.projects.subtitle}
        </p>

        <div className="mt-12">
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
