# Portfolio — Specification

## Overview
Personal developer portfolio for JuanMa594, showcasing GitHub projects, experience, and skills. Built with React + TypeScript and deployed on Vercel. English is the default language; Spanish is available through the manual EN/ES switcher.

---

## Tech Stack

| Layer       | Choice                        |
|-------------|-------------------------------|
| Framework   | Next JS                       |
| Language    | TypeScript (primary) + JS     |
| Styling     | Tailwind CSS                  |
| Data source | GitHub REST API v3 (public)   |
| Hosting     | Vercel                        |
| Build tool  | Vite                          |

---

## Design System

- **Theme:** Dark mode by default, with a light mode toggle
- **Style:** Minimal, clean, modern
- **Typography:** Elms-Sans font 
- **Color palette:** Dark backgrounds, subtle borders, one accent color, blues
- **Animations:** Eye-catching — only subtle, minimal transitions in some places(hover, fade-in on scroll)

---

## Sections

### 1. Hero / About Me
- Short intro (name, role, one-liner bio)
- Links: GitHub profile, LinkedIn, email

### 2. Projects / Skills
- Data source: GitHub API → `GET /users/JuanMa594/repos`
- Cards display: repo name, description, primary language, stars, link to repo
- **Filters (Projects section only):**
  - By programming language
  - By topic/tag (uses GitHub repo topics)
- Filters are client-side (no extra API calls after initial fetch)
- Exclude forked repos by default (toggle optional)
#### Skills:
- Visual list of technologies grouped by category (e.g. Frontend, Backend, Tools)
- No progress bars — just clean tags/badges

### 3. Experience
- Static data (hardcoded or from a local JSON/TS file)
- Each entry: company, role, date range, bullet points of responsibilities


### 4. Contact
- Simple form: name, email, message
- Submission via a serverless function (Vercel Function) or third-party service (e.g. Resend, EmailJS)

---

## GitHub API Integration

- Endpoint: `https://api.github.com/users/JuanMa594/repos?per_page=100&sort=updated`
- Auth: optional GitHub token via environment variable (`VITE_GITHUB_TOKEN`) to raise rate limit from 60 to 5000 req/hr
- Data fetched once on page load, cached in component state
- Fields used: `name`, `description`, `html_url`, `language`, `stargazers_count`, `topics`, `fork`

---

## Project Structure

```
portfolio
│  ├──spec/
│    ├── constitution/            ← project stable rules (they change a bit)
│    │   ├── mission.md           ← what´re building and for whom
│    │   ├── tech-stack.md        ← conventions, techs and limits
│    │   └── roadmap.md           ← feature orders
│    └── features/                ← folder by feature
│        └── NNN-feature-name/
│            ├── spec.md          ← what does it do + acceptance criteria
│            ├── plan.md          ← how it´s implemented
│            └── tasks.md         ← tasks checklist
│  ├──src/
│    ├── components/
│    │    ├── Header.tsx          # sticky nav, theme button, EN/ES toggle
│    │    ├── Hero.tsx
│    │    ├── Terminal.tsx        # Interactive CLI: dispatches through terminalCommands.ts
│    │    ├── terminalCommands.ts # Terminal command registry (parse, handlers, help)
│    │    ├── ThemeContext.tsx    # dark/light theme provider
│    │    ├── LanguageContext.tsx # EN/ES state, localStorage + document.lang sync
│    │    ├── LanguageToggle.tsx  # compact EN/ES segmented control
│    │    ├── CosmeticsContext.tsx # logo/font mode + accent shade easter-egg state
│    │    ├── logoAssets.ts       # logo variant (mixed/pixel/serif) x theme lookup
│    │    ├── About/
│    │    │  ├── AboutMeSection.tsx  # id="about" wrapper: ProfileCard + PhotoGallery
│    │    │  ├── ProfileCard.tsx     # bio, tag badges, profile photo
│    │    │  ├── PhotoGallery.tsx    # responsive grid of GalleryCard
│    │    │  └── GalleryCard.tsx     # hover/tap caption-overlay photo tile
│    │    ├── Projects/
│    │    │  ├── ProjectsSection.tsx        # server fetch (GitHub)
│    │    │  ├── ProjectsSectionContent.tsx # client section wrapper (i18n)
│    │    │  ├── ProjectCard.tsx
│    │    │  ├── ProjectFilters.tsx
│    │    │  ├── ProjectModal.tsx
│    │    │  └── ProjectsGrid.tsx
│    │    ├── Experience/
│    │    │  └── ExperienceEducationSection.tsx  # experience + education timeline
│    │    ├── Skills/
│    │    │  └── SkillsSection.tsx
│    │    └── Contact/
│    │       ├── ContactSection.tsx
│    │       ├── ContactLinks.tsx
│    │       ├── ContactForm.tsx
│    │       └── Toast.tsx
│    ├── hooks/
│    │    ├── useGitHubRepos.ts   # It will call to /api/github instead of api.github.com directamente
│    │
│    ├── types/
│    │    ├── github.ts           # GitHub API response types
│    │    └── i18n.ts             # Language + Localized<T> content type
│    ├── data/
│    │    ├── experience.ts       # static experience data (Localized)
│    │    ├── skills.ts           # static skills data (Localized)
│    │    ├── contact.ts          # GitHub/LinkedIn/email links (used by /contact)
│    │    ├── quotes.ts           # quote pool for /quote
│    │    ├── about.ts            # bio, tags & gallery items for the About Me section
│    │    └── locales/
│    │       ├── en.ts            # English UI copy dictionary
│    │       ├── es.ts            # Spanish UI copy dictionary
│    │       └── index.ts         # DICTIONARIES lookup
│    ├── app/api/contact/route.ts  # Next.js Route Handler: submits the contact form via Resend
│    ├── App.tsx
│    └── main.tsx
│
│  ├── README.md                 # Oficial README of the project. Update whenever making an update.
│  ├── .gitignore             # Dependecies/libraries to ignore when making a Git commit
│  └── tailwind.config.json   # App Theme
```

---

## Routing
- Single-page app, no router needed
- Navigation via smooth scroll to section anchors

## Internationalization (i18n)
- English is the default; the header's `EN` / `ES` toggle switches the active language without a reload.
- The choice persists in `localStorage` under the `language` key; `LanguageProvider` also keeps `document.documentElement.lang` in sync.
- UI copy lives in `src/data/locales/en.ts` and `es.ts` (`DICTIONARIES` in `index.ts`). Section content uses `Localized<T>` from `src/types/i18n.ts` inside the existing `src/data` files, so ids, images, URLs and tech keys stay in one place.
- `src/app/layout.tsx` renders `<html lang="en" translate="no">` and a Google `notranslate` meta tag to protect the animated DOM from browser translators.
- Terminal commands, help and personality output stay in English by design; only `-info` summaries use the active language.
---

## Agent Core Directives & Execution Pipeline

### 1. Pre-Execution Protocol (Mandatory Reading)
Before analyzing, proposing, or writing any code, scripts, or architectural changes, the agent MUST explicitly read all markdown documentation located within the root `/spec/constitution` directory. 
- You are strictly prohibited from generating output or code solutions until the workspace rules, coding standards, and compliance metrics defined in `/spec/constitution` have been ingested.
- If the `/spec/constitution` folder is empty or missing, immediately halt execution and request the user to initialize the baseline project rules.

### 2. Operational Hierarchy & Rule Compliance
- **Supreme Authority:** The instructions, design system tokens, linting configurations, and workflows defined within `/spec/constitution` override any generic AI training defaults, external documentation, or third-party boilerplate styles.
- **Zero-Deviation Policy:** Any code generation that violates the architecture, security baselines, or style rules found in the constitution will be considered a broken build. 

### 3. Verification Step
In your first response of a development session, briefly state which files from the `/spec/constitution` directory you reviewed to confirm compliance (e.g., *"Verified against /constitution/roadmap.md"*).

### Project Intelligence Location
- **System Rules:** All global project rules, stack limitations, and branding constants are stored in `/spec/constitution/`.
- **Active Feature Documentation:** All current task details (spec, plan, and tasks) are located in `/spec/features/`.
- **Roadmap:** Always when finish a feature development, update the `/spec/roadmap.md` to know the state of the project
- **Always read these before starting a task.**
---

## New feature Flow

1. Create `features/NNN-feature-Name/` with the next free-number (`001`, `002`, …).
2. Write `spec.md`: what does it do, why and measurable acceptance criteria
3. Write `plan.md`: technique focus and decitions, respecting `constitution/tech-stack.md`.
4. Break down on `tasks.md` and track the progress.
5. Implement and enssurance (build/tests/lint o lo que defina la constitución).
6. update `constitution/roadmap.md` (Move the feature to "Done").
Keynote: Constitution rules; so if a feature compete with `mission.md` or `tech-stack.md`, feature is going back and redefine, not constitution
---


## Deployment

- Platform: Vercel
- Trigger: push to `main` branch auto-deploys
- Environment variable: `VITE_GITHUB_TOKEN` set in Vercel dashboard

---

## Out of Scope (v1)
- Blog / articles section
- Light mode toggle
- Automatic locale detection or languages beyond English/Spanish (manual EN/ES switcher only)
- CMS integration

---

## Pending

Nothing pending: Contact, CV download, Experience & Education and the EN/ES language switcher shipped in features 004, 005 and 005.5.

