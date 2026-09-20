import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://echo-astro-template.vercel.app',
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Funnel Sans',
      cssVariable: '--font-funnel-sans',
      weights: ['300', '400', '500', '600', '700', '800'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
