import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://knn.net.in', // UPDATE THIS to your actual domain
  integrations: [
    vue({ appEntrypoint: '/src/pages/_app.ts' }),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static',
  vite: {
    ssr: {
      external: ['gsap'],
    },
  },
});
