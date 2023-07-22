import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import { mermaid } from './src/plugins/mermaid.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime, mermaid],
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      wrap: true,
    },
  },
})
