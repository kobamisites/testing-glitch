<script>
  import Review from '@/components/Review.svelte'
  import BlockContent, { metadata } from '@content/blocks/trust.md'

  export let title = metadata.title || 'Trust'
  export let reviews = metadata.reviews || []
</script>

<section class="standard-block">
  <h2>{title}</h2>
  <div class="reviews">
    {#each reviews as review}
      <Review {review}>
        {review.content}
      </Review>
    {/each}
  </div>
</section>

<style type="scss">
  .reviews {
    @screen md {
      @apply grid grid-cols-3 gap-8;
    }
  }
  .reviews > :global(div) {
    @apply mb-20px;
    @screen md {
      @apply mb-0;
    }
  }
</style>
