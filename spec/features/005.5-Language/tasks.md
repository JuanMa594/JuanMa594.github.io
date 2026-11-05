# Tasks List: 005.5-Language Implementation

- [x] **Task 1: Dictionaries & Context Setup**
  - [x] Create `src/data/locales/en.ts` and `src/data/locales/es.ts` with UI copy keys for all sections.
  - [x] Create `src/data/locales/index.ts` exposing `DICTIONARIES` and the `Translation` type.
  - [x] Create `src/types/i18n.ts` with `Language` and `Localized<T>`.
  - [x] Create `src/components/LanguageContext.tsx` to handle state, persistence (`localStorage` key `language`), `document.documentElement.lang`, and the context provider.

- [x] **Task 2: Root Layout & Browser Anti-Translation Protection**
  - [x] Add `translate="no"` to `<html>` in `src/app/layout.tsx`.
  - [x] Add the Google `notranslate` meta tag via `metadata.other`.
  - [x] Wrap the application with `<LanguageProvider>` in `src/components/MainLayout.tsx`.

- [x] **Task 3: Language Toggle Component & Header Integration**
  - [x] Build `src/components/LanguageToggle.tsx` with a clean `EN / ES` segmented design.
  - [x] Insert `<LanguageToggle />` into `src/components/Header.tsx` next to the theme button and translate nav/theme labels.

- [x] **Task 4: Component Localization Hookup**
  - [x] Migrate `Hero`, `About`, `Projects`, `Skills`, `Experience` and `Contact` to use `useLanguage()`.
  - [x] Convert content data to `Localized<T>` (`about.ts`, `projects.ts`, `projectMedia.ts`, `skills.ts`, `experience.ts`, `education.ts`) and update `types/experience.ts` and `lib/github.ts`.
  - [x] Split `ProjectsSection` into the async server wrapper plus `ProjectsSectionContent` client wrapper.
  - [x] Localize contact validation/toast messages by mapping fields and HTTP status codes.
  - [x] Keep terminal commands/help in English; localize only `-info` summaries via `CommandContext.language` and `CommandContext.t`.
  - [x] Test interactive elements (terminal, modals, filters, theme, logo/accent easter eggs) to ensure zero regression.

- [x] **Task 5: Verification & Documentation**
  - [x] `bun run lint` passes.
  - [x] `bun run build` passes.
  - [x] Update `README.md`.
  - [x] Update `spec/AGENTS.md`, `spec/constitution/{mission,tech-stack,roadmap}.md` and this feature's docs with the actual paths/decisions.
