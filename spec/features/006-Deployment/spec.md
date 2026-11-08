# Specification: 006-DeployGitHubPages

## 1. Overview
The `006-DeployGitHubPages` feature covers the final code review, bug fixing, performance validation, and the automated production deployment of the portfolio to GitHub Pages using static export (`output: 'export'`).

## 2. Technical Strategy for Next.js on GitHub Pages
- **Static Export Mode:** Since GitHub Pages does not support Node.js server-side runtimes, Next.js must be configured for static HTML export (`output: 'export'`).
- **No Base Path:** The site is published as a **user page** at `https://juanma594.github.io/`, so `basePath`/`assetPrefix` are not used. The repository must be named `JuanMa594.github.io`.
- **Static-compatible contact form:** Next.js route handlers are not available in a static export. The existing `POST /api/contact` + Resend implementation is replaced by a **Formspree** endpoint supplied at build time through `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`.
- **Automation:** GitHub Actions workflow (`.github/workflows/deploy.yml`) builds with Bun and deploys the `out/` artifact to GitHub Pages on pushes to `master`.

## 3. Functional & Deployment Requirements
### 3.1 Pre-deployment Audit
- Verify all features (`001-MainLayout`, `002-AboutMe`, `003-ProjectsSkills`, `004-ExperienceEducation`, `005-Contact`, `005.5-Language`) are fully responsive and bug-free.
- Check that all internal links, anchors (`#about`, `#projects`, `#skills`, `#exp`/`#experience`, `#contact`), and language switchers operate correctly.
- Ensure images utilize proper static loading paths compatible with static site generation (`next/image` with `unoptimized: true`; `public/` assets served from the root URL).

### 3.2 Configuration Files
- Update `next.config.mjs` with `output: 'export'` and `images: { unoptimized: true }`.
- Add a `.nojekyll` file in `public/` so it is copied into the build output and bypasses Jekyll processing.
- Keep `public/cv/*.pdf` paths absolute (`/cv/...`) because the site is served from the domain root.

### 3.3 Contact Form on a Static Host
- Remove `src/app/api/contact/route.ts` and `src/lib/rateLimit.ts`; static export cannot ship route handlers.
- Submit the form client-side to Formspree using `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`, mapping the existing `website` honeypot to Formspree's `_gotcha`.
- Keep the shared client-side validation (`src/lib/contactValidation.ts`).
- If the endpoint is missing, show a localized "form unavailable" toast while the direct email link keeps working.

## 4. Acceptance Criteria
- [x] `next.config` configured successfully for static export without build errors (`out/` is generated).
- [x] GitHub Actions workflow builds the project with Bun and deploys the `out/` artifact to GitHub Pages.
- [x] Build and lint pass locally (`bun run build`, `bun run lint`).
- [x] Contact form has no server route and uses a public Formspree endpoint variable.
- [ ] Live site loads correctly on GitHub Pages with working styles, assets, animations, language switching and contact form (requires repo rename, Pages activation, repository variable and pushing `master`).
