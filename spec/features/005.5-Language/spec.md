# Specification: 005.5-Language Switcher Feature

## 1. Overview
The `005.5-Language` feature introduces a manual language toggle (switching between English `EN` as default and Spanish `ES`) located adjacent to the theme switcher button in the global header. Additionally, it implements protective attributes (`translate="no"`) to prevent browser auto-translation tools from breaking DOM nodes, component states, and custom animations.

## 2. Visual & Architectural Integration
- **Placement:** Positioned in the global header (`src/components/Header.tsx`), directly beside the theme toggle button.
- **Design & Styling:**
  - Compact segmented pill showing abbreviations (`EN` / `ES`).
  - Active state highlighted with the project's signature blue accent and a subtle active background pill.
  - Smooth hover transitions consistent with existing interactive elements.

## 3. Functional Requirements

### 3.1 Browser Translation Prevention
- The root `<html>` element includes `translate="no"` and a Google `notranslate` meta tag.
- The document `lang` attribute stays in sync with the active language through `LanguageContext`.

### 3.2 State Management & Persistence
- **Default State:** English (`EN`).
- **State Switcher:** Clicking `EN` or `ES` changes the active dictionary immediately.
- **Persistence:** The choice is stored in `localStorage` under the `language` key so it survives reloads.

### 3.3 Content Localization Strategy
- UI copy lives in `src/data/locales/en.ts` and `src/data/locales/es.ts`, exposed through `src/data/locales/index.ts`.
- `src/components/LanguageContext.tsx` provides `{ language, setLanguage, toggleLanguage, t }` and keeps `document.documentElement.lang` updated.
- Section content (bio, gallery, project descriptions/captions, skills categories, experience, education) uses `Localized<T>` from `src/types/i18n.ts` inside the existing `src/data` files.
- `ProjectsSection` remains an async server component; `ProjectsSectionContent` is the client wrapper that consumes the language context.
- Terminal commands and help remain in English; `-info` summaries use the active language.
- `DownloadCvButton` selects `CV_PATHS[language]` from `src/data/contact.ts`, so the English and Spanish PDFs download according to the active language.

## 4. Acceptance Criteria
- [x] A clean `EN/ES` toggle button is visible in the header next to the theme switcher.
- [x] Clicking the toggle instantly updates supported text content across the site without requiring a hard page reload.
- [x] Browser auto-translation is discouraged via `translate="no"` on `<html>` and the Google `notranslate` meta tag.
- [x] The user's language choice is remembered via `localStorage`.
- [x] The `Download CV` button serves the English PDF in EN and the Spanish PDF in ES.
- [x] There are no side effects: theme, terminal, filters, modal, contact form and CV button keep working.

## 5. Implementation Notes / Corrections
- The plan originally proposed `src/locales/` and `src/context/LanguageContext.tsx`. The repository already uses `src/data/` for static content and `src/components/` for contexts, so the final paths are `src/data/locales/` and `src/components/LanguageContext.tsx`.
- The header component is `Header.tsx` (there is no `Navbar.tsx`).
- The plan proposed `src/components/Common/LanguageToggle.tsx`; the final path is `src/components/LanguageToggle.tsx` because there is no `Common/` folder.
- `<LanguageProvider>` was added to `MainLayout.tsx` (the existing provider wrapper) instead of `app/layout.tsx`, which stays a server component with metadata.
- Contact labels are no longer duplicated in `src/data/contact.ts`: the now-unused `ContactLink.label` field was removed and every label comes from `t.contact.links[link.kind]`.
- `CV_PATH` was replaced by `CV_PATHS` (`Localized<string> | null`) when the Spanish CV was added. `DownloadCvButton` resolves the path per language and applies `encodeURI` for the filename with spaces and parentheses.
- Verification found the English CV on disk as `Juanma-CV.pdf` while git tracked `JuanMa-CV.pdf`. Next resolves `public/` paths case-sensitively, so the link 404'd in local production builds. The working-tree filename was normalized to `JuanMa-CV.pdf` (git index unchanged), matching production.

## 6. Known Limitations
- The first server-rendered paint is always English. The persisted language is applied in a `useEffect` after hydration, so Spanish visitors may see a brief English flash on reload. Avoiding it would require a blocking inline script or cookie-based SSR, which is out of scope for a static single-page site.
- `metadata.title` and `metadata.description` in `src/app/layout.tsx` stay in English: they are static server metadata, while the switch is client-side. Localizing them would require generating per-language metadata, which conflicts with the no-routing design.
- `/quote`, the terminal's personality/easter-egg output, and its welcome/placeholder copy remain in English by design, alongside command names and help text.
