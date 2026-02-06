// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://seanduffie.vercel.app/",
  integrations: [svelte(), react(), sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwind()],
    build: {
      assetsInlineLimit: 20480, // 20kb in bytes
    }
  },
});