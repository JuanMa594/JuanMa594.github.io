# Portfolio

This project is my modern personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It showcases my work, experience, skills, and contact information in a polished, responsive interface. It is exported as a static site and deployed to GitHub Pages.

## Features

- Responsive layout for desktop and mobile
- Sections for projects, experience, skills, and contact
- Manual EN/ES language switcher with `localStorage` persistence and full content localization
- Fast static rendering with Next.js static export (`output: 'export'`)
- Automated deployment to GitHub Pages through GitHub Actions

## Localization

English is the default language. The header's `EN` / `ES` toggle updates the interface and section content instantly and stores the choice in `localStorage` under the `language` key. The root `<html>` element is rendered with `translate="no"` (plus a Google `notranslate` meta tag) so browser translation tools cannot rewrite the animated DOM.

- UI copy lives in `src/data/locales/en.ts` and `src/data/locales/es.ts`.
- Section content (bio, projects, gallery, skills, experience and education) lives next to its data using the `Localized<T>` type from `src/types/i18n.ts`.
- Terminal commands and help stay in English by design; only `-info` summaries follow the active language.
- The `Download CV` buttons pick the PDF from the active language via `CV_PATHS` in `src/data/contact.ts`: `public/cv/JuanMa-CV.pdf` (EN) and `public/cv/JM CV (Spanish).pdf` (ES).

## Getting started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run the development server:
   ```bash
   bun run dev
   ```

3. Open the app in your browser:
   ```text
   http://localhost:3000
   ```

## Production build

GitHub Pages cannot run a Node.js server, so the project builds to static files in `out/`:

```bash
bun run build
```

To preview the exported site locally:

```bash
bun run preview
```

`next start` is not available with static export. Serve the `out/` folder with any static file server instead.

For architecture and feature development, check the `/spec` folder.

## Environment variables

The contact form posts to a [Formspree](https://formspree.io) form endpoint. Create a form in Formspree, then copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Public Formspree endpoint, e.g. `https://formspree.io/f/xxxxxxxx` |

The value is public by design: it is inlined into the static bundle at build time and is visible in the browser. No private API key is needed or shipped. If the variable is missing, the form shows a localized "contact form unavailable" message while the direct email link still works.

Set the same value as a **repository variable** in GitHub (`Settings > Secrets and variables > Actions > Variables`) so the GitHub Actions build can inline it. The value is not a secret.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the static export and publishes it with GitHub Pages whenever `master` is pushed (it can also be run manually with `workflow_dispatch`).

1. **User page URL:** rename the repository to `JuanMa594.github.io` so the site is served at `https://juanma594.github.io/`. A project repository (`portfolio`) would be served under `/portfolio/` and require `basePath`/`assetPrefix` in `next.config.mjs`; the current config assumes the root URL.
2. In GitHub, open **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**.
3. In **Settings > Secrets and variables > Actions > Variables**, add `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` with the Formspree endpoint.
4. Push to `master` (or run the workflow manually). The `build` job generates `out/` and the `deploy` job publishes it.
5. Open `https://juanma594.github.io/` and verify styles, images, animations, anchors (`#about`, `#projects`, `#skills`, `#exp`/`#experience`, `#contact`), the EN/ES switcher and the CV downloads.

`public/.nojekyll` is copied into the export so GitHub Pages serves the generated asset folders as-is.

## Security note

Keep any sensitive values in environment variables or CI secrets and never commit them to the repository. Only public, `NEXT_PUBLIC_*` values belong in the static bundle.
