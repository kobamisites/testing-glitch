<script>
  import Icon from '@/blocks/Icon.svelte'
  export let review

  function matchIconWithSource(source) {
    return {
      google: 'google',
      facebook: 'facebook',
      yelp: 'yelp',
      jobber: 'jobber'
    }[source?.toLowerCase()]
  }

  let icon = matchIconWithSource(review.source)
</script>

<div class="review">
  <Icon width="38" height="29" classes="absolute -top-15px right-40px" name="quote" />
  {#if review.image}
    <img class="mb-4" src="{review.image}" alt="{review.reviewer}" height="75" width="150">
  {/if}
  <strong class="reviewer">
    {review.reviewer}
  </strong>
  <div class="review-content">
    <slot>
      {review.content}
    </slot>
  </div>
  {#if review.rating}
    <div class="text-center" title="{review.rating} stars on {review.source}">
      <span class="stars inline-block" style="--rating: {review.rating};" />
    </div>
  {/if}

{#if icon || review.source}
  <div title={review.source} class="source">
    {#if icon}
      <Icon name={icon} />
    {:else if review.source}
      <div class="text-blue-400">{review.source}</div>
    {/if}
  </div>
{/if}
</div>

<style type="scss">
  .review {
    @apply relative text-left border-4 rounded-xl py-8 px-4;
    @apply bg-white border-gray-200;
  }

  .rating {
    @apply text-center mb-4 text-theme-primary;

    svg {
      display: inline-block;
    }
  }

  .reviewer {
    @apply text-left font-bold text-lg mb-2 text-gray-700;
  }

  .review-content {
    @apply mb-8;
  }
  .review-content :global(p) {
    font-size: 1rem;
  }
  .quote {
    @apply absolute -top-15px right-40px;
  }
  .source {
    @apply absolute bottom-10px right-10px;
  }
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
