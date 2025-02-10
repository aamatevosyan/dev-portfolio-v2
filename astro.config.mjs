// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import playformCompress from "@playform/compress";

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://matevosyan.am',
  integrations: [tailwind(), astroIcon({
    include: {
      mdi: ["*"],
      'ri': ['*'],
      'simple-icons': ['*'],
    },
  }), playformCompress({
    CSS: false,
    Image: false,
    Action: {
      Passed: async () => true,   // https://github.com/PlayForm/Compress/issues/376
    },
  }), sitemap()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    isr: true,
  })
});