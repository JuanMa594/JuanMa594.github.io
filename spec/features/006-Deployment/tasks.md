### 3. `spec/features/006-DeployGitHubPages/tasks.md`

```markdown
# Tasks List: 006-DeployGitHubPages Implementation

- [ ] **Task 1: Pre-flight Audit & Local Build**
  - [ ] Run `bun run build` locally and resolve any TypeScript or linting warnings.
  - [ ] Verify image paths and asset references for static export compatibility.

- [ ] **Task 2: Next.js Configuration Update**
  - [ ] Update `next.config` with `output: 'export'` and `images: { unoptimized: true }`.
  - [ ] Add `basePath` and `assetPrefix` if deploying to a subpath repository.

- [ ] **Task 3: GitHub Actions Workflow Creation**
  - [ ] Create `.github/workflows/deploy.yml` with automated build and deployment steps.
  - [ ] Ensure Bun environment is correctly set up inside the workflow yml.

- [ ] **Task 4: Repository Settings & Live Validation**
  - [ ] Push code changes to GitHub repository `main` branch.
  - [ ] Enable GitHub Pages in repository settings (source: GitHub Actions).
  - [ ] Verify the live portfolio deployment loads successfully.
```