<script>
  import ContentWithImage from '@/blocks/ContentWithImage.svelte'
  import { metadata } from '@content/blocks/solution.md'
  import BlockContent from '@content/blocks/solution.md'
  import BookingButton from '@/blocks/BookingButton.svelte'

  export let title = metadata.title || 'Solution'
  export let image = metadata.image || 'Image Link'
  export let content = BlockContent
</script>


<section class="">
  <ContentWithImage {title} {image} {content} imagePosition="last"/>
</section>

<style type="scss">
  section {
    @apply flex flex-col-reverse;
    @screen lg {
      @apply grid grid-cols-2 place-items-center;
    }
  }
</style>