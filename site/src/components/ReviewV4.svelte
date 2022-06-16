<script>
  import Image from '@/blocks/Image.svelte'
  import Stars from '@/components/Stars.svelte'
  import ReviewSource from '@/components/ReviewSource.svelte'

  export let Content = undefined
  export let metadata = undefined

  let {source, reviewer, rating, image} = metadata
</script>

<li class="review" >
  <Image source={image} text={reviewer} height="75" width="150" />

  <strong class="reviewer"> {reviewer} </strong>
  <div class="content">
    <Content />
  </div>

  <Stars stars={rating} title={`${rating} stars from ${source}`} />

  <ReviewSource {source} />
</li>