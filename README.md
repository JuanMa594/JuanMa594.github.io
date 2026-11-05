# Portfolio

This project is a modern personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It showcases the developer's work, experience, skills, and contact information in a polished, responsive interface.

## Features

- Responsive layout for desktop and mobile
- Sections for projects, experience, skills, and contact
- Manual EN/ES language switcher with `localStorage` persistence and full content localization
- Fast rendering and modern UI with Next.js
- Easy deployment to Vercel or other Node.js-compatible hosting platforms

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

To prepare the app for deployment:

```bash
bun run build
```

To start the production server locally:

```bash
bun run start
```
For architecture and feature development, check the /spec folder.

## Environment variables

The contact form (`POST /api/contact`) sends email through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key (server-only) |
| `CONTACT_TO_EMAIL` | Inbox that receives the messages |
| `CONTACT_FROM_EMAIL` | Sender address (`onboarding@resend.dev` until a domain is verified) |
| `SITE_URL` | Production origin allowed to call the endpoint, no trailing slash |

Set the same variables in the Vercel dashboard for production.

## Deploying the project

### Vercel

- Push the repository to GitHub
- Import the project in Vercel
- Use the default Next.js build settings
- Deploy the project

### Other hosting platforms

- Build the app with `bun run build`
- Start it with `bun run start`
- Make sure the host supports Node.js applications

## Security note

Keep any API keys or sensitive values in environment variables and never commit them to the repository.

