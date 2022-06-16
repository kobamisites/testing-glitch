<script>
  import BlockContent, { metadata } from '@content/blocks/benefits.md'

  export let title = metadata.title || 'Benefits'
  export let image = metadata.image || 'image Link'
</script>


<section class="benefits standard-block">
  <article class="image">
    <img src="{image}" height="500" width="500" alt="{title}">
  </article>
  <article class="content">
    <div class="prose">
      <h3>{title}</h3>
      <BlockContent/>
    </div>
  </article>
</section>

<style type="scss">
  section {
    @apply bg-theme-neutral flex flex-col;
    @screen lg {
      @apply grid grid-cols-2 gap-8 place-items-center mt-16;
    }
  }

  .content {
    @apply px-4 pt-8 m-auto;
  }

  .image {
    img {
      width: 100%;
    }
    @screen md {
      img {
        @apply rounded;
        width: 100%;
      }

      @apply -mt-40 border-20 border-white mb-0 order-2;
    }
  }
</style>