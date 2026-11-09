# Tech Stack and Conventions

## Technologies

- **Language:** TypeScript (primary) + JS
- **Framework / runtime:** Next.js (static export, `output: 'export'`)
- **Styling:** Tailwind CSS
- **Data Source:** GitHub REST API v3 (public, fetched at build time)
- **Tests:** Vitest
- **Build tool:** Bun + Next.js
- **Hosting:** GitHub Pages (static site, deployed by GitHub Actions)

### Libraries
Install if it´s not yet
- **Animations:** Framer Motion, GSAP
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui, Material UI (MUI)
- **State Manage:** Zustand, Redux Toolkit

## Files / Key Modules

```
src/
├── components/
│    ├── Header.tsx
│    ├── LanguageContext.tsx # EN/ES state, localStorage + document.lang sync
│    ├── LanguageToggle.tsx  # compact EN/ES segmented control
│    ├── Hero.tsx
│    └── Projects/
│       ├── ProjectCard.tsx
│       ├── ProjectFilters.tsx
│       ├── ProjectsSection.tsx        # server fetch
│       └── ProjectsSectionContent.tsx # client wrapper (i18n)
├── hooks/
│    └── useGitHubRepos.ts   # calls /api/github instead of api.github.com
├── types/
│    ├── github.ts           # GitHub API response types
│    └── i18n.ts             # Language + Localized<T> content type
├── data/
│    ├── experience.ts       # static experience data (Localized)
│    ├── skills.ts           # static skills data (Localized)
│    └── locales/
│       ├── en.ts            # English UI copy dictionary
│       ├── es.ts            # Spanish UI copy dictionary
│       └── index.ts         # DICTIONARIES lookup
└── lib/contactValidation.ts # shared contact-form validation (posts to Formspree)
```

## Commands

- `bun dev` — starts the local dev environment.
- `bun add ` — adds a package to the project
- `bun run test` — runs Vitest tests.
- `bun run lint` — checks code style with ESLint.
- `bun run build` — builds the static export into `out/`.
- `bun run preview` — serves `out/` locally.
- `bun install` — install dependencies

## Data Models / Domains

- `GitHubRepo` — fields: `name`, `description`, `html_url`, `language`, `stargazers_count`, `topics: string[]`, `fork: boolean`. Source: GitHub API. `fork` controls default visibility filter.
- `ExperienceItem` — fields: `id`, `company`, `role`, `location`, `dateRange`, `bullets: string[]` (achievements), `techKeys: string[]`, optional `logo`. Static data in `data/experience.ts`; types in `types/experience.ts`.
- `EducationItem` — fields: `id`, `degree`, `institution`, `dateRange`, `type: 'higher_ed' | 'technical' | 'high_school'`, `description`, optional `logo`, optional `current`. Static data in `data/education.ts`.
- `Skill` — fields: `name: string`, `category: 'Frontend' | 'Backend' | 'Tools' | string`. Static data in `data/skills.ts`.
- `Localized<T>` — `Record<'en' | 'es', T>`. Used by content-bearing data (bio, projects, gallery, skills categories, experience, education) so the structure stays in one file while the text is bilingual.

## Conventions

- **Naming:** `camelCase` for functions and variables; `PascalCase` for React/TypeScript/Next components and types.
- **Tests:** Create a `tests/` folder at the root if it doesn't exist; all test files go there.
- **Environments:** Split dev / prod with Next.js `process.env`; only `NEXT_PUBLIC_*` values are inlined into the static bundle.
- **Config:** Secure by default — defense in depth; sensitive values only in `.env`.
- **Security:** Prevent XSS (no `dangerouslySetInnerHTML` with untrusted data), no command injection.
- **Typing:** All data structures typed with TypeScript interfaces/types — no `any`.
- **Component pattern:** One component per file; props typed via `interface Props`.
- **API calls:** All GitHub fetches inside `useGitHubRepos.ts`; no fetch calls directly in components.
- **Localization:** UI copy must exist in both `data/locales/en.ts` and `es.ts`; content data uses `Localized<T>`. English is the default, the choice persists in `localStorage` (`language`), and the root document keeps `translate="no"`. Terminal commands stay in English; `-info` summaries follow the active language.

## Visual Style

- **Theme:** Dark mode by default — deep dark background (`#0F0F0F`), subtle borders — with a light mode toggle (`#F8F9FA` background). Colors are defined as CSS variables in `src/app/globals.css` (`:root` for dark, `:root.light` for light).
- **Accent color:** Blue spectrum (`#0231BD`, the other blues are in `/tailwind.config.json` file, in the root of the project).
- **Typography:** Single sans-serif — Inter (via Google Fonts or Fontsource).
- **Layout:** Single-page, scroll-based; responsive from 320 px mobile to 1440 px desktop.
- **Animations:** Subtle only — hover state transitions, fade-in on scroll; no heavy motion.

## Harsh Limits

- **No dependencies without notice** — never install a library without informing the developer first.
- **No secrets in repo** — API keys or tokens used at build time live only in `.env*` files or CI secrets; the static bundle contains only public `NEXT_PUBLIC_*` values.
- **No `.env*` committed** — `.env`, `.env.local`, `.env.production` must be in `.gitignore`.
- **No sensitive values in the browser** — the static site keeps contact validation client-side and delegates delivery to the public Formspree endpoint; no API keys ship to the client.
- **Structured logs only** — no `console.log` with sensitive data in production builds.
- **Hide sensitive data on errors** — catch blocks must not expose tokens, emails, or stack traces to the UI.
- **No arbitrary command execution** — no `eval`, no `exec` of user-supplied strings.
- **No credential storage in code** — hardcoded tokens or passwords are forbidden.
