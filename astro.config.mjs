import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://marinacosta.ca',

  build: {
    assets: 'assets',
  },

  output: "hybrid",
  adapter: cloudflare()
});