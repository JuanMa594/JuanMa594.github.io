# Implementation Plan: 006-DeployGitHubPages

## Phase 1: Pre-Deployment Code & Link Review
1. Run local build and lint (`bun run build`, `bun run lint`) to catch TypeScript errors, missing props or broken imports.
2. Verify all internal smooth-scroll anchor IDs match between the `Navbar` and the page sections (`#home`, `#about`, `#projects`, `#skills`, `#exp`, `#contact`), and add an `#experience` alias for the documented deep link.
3. Confirm static assets use paths compatible with the root URL (`next/image` static imports, `public/cv/*.pdf`).

## Phase 2: Next.js Configuration for Static Export
1. `next.config.mjs`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```
   No `basePath`/`assetPrefix`: the deployment target is the user page root.
2. Add `public/.nojekyll` so the build output bypasses Jekyll.
3. Test the export: `bun run build` must generate `out/index.html`, `out/.nojekyll` and `out/cv/`.

## Phase 3: Static-Compatible Contact Form
1. Delete the incompatible route handler (`src/app/api/contact/route.ts`) and its in-memory limiter (`src/lib/rateLimit.ts`).
2. Point `ContactForm.tsx` at `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (Formspree), sending `name`, `email`, `message`, `_subject` and `_gotcha` (mapped from the existing honeypot).
3. Keep `src/lib/contactValidation.ts`; add a localized "form unavailable" message for builds without the endpoint.
4. Remove the now-unused `resend` dependency and the old server variables from `.env.example` and docs.

## Phase 4: GitHub Actions Workflow Setup
1. Create `.github/workflows/deploy.yml` triggered by pushes to `master` and `workflow_dispatch`.
2. Steps: checkout → setup Bun → `bun install --frozen-lockfile` → `actions/configure-pages` → `bun run build` (with `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` from repository variables) → upload `out/` → `actions/deploy-pages`.
3. Permissions: `contents: read`, `pages: write`, `id-token: write`; concurrency group `pages`.

## Phase 5: Repository Settings & Live Validation
1. Rename the repo to `JuanMa594.github.io` (user page root, no basePath).
2. Enable GitHub Pages with source **GitHub Actions**.
3. Add `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` as an Actions repository variable.
4. Push `master`, then test the live URL, anchors, theme, EN/ES switcher, CV downloads and contact form.
