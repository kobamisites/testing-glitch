<script>
  import Review from '@/components/ReviewV3.svelte'
  import Content, { metadata } from '@content/blocks/trust.md'

  export let title = metadata.title || 'Trust'
  export let reviews = metadata.reviews || []
</script>

<section class="trust standard-block">
  <h2>{title}</h2>
  <!-- <div class="mb-16">
    <Content />
  </div> -->
  <div class="reviews list layout">
    {#each reviews as review}
      <Review {review} />
    {/each}
  </div>
</section>

<style type="scss">
  .reviews {
    @screen md {
      @apply mt-16 grid grid-cols-3 gap-8;
    }
  }
  .reviews > :global(div) {
    @apply mb-20px;
    @screen md {
      @apply mb-0;
    }
  }
</style>
