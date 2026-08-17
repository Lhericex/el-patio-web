// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://el-patio-web-gamma.vercel.app',
  integrations: [sitemap()],
});
