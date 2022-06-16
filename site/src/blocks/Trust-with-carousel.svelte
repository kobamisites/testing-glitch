<script>
  import ReviewContent, {metadata} from '@content/blocks/trust.md'

  export let reviews = metadata.reviews || []
  export let image = metadata.image || 'image Link'
  export let currentReview = 1

  function move(val) {
    const len = reviews.length - 1
    reviews = reviews.reduce((acc, i, index) => {
      const num = index + val
      const idx = num < 0 ? len : num > len ? 0 : num
      acc[idx] = i
      return acc
    }, new Array(reviews.length).fill({}))
  }

  let width = 0
  $: mdScreen = width > 640
</script>

<svelte:window bind:innerWidth={width} />

<section class="standard-block">
  <article class="flex justify-center">
    <ul class="reviews">
      {#if mdScreen}
        <button class="" on:click={() => move(-1)}>previous</button>
      {/if}
      {#each reviews as review, index}
        <li>
          <div class="review review-{index}"
          class:current={index === currentReview}
          class:previous={index === currentReview - 1}
          class:next={index === currentReview + 1}
          >
            <div>
              <span class="stars inline-block" style="--rating: {review.rating};"></span>
            </div>
            <div class="">{review.content}</div>
            <div class="text-lg italic text-">- {review.reviewer}</div>
            <div class="text-blue-400">{review.source}</div>
          </div>
        </li>
      {/each}
      {#if mdScreen}
        <button class="absolute bottom-0 left-50" on:click={() => move(1)}>next</button>
      {/if}
    </ul>
    <img width="500" class="hidden md:block" src={image} alt="">
  </article>
</section>

<style>
  .reviews {
    @apply relative w-400 flex flex-col gap-4;
    @screen md {
      @apply p-10;
    }
  }
  .review {
    /* top: 50%;
    right: 50%; */
    /* transform: translate(-50%, -50%); */
    @apply w-full p-8 shadow transition-all;
    @apply text-center text-xl text-theme-primary;
    @screen md {
      @apply absolute;
      @apply opacity-40;
      transform: scale(.8);
    }
  }
  .previous {
    @screen md {
      margin-top: -100px;
    }
  }
  .next {
    @screen md {
      margin-top: 100px;
    }
  }
  .current {
    @apply bg-white opacity-100;
    transform: scale(1);
    margin-top: 0;
    z-index: 100;
  }
  .stars {
      --star-size: 48px;
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