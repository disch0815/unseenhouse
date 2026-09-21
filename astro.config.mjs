// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://unseenhouse.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
});
