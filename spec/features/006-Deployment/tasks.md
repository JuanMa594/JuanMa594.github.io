# Tasks List: 006-DeployGitHubPages Implementation

- [x] **Task 1: Pre-flight Audit & Local Build**
  - [x] Run `bun run build` locally and resolve TypeScript or linting issues.
  - [x] Run `bun run lint`.
  - [x] Verify image paths and asset references for static export compatibility.
  - [x] Verify section anchors (`#home`, `#about`, `#projects`, `#skills`, `#exp`/`#experience`, `#contact`).

- [x] **Task 2: Next.js Configuration Update**
  - [x] Update `next.config.mjs` with `output: 'export'` and `images: { unoptimized: true }`.
  - [x] Do not add `basePath`/`assetPrefix` (user page at the domain root).
  - [x] Add `public/.nojekyll`.

- [x] **Task 3: Static-Compatible Contact Form**
  - [x] Remove `src/app/api/contact/route.ts` and `src/lib/rateLimit.ts` (route handlers are not supported by static export).
  - [x] Post the form to `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (Formspree) and map the honeypot to `_gotcha`.
  - [x] Add a localized "form unavailable" fallback and remove `resend`.

- [x] **Task 4: GitHub Actions Workflow Creation**
  - [x] Create `.github/workflows/deploy.yml` with build and deployment steps.
  - [x] Ensure the Bun environment is set up inside the workflow.
  - [x] Pass `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` from repository variables at build time.

- [ ] **Task 5: Repository Settings & Live Validation** (requires repository owner actions)
  - [ ] Rename the repo to `JuanMa594.github.io`.
  - [ ] Enable GitHub Pages (source: GitHub Actions).
  - [ ] Add the `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` repository variable.
  - [ ] Push to `master` and verify the live portfolio deployment.
