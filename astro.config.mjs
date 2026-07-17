import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://13270131998.github.io',
  integrations: [react()],
  output: 'static',
  build: {
    assets: 'assets',
  },
});
