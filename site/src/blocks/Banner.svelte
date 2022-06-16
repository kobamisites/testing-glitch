<script>
  import Content, { metadata } from '@content/blocks/banner.md'

  export let title = metadata.title || 'Benefits'
</script>


<section class="banner">
  <Content />
</section>

<style type="scss">
  .banner {
    @apply text-center;
  }
  .banner :global(p) {
    @apply my-4;
  }
</style>