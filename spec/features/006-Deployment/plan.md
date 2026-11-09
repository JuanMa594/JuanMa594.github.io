# Implementation Plan: 006-DeployGitHubPages

## Phase 1: Pre-Deployment Code & Link Review
1. Run local build test (`bun run build`) to catch any TypeScript errors, missing props, or broken imports.
2. Verify all internal smooth-scroll anchor IDs match between the `Navbar` and the page sections.

## Phase 2: Next.js Configuration for Static Export
1. Modify `next.config.ts` (or `next.config.mjs`) to include:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true, // Required for static export unless using an external loader
     },
     // Uncomment if deploying to a repository subpath:
     // basePath: '/your-repo-name',
     // assetPrefix: '/your-repo-name/',
   };
   ```
2. Test local static export output (out/ folder generation).

## Phase 3: GitHub Actions Workflow Setup
1. Create .github/workflows/deploy.yml configured to trigger on pushes to main.

2. Configure steps: Checkout code -> Setup Bun/Node -> Install dependencies (bun install) -> Build (bun run build) -> Deploy to GitHub Pages.

## Phase 4: Final Validation on GitHub Pages
1. Push changes to GitHub repository.

2. Verify GitHub Pages settings point to the gh-pages branch or GitHub Actions source.

3. Test live URL performance and interactivity.