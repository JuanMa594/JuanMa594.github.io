'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGitBranch, FiGithub, FiImage, FiLock, FiStar, FiUsers } from 'react-icons/fi';
import type { FeaturedProject } from '../../lib/github';
import { PROJECT_ICONS } from '../../data/projectIcons';
import { TechBadge } from '../TechBadge';
import { useLanguage } from '../LanguageContext';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  project: FeaturedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const hasGallery = project.galleryImages.length > 0;
  const ProjectIcon = PROJECT_ICONS[project.slug];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-surface p-6 transition hover:border-accent/40">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {project.logo ? (
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-accent/20 bg-accent/10">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </span>
          ) : (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 font-mono text-sm font-semibold text-accent">
              {ProjectIcon ? <ProjectIcon size={20} aria-hidden /> : project.name.slice(0, 1).toUpperCase()}
            </span>
          )}
          <h3 className="min-w-0 text-lg font-semibold leading-tight">{project.name}</h3>
        </div>

        {project.stars !== undefined && project.forks !== undefined && (
          <div className="flex shrink-0 items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-1">
              <FiStar aria-hidden /> {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <FiGitBranch aria-hidden /> {project.forks}
            </span>
          </div>
        )}
      </div>

      {project.techKeys.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.techKeys.map((key) => (
            <TechBadge key={key} techKey={key} />
          ))}
        </div>
      )}

      <p className="flex-1 text-sm leading-6 text-muted">
        {project.description[language]}
      </p>

      {project.collaborationNote && (
        <p className="flex items-center gap-1.5 text-xs italic text-muted">
          <FiUsers aria-hidden /> {project.collaborationNote[language]}
        </p>
      )}

      {project.collaborators && project.collaborators.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <FiUsers aria-hidden /> {t.projects.collaborators}:
          </span>
          {project.collaborators.map((collaborator) => (
            <a
              key={collaborator.url}
              href={collaborator.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 rounded-full border border-ink/10 px-2 py-0.5 transition hover:border-accent/40 hover:text-accent"
            >
              <FiGithub aria-hidden /> {collaborator.name}
            </a>
          ))}
        </div>
      )}

      {project.githubUrl === null && (
        <p className="flex items-center gap-1.5 text-xs italic text-muted">
          <FiLock aria-hidden /> {t.projects.privateRepo}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 transition hover:border-accent/40 hover:text-accent"
          >
            <FiGithub aria-hidden /> {t.projects.github}
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 transition hover:border-accent/40 hover:text-accent"
          >
            <FiExternalLink aria-hidden /> {t.projects.liveDemo}
          </a>
        )}

        {hasGallery && (
          <button
            type="button"
            onClick={() => setIsGalleryOpen(true)}
            className="flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 transition hover:border-accent/40 hover:text-accent"
          >
            <FiImage aria-hidden /> {t.projects.preview}
          </button>
        )}
      </div>

      {hasGallery && isGalleryOpen && (
        <ProjectModal project={project} onClose={() => setIsGalleryOpen(false)} />
      )}
    </div>
  );
}
