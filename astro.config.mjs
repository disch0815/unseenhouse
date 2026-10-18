// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://unseenhouse.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      serialize(item) {
        // Sprach-Startseiten werden als Verzeichnis-Index ausgeliefert
        item.url = item.url.replace(/\/(it|en)$/, '/$1/');
        return item;
      },
    }),
  ],
  build: {
    format: 'file',
  },
});
