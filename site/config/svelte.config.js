import { mdsvex } from 'mdsvex'
import contentProcessor from '../remark-content-processor'
import htmlProcessor from '../rehype-content-processor'
import customLayouts from '../content/settings/layouts.json'

const isProduction = process.env.NODE_ENV === 'production'

const layout =
  {
    pages: './src/layouts/pages.svelte',
    page: './src/layouts/pages.svelte',
    pageWithSidebar: './src/layouts/pageWithSidebar.svelte',
    blog: './src/layouts/blogPage.svelte',
    servicesPage: './src/layouts/servicesPage.svelte',
    ...customLayouts
  }

export default {
  hot: !isProduction,
  emitCss: true,
  extensions: ['.md', '.svx', '.svelte'],
  preprocess: [
    mdsvex({
      remarkPlugins: [contentProcessor],
      rehypePlugins: [htmlProcessor],
      extensions: ['.md', '.svx', '.svelte'],
      layout
    }),
  ],
}
