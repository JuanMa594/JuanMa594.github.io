'use client';

import { SKILL_CATEGORIES } from '../../data/skills';
import { useLanguage } from '../LanguageContext';
import { SkillsCategory } from './SkillsCategory';

export function SkillsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.skills.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {t.skills.subtitle}
        </p>

        <div className="mt-14 flex flex-col gap-14">
          {SKILL_CATEGORIES.map((category) => (
            <SkillsCategory
              key={category.id}
              category={category}
              title={category.title[language]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
