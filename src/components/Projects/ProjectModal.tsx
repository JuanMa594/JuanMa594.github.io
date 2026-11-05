'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import type { FeaturedProject } from '../../lib/github';
import { useLanguage } from '../LanguageContext';

interface ProjectModalProps {
  project: FeaturedProject;
  onClose: () => void;
}

// Mounted only while the gallery is open (see ProjectCard), so state starts fresh each time.
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = project.galleryImages;
  const activeImage = images[activeIndex];
  const activeCaption = activeImage?.caption[language];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % images.length);
      if (event.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + images.length) % images.length);
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, images.length]);

  if (images.length === 0 || !activeImage) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-ink/10 bg-surface"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
          <h4 className="font-mono text-sm text-ink">{project.name}</h4>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.projects.modal.close}
            className="text-muted transition hover:text-accent"
          >
            <FiX size={18} aria-hidden />
          </button>
        </div>

        <div className="relative h-[65vh] max-h-[560px] w-full bg-background">
          <Image
            src={activeImage.src}
            alt={activeCaption || `${project.name} ${t.projects.modal.screenshot} ${activeIndex + 1}`}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
                aria-label={t.projects.modal.previous}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              >
                <FiChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
                aria-label={t.projects.modal.next}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              >
                <FiChevronRight aria-hidden />
              </button>
            </>
          )}
        </div>

        {activeCaption && (
          <p className="border-t border-ink/10 px-5 py-3 text-center text-sm text-muted">
            {activeCaption}
          </p>
        )}

        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 py-3">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  index === activeIndex ? 'bg-accent' : 'bg-ink/20'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
