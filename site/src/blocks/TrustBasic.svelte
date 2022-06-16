<script>
  import { metadata } from '@content/blocks/trust.md'
  import BlockContent from '@content/blocks/trust.md'

  export let title = metadata.title || 'Trust'
  export let image = metadata.image || 'image Link'
  export let reviews = metadata.reviews || []
</script>


<section class="trust block">
  <div class="text-center mb-8">
    <h2 class="">{title}</h2>
    <hr class="hr hr-sm">
  </div>
  <article class="content mb-8">
    <BlockContent />
    <!-- <div class="trust-image">
      <img src="{image}" alt="results you can trust">
    </div> -->
  </article>
  <ul class="reviews">
    {#each reviews as review}
      <li class="review">
        <span class="text-3xl">{review.reviewer}</span>
        <div class="text-left">{review.content}</div>
        <span class="stars inline-block m-auto" style="--rating: {review.rating};"> </span>
      </li>
    {/each}
  </ul>
</section>

<style>
  :global(.trust.block .content) {
    @apply text-white;
    @screen md {
      @apply flex p-12;
    }
  }
  h2 {
    @apply text-white;
  }
  section {
    @apply bg-theme-secondary text-xl;
  }
  .reviews {
    @apply list-none p-0 m-0;
    @screen md {
      @apply grid grid-cols-3 gap-8;
    }
  }
  .review {
    @apply w-full p-8 transition-all bg-theme-light border-3 border-gray-200 mb-0;
  }
  /* .review img {
    height: 50px;
    display: block;
    margin: auto auto 20px auto;
  } */
  .stars {
    --star-size: 24px;
    --percent: calc(var(--rating) / 5 * 100%);
    display: inline-block;
    font-size: 30px;
    font-size: var(--star-size);
    font-family: Times, monospace;
    line-height: 1;
  }
  .stars:before {
    --star-background: orange;
    --star-color: white;
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>