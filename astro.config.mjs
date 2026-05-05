import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://reframemagazine.jp',
  adapter: cloudflare(),
  integrations: [mdx()],
  output: 'static',
});
