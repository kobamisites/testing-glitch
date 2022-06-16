<script>
  import { metadata } from '@content/blocks/solution.md'
  import BlockContent from '@content/blocks/solution.md'
  import BookingButton from '@/blocks/BookingButton.svelte'

  export let title = metadata.title || 'Solution'
  export let image = metadata.image || 'image Link'
</script>


<section class="standard-block">
  <article class="image" style="background-image: url({image});">
    <img src="{image}" class="lg:hidden" loading="lazy" alt="results you can trust" width="500" height="500">
  </article>
  <article class="content">
    <div class="prose">
      <h3>{title}</h3>
      <BlockContent/>
    </div>
    <BookingButton />
  </article>
</section>

<style type="scss">
  section {
    @apply flex flex-col;
    @screen lg {
      @apply grid grid-cols-2 gap-8 place-items-center;
    }
  }

  .content {
    @apply bg-white px-4 py-8;
    @screen lg {
      @apply p-y rounded;
    }
    :global(.btn) {
      @apply m-auto block max-w-4/5 mt-8;
      @screen lg {
        @apply max-w-1/2;
      }
    }
  }

  .image {
    img {
      width: 100%;
    }
    @screen lg {
      @apply rounded;
      height: 100%;
      min-height: 500px;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
</style>