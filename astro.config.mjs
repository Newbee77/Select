import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://selectsociety.se',
  integrations: [
    sitemap({
      // 404 pages carry <meta name="robots" content="noindex"> and must not
      // appear in the sitemap either — filter them out by path.
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
