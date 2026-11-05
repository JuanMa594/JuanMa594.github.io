# Implementation Plan: 005.5-Language Feature

## Phase 1: Localization Infrastructure & Dictionaries
1. Create `src/types/i18n.ts` with `Language = 'en' | 'es'` and `Localized<T> = Record<Language, T>`.
2. Create `src/data/locales/en.ts` and `src/data/locales/es.ts` with UI copy (nav, section titles, labels, buttons, form errors, toasts, empty states, terminal `-info` strings). Export `DICTIONARIES` and the `Translation` type from `src/data/locales/index.ts`.
3. Create `src/components/LanguageContext.tsx` to manage `language`, `setLanguage`, `toggleLanguage` and the active dictionary `t`, with `localStorage` (`language`) and `document.documentElement.lang` synchronization.

## Phase 2: Root Configuration & Browser Protection
1. Update `src/app/layout.tsx` with `<html lang="en" translate="no">` and `metadata.other` `google: 'notranslate'`.
2. Wrap the application with `<LanguageProvider>` in `src/components/MainLayout.tsx` (the existing provider wrapper; `app/layout.tsx` stays a server component).

## Phase 3: UI Component Updates
1. **`src/components/LanguageToggle.tsx`:** segmented `EN` / `ES` control with `aria-pressed`, active blue styling and `translate="no"`.
2. **`src/components/Header.tsx`:** place `<LanguageToggle />` next to the theme button; translate nav labels and the Dark/Light label.
3. **Section refactoring:**
   - `Hero`, `SkillsSection`, `ExperienceEducationSection`, `ContactSection` become client components.
   - `ProjectsSection` stays server-side; `ProjectsSectionContent` is the client wrapper that consumes `t`.
   - `ProfileCard`, `GalleryCard`, `ProjectCard`, `ProjectModal`, `ProjectFilters`, `ProjectsGrid`, `ExperienceCard`, `EducationCard`, `ContactForm`, `ContactLinks`, `Toast` and `DownloadCvButton` consume the active language.
   - `DownloadCvButton` picks `CV_PATHS[language]` (EN: `public/cv/JuanMa-CV.pdf`, ES: `public/cv/JM CV (Spanish).pdf`).
   - Content data in `src/data/{about,projects,projectMedia,skills,experience,education}.ts` uses `Localized<T>` fields; structural fields (ids, images, URLs, tech keys) stay unchanged.
   - `src/lib/github.ts` passes localized descriptions/captions through `FeaturedProject`.
4. **Terminal:** `Terminal.tsx` passes `language` and `t` to `CommandContext`; `terminalCommands.ts` uses them only in `-info` summaries. Commands and help remain English.

## Phase 4: Testing & Verification
1. `bun run lint` and `bun run build`.
2. Manual checks: EN default, ES switch, persistence after reload, `document.lang`, `translate="no"`, theme/terminal/filters/modal/contact form, responsive header at 320/375 px.

## Implementation Notes / Corrections
- Paths corrected from `src/locales/` → `src/data/locales/`, `src/context/LanguageContext.tsx` → `src/components/LanguageContext.tsx`, and `src/components/Common/LanguageToggle.tsx` → `src/components/LanguageToggle.tsx`.
- `Navbar.tsx` does not exist; the header is `src/components/Header.tsx`.
- The provider lives in `MainLayout.tsx` to keep `app/layout.tsx` as a server component.
- Content translations are co-located with their data via `Localized<T>` instead of being duplicated in the dictionaries; this keeps ids/slugs/links/images in one place and avoids breaking project filters or terminal lookups.
- The shared contact validator still returns English strings for the API; the client maps failing fields and HTTP status codes to localized messages.
- `CV_PATH` became `CV_PATHS` (`Localized<string> | null`) to support the Spanish CV; the component resolves the path from the active language and encodes it for the filename with spaces.
- No new dependencies were added.
