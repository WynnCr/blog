// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployed at http://iamrit.me/blog/ (custom domain, project page under /blog).
// If you ever rename the repo or move to the domain root, update both of these.
export default defineConfig({
  site: 'https://iamrit.me',
  base: '/blog/',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
