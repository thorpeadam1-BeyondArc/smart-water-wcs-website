import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/site.config.ts';

export default defineConfig({
  site: siteConfig.url,
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
});
