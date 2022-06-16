<script>
  import ContentWithImage from '@/components/ContentWithImageV2.svelte'
  import Content, { metadata } from '@content/blocks/mission.md'
  import BookingButton from '@/blocks/BookingButton.svelte'

  export let title = metadata.title || ''
  export let image = metadata.image || 'Image Link'
  export let content = Content
  export let useButton = metadata.bookingButton || false
</script>


<section class="mission">
  <ContentWithImage {title} {image} {content} imagePosition="last">
    {#if useButton}
      <BookingButton />
    {/if}
  </ContentWithImage>
</section>

<style type="scss">
  section {
    @apply flex flex-col;
    @screen lg {
      @apply grid grid-cols-2 place-items-center;
    }
  }
</style>