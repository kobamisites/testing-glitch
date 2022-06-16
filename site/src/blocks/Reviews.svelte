<script>
  import ReviewContent, {metadata} from '@content/blocks/reviews.md'

  export let heading = metadata.heading || 'Reviews'
  export let subHeading = metadata.subHeading || 'What our customers say.'
  export let reviews = metadata.reviews || [
    {
      reviewer: 'Joe',
      content: 'It was great. I liked the way the made the bed. I am too lazy to make my bed and they make it. Asn anybody. I have never made my bed.',
      rating: '4.5',
      source: 'yelp'
    },
    {
      reviewer: 'Vlad',
      content: 'It was ok, but it could have been better. Next time do not let my dog out.',
      rating: '4',
      source: 'google'
    },
    {
      reviewer: 'Mike',
      content: 'Could not be better. I am willing to pay double for this level of service. I really am! Try me. I am not kidding. It is so worth it. My house has never been cleaner',
      rating: '5',
      source: 'facebook'
    },
  ]
</script>

<section class="reviews">
  <h2>{heading}</h2>
  <h3>{subHeading}</h3>
  <ReviewContent/>
  <ul class="reviews list layout flex gap-4">
    {#each reviews as review}
      <li>
        <div class="review">
          <div>
            <span class="stars inline-block" style="--rating: {review.rating};"></span>
          </div>
          <div class="text-left">{review.content}</div>
          <div class="text-lg italic text-">- {review.reviewer}</div>
          <div class="text-blue-400">{review.source}</div>
        </div>
      </li>
    {:else}
      no reviews yet
    {/each}
  </ul>
</section>

<style>
  .reviews.list.layout {
    @apply flex flex-col gap-4 p-10;
  }
  .review {
    @apply w-full p-8 shadow transition-all;
    @apply text-center text-xl text-theme-primary;
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
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>