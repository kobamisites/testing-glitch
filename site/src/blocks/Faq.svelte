<script>
  import BlockContent, { metadata } from '@content/blocks/faq.md'
  import {structured} from '@/core/actions'

  export let title = metadata.title || 'FAQ'
  export let structure = metadata.structure || 'div'
</script>

<section class="block faq">
  <h2 class="mb-8">{title}</h2>
  <article use:structured={{structure}}>
    <BlockContent/>
  </article>
</section>

<style lang="scss">
  article {
    @apply bg-gray-100 p-4 md:p-16;
  }
  :global(.block.faq h3) {
    @apply mb-4 mt-8;
    @apply text-xl;
  }
  :global(.block.faq h3:first-child) {
    margin-top: 0;
  }
  @screen md {
    article {
      column-count: 2;
      column-gap: 4rem;
    }
  }
</style>