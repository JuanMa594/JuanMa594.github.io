'use client';

import { EDUCATION } from '../../data/education';
import { EXPERIENCE } from '../../data/experience';
import { useLanguage } from '../LanguageContext';
import { EducationTimeline } from './EducationTimeline';
import { ExperienceCard } from './ExperienceCard';
import { DownloadCvButton } from '../DownloadCvButton';
import { Reveal } from './Reveal';

export function ExperienceEducationSection() {
  const { t } = useLanguage();

  return (
    <section id="exp" className="bg-[#0B0F19] px-5 py-24 text-ink transition-colors [:root.light_&]:bg-[#FFF5EB]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.experience.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {t.experience.subtitle}
        </p>

        <DownloadCvButton className="mt-6" />

        <div className="mt-14 flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted">{t.experience.experienceLabel}</h3>
            {EXPERIENCE.map((item) => (
              <Reveal key={item.id}>
                <ExperienceCard item={item} />
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted">{t.experience.educationLabel}</h3>
            <EducationTimeline items={EDUCATION} />
          </div>
        </div>
      </div>
    </section>
  );
}
