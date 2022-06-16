<script>
  import Content, { metadata } from '@content/blocks/trust.md'
  import Icon from '@/blocks/Icon.svelte'

  export let title = metadata.title || 'Trust'
  export let reviews = metadata.reviews || []
</script>


<section class="trust standard-block">
  <h2>{title}</h2>
  <article class="content mb-8 block-content">
    <Content />
  </article>
  <ul class="reviews">
    {#each reviews as review}
      <li class="review">
        <div class="reviewer flex p-0 m-0 mb-8 items-center">
          {#if review.image}
            <img src="{review.image}" alt="{review.reviewer}" height="50" width="50" class="rounded-full inline-block">
          {/if}
          <div>
            <h3 class="text-theme-primary text-xl pl-4">
              {review.reviewer},
              <span class="text-gray-700 italic">{review.area}</span>
            </h3>
          </div>
        </div>
        <div class="content prose">{review.content}</div>
        {#if review.rating}
          <div class="text-center my-4">
            <div class="stars" style="--rating: { review.rating };" aria-label="{ review.rating} rating"></div>
          </div>
        {/if}
        {#if review.source}
          <div class="float-right absolute bottom-0 right-0 p-4">
            <Icon name={review.source} height="30" width="30"/>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</section>

<style type="scss">
  .block-content {
    @screen md {
      @apply flex p-12;
    }
  }
  section {
    @apply text-xl;
  }
  .reviews {
    @apply list-none p-0 m-0;
    @screen md {
      @apply grid grid-cols-3 gap-8;
    }
  }
  .review {
    //@apply w-full p-8 transition-all bg-theme-light border-3 border-gray-200 mb-0;
    @apply p-4 mb-4 rounded-lg border-4 border-gray-200 bg-gray-100 relative;
  }
  .stars {
    --star-size: 24px;
    --percent: calc(var(--rating) / 5 * 100%);
    display: inline-block;
    font-size: 30px;
    font-family: Times, monospace;
    line-height: 1;
  }
  .stars:before {
    --star-background: orange;
    --star-color: white;
    content: '★★★★★';
    letter-spacing: 3px;
    //background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    //background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>