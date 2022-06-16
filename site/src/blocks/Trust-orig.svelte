<script>
  import { metadata } from '@content/blocks/trust.md'
  import BlockContent from '@content/blocks/trust.md'

  export let title = metadata.title || 'Trust'
  export let image = metadata.image || 'image Link'
  export let reviews = metadata.reviews || []
</script>


<section class="standard-block">
  <div class="text-center mb-8">
    <h2 class="">{title}</h2>
    <hr class="hr hr-sm">
  </div>
  <article>
    <div class="trust-image">
      <img src="{image}" alt="results you can trust">
    </div>
    <ul class="reviews">
      {#each reviews as review}
        <li class="review">
          <img src="{review.image}" height="50" alt="logo">
          <blockquote>
            {review.content}
            <span class="not-italic text-gray-600">- {review.reviewer}</span>
          </blockquote>
        </li>
      {/each}
    </ul>
  </article>
</section>

<style>
  h2 {
    @apply text-white;
  }
  section {
    @apply bg-theme-secondary text-white;
  }
  article {
    /* @apply md:grid md:grid-cols-2 md:gap-8; */
  }
  .reviews {
    @apply flex flex-col gap-4;
    @apply italic;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .review {
    @apply w-full p-8 transition-all bg-gray-100;
    @apply text-center text-xl;
    border: 3px solid theme('colors.gray.200');
  }
  .review img {
    height: 50px;
    display: block;
    margin: auto auto 20px auto;
  }
</style>