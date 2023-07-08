---
title: '(Part 1) A Deep Dive into the Technology Behind My Blog: Astro'
slug: 07-03-deep-dive-technology-behind-my-blog-part-1
description: Similar to an iceberg, the world of technology is considerably larger on the inside than it is on the outside. A well-designed personal blog may seem simple on the surface, but it is actually powered by a complex modern technologies that operate together seamlessly.
date: 2023-07-03
cover: https://images.unsplash.com/photo-1543470373-e055b73a8f29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80
---

Similar to an iceberg, the world of technology is considerably larger on the inside than it is on the outside. A well-designed personal blog may seem simple on the surface, but it is actually powered by a complex modern technologies that operate together seamlessly. So on this article, we will deep dive into the technology behind my personal blog, revealing the `underwater` part of the my blog's iceberg.

## Astro Highlight

![astro build](https://img001.prntscr.com/file/img001/0mHEyLBVTMSj1y9fDhsZCg.png)

The backbone of my personal blog was build with [Astro](https://astro.build/). Astro is an all-in-one web framework for building fast, content-focused websites. Base on [State of JavaScript 2022 survey](https://2022.stateofjs.com/en-US/awards/), the "Most Write-Ins" award went to Astro. This means that when respondents were asked about the technologies they use, Astro was the most commonly written-in answer, indicating high usage and popularity among the respondents, even though it was not listed as one of the predefined answer options. This framework comes packed with a host of unique features:

1. **Component Islands**: This new web architecture allows for building faster websites. Astro Islands (aka Component Islands) are a pattern of web architecture pioneered by Astro. The idea of `islands architecture` was first coined by Etsy’s frontend architect Katie Sylor-Miller in 2019. You can read more about it on [here](https://docs.astro.build/en/concepts/islands/) or [here](https://jasonformat.com/islands-architecture/).

```astro
---
// Example: Use a static React component on the page, without JavaScript.
import MyReactComponent from '../components/MyReactComponent.jsx'
---

<!-- 100% HTML, Zero JavaScript loaded on the page! -->
<MyReactComponent />
```

```astro
---
// Example: Use a dynamic React component on the page.
import MyReactComponent from '../components/MyReactComponent.jsx'
---

<!-- This component is now interactive on the page! 
     The rest of your website remains static and zero JS. -->
<MyReactComponent client:load />
```

2. **Server-first API design**: This moves the expensive hydration process off of your users’ devices. The term `Server-first API design` refers to an architectural style in which the majority of the heavy processing or data fetching occurs on the server side prior to the webpage being sent to the user's device (client side). In contrast, client-first design does much of the processing or data retrieval on the client side, after the webpage has loaded.

3. **Zero JS, by default**: There is no JavaScript runtime overhead to slow you down. In essence, "Zero JS, by default" signifies that Astro's default behavior is to generate static HTML and CSS pages that do not contain any JavaScript. This keeps pages as small as possible, and users just download the amount of JavaScript required for the page to work.

4. **Edge-ready**: You can deploy anywhere, even on a global edge runtime like Deno or Cloudflare. The phrase "Edge-ready" refers to Astro's ability to develop and deploy websites that can be directly served from edge servers. Astro-generated sites are particularly well-suited for edge deployment due to their static nature. Just FYI, this blog was deployed on [Github pages](https://pages.github.com/). You can see this [link](https://docs.astro.build/en/guides/deploy/) to see another platform that support to deploy astro application.

5. **Customizable**: Choose from Tailwind, MDX, and over 100 other integrations. Astro integrations add new functionality and behaviors for your project with only a few lines of code. You can write a custom integration yourself, use an official integration, or use integrations built by the community. Click [here](https://docs.astro.build/en/guides/integrations-guide/) to see list of official Astro's integrations.

```js
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// example configuration to integrate astro with talwind css and mdx files
export default defineConfig({
  integrations: [mdx(), tailwind()],
})
```

6. **UI-agnostic**: Astro supports React, Preact, Svelte, Vue, Solid, Lit and more​​. You can use Astro with popular UI libraries like React, Vue, or Svelte, or with lesser-known libraries. This gives developers a lot of flexibility and freedom to choose the tools that they are most comfortable with or that are most appropriate for their specific use case.

## Other Benefits

### Powerful SSG Feature

I'm using SSG mode to build this personal blog. With Astro's SSG capabilities, I can optimize my website for better performance and SEO. Astro support basic SSG feature like `Static Route` with directory under `src/pages/` that automatically turn `.astro`, `.md` and `.mdx` files become pages on your website. Astro also support `Dynamic Route` that specify dynamic route parameters in its filename to generate multiple, matching pages. For example, `src/pages/authors/[author].astro` generates a bio page for every author on your blog. `author` becomes a parameter that you can access from inside the page. For using dynamic route features on SSG Mode, we must must export a getStaticPaths() that returns an array of objects with a params property. Each of these objects will generate a corresponding route. It's because all routes must be determined at build time.

This example code with file `src/pages/dogs/[dog].astro` will generate three pages: `/dogs/clifford`, `/dogs/rover`, and `/dogs/spot`, each displaying the corresponding dog name.

```astro
---
export function getStaticPaths() {
  return [{ params: { dog: 'clifford' } }, { params: { dog: 'rover' } }, { params: { dog: 'spot' } }]
}

const { dog } = Astro.params
---

<div>Good dog, {dog}!</div>
```

Another example code with mulitiple params property on file `src/pages/[lang]/[version]/info.astro` will generate 2 pages: `/en/v1/info` and `/fr/v2/info`.

```astro
---
export function getStaticPaths() {
  return [{ params: { lang: 'en', version: 'v1' } }, { params: { lang: 'fr', version: 'v2' } }]
}

const { lang, version } = Astro.params
---

...
```

Astro also supports built-in pagination for large collections of data that need to be split into multiple pages. Astro will generate common pagination properties, including previous/next page URLs, total number of pages, and more.

Paginated route names should use the same `[bracket]` syntax as a standard dynamic route. For instance, the file name `/astronauts/[page].astro` will generate routes for `/astronauts/1`, `/astronauts/2`, etc, where `[page]` is the generated page number.

You can use the `paginate()` function to generate these pages for an array of values like so:

```astro
---
export async function getStaticPaths({ paginate }) {
  const astronautPages = [
    {
      astronaut: 'Neil Armstrong',
    },
    {
      astronaut: 'Buzz Aldrin',
    },
    {
      astronaut: 'Sally Ride',
    },
    {
      astronaut: 'John Glenn',
    },
  ]
  // Generate pages from our array of astronauts, with 2 to a page
  return paginate(astronautPages, { pageSize: 2 })
}
// All paginated data is passed on the "page" prop
const { page } = Astro.props
---

<!--Display the current page number. Astro.params.page can also be used!-->
<h1>Page {page.currentPage}</h1>
<ul>
  <!--List the array of astronaut info-->
  {page.data.map(({ astronaut }) => <li>{astronaut}</li>)}
</ul>
```

The `page` props above will be contain many useful properties that help you to build native pagination on your website, this the complete properties reference:

```ts
interface Page<T = any> {
  /** result */
  data: T[]
  /** metadata */
  /** the count of the first item on the page, starting from 0 */
  start: number
  /** the count of the last item on the page, starting from 0 */
  end: number
  /** total number of results */
  total: number
  /** the current page number, starting from 1 */
  currentPage: number
  /** number of items per page (default: 25) */
  size: number
  /** number of last page */
  lastPage: number
  url: {
    /** url of the current page */
    current: string
    /** url of the previous page (if there is one) */
    prev: string | undefined
    /** url of the next page (if there is one) */
    next: string | undefined
  }
}
```

### Seamless Integration with Markdown Files

Astro includes built-in support for standard Markdown files that can also include `frontmatter YAML` to define custom metadata such as a title, description, and tags. Let's say you have markdown file like this:

```md
---
title: Astro in brief
author: Himanshu
description: Find out what makes Astro awesome!
---

This is a post written in Markdown.
```

you can matching and extract the metadata with `Astro.glob()` function

```astro
---
export async function getStaticPaths() {
  const posts = await Astro.glob('./**/*.md')
  return posts.map((item) => ({
    params: { slug: item.frontmatter.title.toLowerCase().split(' ').join('') },
    props: {
      frontmatter: item.frontmatter,
      Content: item.Content,
    },
  }))
}

const { frontmatter, Content } = Astro.props
---

<h1>{frontmatter.title}</h1>
<h2>Post author: {frontmatter.author}</h2>
<p>{frontmatter.description}</p>
<!-- Markdown content is injected here -->
<Content />
```

For code highlighting library, by default astro have that built-in feature with [Shiki](https://github.com/shikijs/shiki). You just need to configure it on you astro configuration files.

```js
...
export default defineConfig({
  ...
  markdown: {
    ...
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      wrap: true,
    },
    ...
  },
})
```

## See More

- `👉 (You are here)` A Deep Dive into the Technology Behind My Blog (Part 1): Astro
- [A Deep Dive into the Technology Behind My Blog (Part 2): Giscus](https://munirapp.github.io/blog/2023/07-06-deep-dive-technology-behind-my-blog-part-2/)
- A Deep Dive into the Technology Behind My Blog (Part 3): Algolia Search

## References

[https://astro.build/](https://astro.build/)

[https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/)

[https://jasonformat.com/islands-architecture/](https://jasonformat.com/islands-architecture/)
