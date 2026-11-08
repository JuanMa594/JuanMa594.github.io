/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves static files only, so the app is exported as HTML/CSS/JS into out/.
  output: 'export',
  images: {
    // The Next.js image optimizer needs a server; static export ships the original files.
    unoptimized: true,
  },
};

export default nextConfig;
