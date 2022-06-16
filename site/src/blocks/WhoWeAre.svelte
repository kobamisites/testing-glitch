<script>
  import BlockContent, { metadata } from '@content/blocks/whoWeAre.md'

  const image = metadata.image || ''
</script>
<section class="who-we-are standard-block flex">
  {#if image}
    <img src="{image}" height="400" alt="Who We Are" class="m-auto mb-8">
  {/if}
  <div class="content flex flex-col justify-center">
    <BlockContent />
  </div>
</section>

<style>
  img {
      height: 400px;
  }
</style>