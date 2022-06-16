<script>
  import Content, {metadata} from '@content/blocks/features.md'
  import Columns from '@/components/Columns.svelte'
  import BookingButton from '@/blocks/BookingButton.svelte'

  export let title = metadata.title || 'title'
  export let  bookingButton = metadata.bookingButton || false
  export let columns = metadata.columns || [
    {
      image: "https://via.placeholder.com/270",
      content: "Are you ready to discover the automatic selling machine that can double, triple or even quadruple your cleaning business? For FREE?",
      link: "/link"
    }
  ]
</script>

<section class="features py-8 lg:py-16">
  <Content />
  <Columns {columns} />

  {#if bookingButton}
    <div class="mt-16 flex items-center justify-center">
      <BookingButton />
    </div>
  {/if}
</section>
