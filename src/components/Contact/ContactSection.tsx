'use client';

import { DownloadCvButton } from '../DownloadCvButton';
import { Reveal } from '../Experience/Reveal';
import { useLanguage } from '../LanguageContext';
import { ContactForm } from './ContactForm';
import { ContactLinks } from './ContactLinks';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    // min-h keeps the last section tall enough to reach the Header's active-section band at the bottom of the page.
    <section id="contact" className="relative min-h-[70vh] px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {t.contact.subtitle}
        </p>

        {/* grid-cols-1 is minmax(0, 1fr): without it the column grows to the longest unbreakable text (the LinkedIn URL) and overflows phones. */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal className="flex min-w-0 flex-col items-start gap-6">
            <div className="w-full">
              <ContactLinks />
            </div>
            <DownloadCvButton />
          </Reveal>

          <Reveal delay={100} className="min-w-0">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
