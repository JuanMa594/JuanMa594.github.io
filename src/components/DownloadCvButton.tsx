'use client';

import { FiDownload } from 'react-icons/fi';
import { CV_PATH } from '../data/contact';
import { useLanguage } from './LanguageContext';

interface DownloadCvButtonProps {
  className?: string;
}

// Renders nothing until a web-ready CV is published (CV_PATH in data/contact.ts).
export function DownloadCvButton({ className = '' }: DownloadCvButtonProps) {
  const { t } = useLanguage();

  if (!CV_PATH) return null;

  return (
    <a
      href={CV_PATH}
      download
      className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
    >
      <FiDownload aria-hidden />
      {t.common.downloadCv}
    </a>
  );
}
