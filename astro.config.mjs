import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';

// Static output with real per-page HTML: the business is found through
// local search, so the markup must exist without JavaScript. React and
// Motion hydrate on top of it.
export default defineConfig({
  site: 'https://ishepelev0-png.github.io',
  base: '/masage',
  outDir: './docs',
  trailingSlash: 'ignore',
  build: { format: 'file', assets: 'assets' },
  integrations: [react()],
  vite: { plugins: [tailwind()] },
});
