<script>
  import Review from '@/components/ReviewV4.svelte'
  import Content, { metadata } from '@content/blocks/trust.md'

  export let title = metadata.title || 'Trust'
  let subBlocks = Object.values(import.meta.globEager('../../content/blocks/reviews/*.md'))
</script>

<section class="trust standard-block">
  <h2>{title}</h2>
  <!-- <div class="mb-16">
    <Content />
  </div> -->
  {#if subBlocks?.length}
    <ol class="reviews list layout sub-blocks">
      {#each subBlocks as { default: block, metadata = { } }, index}
        <Review Content={block} {metadata} />
      {/each}
    </ol>
  {/if}
</section>