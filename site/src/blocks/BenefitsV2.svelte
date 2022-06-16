<script>
  import ContentWithImage from '@/blocks/ContentWithImage.svelte'
  import BlockContent, { metadata } from '@content/blocks/benefits.md'
  import BookingButton from '@/blocks/BookingButton.svelte'

  export let title = metadata.title || 'Benefits'
  export let image = metadata.image || 'Image Link'
  export let content = BlockContent
</script>


<section class="">
  <ContentWithImage {title} {image} {content} imagePosition="first" />
</section>

<style type="scss">
  section {
    @apply flex flex-col;
    @screen lg {
      @apply grid grid-cols-2 place-items-center;
    }
  }
</style>