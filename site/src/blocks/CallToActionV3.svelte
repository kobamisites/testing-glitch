<script>
  import { metadata } from '@content/blocks/callToAction.md'
  import PhoneButton from '@/blocks/PhoneButton.svelte'
  import BookingButton from '@/blocks/BookingButton.svelte'

  export let title = metadata.title || 'Title'
</script>

<section class="call-to-action standard-block">
  <article class="matrix gap-y-4 md:gap-x-4">
    <h2 class="">{title}</h2>
    <PhoneButton class="outlined md:area-2/1 md:w-64 md:place-self-end" />
    <BookingButton class="md:area-2/2 md:w-64 md:place-self-start" />
  </article>
</section>
