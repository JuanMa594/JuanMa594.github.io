'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { AnimatedLogo } from './AnimatedLogo';

const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'exp', href: '#exp' },
  { key: 'contact', href: '#contact' },
] as const;

// Sections without a nav item of their own that count as part of another one (Skills sits under "Projects/Skills").
const SECTION_ALIASES: Record<string, string> = { skills: 'projects' };

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = [...NAV_ITEMS.map((item) => item.href.slice(1)), ...Object.keys(SECTION_ALIASES)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // The observer's first callback reports the initial viewport, before the browser has scrolled
    // to a hash in the URL (e.g. /#exp). Syncing then would erase that hash, so it is skipped.
    let isFirstCallback = true;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const sectionId = SECTION_ALIASES[visible.target.id] ?? visible.target.id;
          setActiveSection(sectionId);

          if (!isFirstCallback) {
            // replaceState: scrolling must not add a history entry per section, and it never scrolls.
            const { pathname, search } = window.location;
            const hash = sectionId === 'home' ? '' : `#${sectionId}`;
            if (window.location.hash !== hash) {
              window.history.replaceState(null, '', `${pathname}${search}${hash}`);
            }
          }
        }

        isFirstCallback = false;
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-6xl px-5 py-6">
      <nav className="flex items-center justify-between gap-3">
        <Link href="#home" className="flex items-center gap-2 group">
          <AnimatedLogo alt="JM" wrapperClassName="h-8 w-8 transition-transform group-hover:scale-110" gap={2} />
          <span className="text-xl font-bold tracking-tight text-ink">
            JuanMa<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden gap-2 rounded-full border border-ink/10 bg-surface/70 p-1 shadow-sm backdrop-blur md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? `bg-muted/15 ${theme === 'dark' ? 'text-accent-light' : 'text-accent'}`
                    : 'text-muted hover:bg-ink/5 hover:text-ink'
                }`}
              >
                {t.nav[item.key]}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageToggle />
          <button
            onClick={toggleTheme}
            aria-label={t.theme.toggle}
            className="flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-2 py-2 text-xs font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 sm:px-3 sm:text-sm"
          >
            <span className={`h-2.5 w-2.5 rounded-full ${theme === 'dark' ? 'bg-accent' : 'bg-amber-400'}`} />
            {theme === 'dark' ? t.theme.dark : t.theme.light}
          </button>
        </div>
      </nav>
    </header>
  );
}
