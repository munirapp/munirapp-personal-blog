import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      wrap: true,
    },
  },
})
