import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: import.meta.env.PUBLIC_HOST_NAME as string,
  integrations: [mdx(), sitemap(), tailwind()],
});
