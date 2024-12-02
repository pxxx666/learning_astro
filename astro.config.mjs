import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://pxxx666-learning-as-blog.deno.dev/',
  integrations: [tailwind()]
});