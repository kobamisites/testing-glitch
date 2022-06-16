<script>
  import BlockContent, { metadata } from '@content/blocks/services.md'
  import Service from '@/components/Service.svelte'

  const subBlocks = Object.values(import.meta.globEager('../../content/blocks/services/*.md'))
</script>

<section class="services">
  <div class="content">
    <BlockContent />
  </div>

  {#if subBlocks?.length}
    <ol class="service-list list layout sub-blocks">
      {#each subBlocks as { default: block, metadata = { } }, index}
        <Service Content={block} {metadata} />
      {/each}
    </ol>
  {/if}
</section>

<style lang="scss">
  // .feature-image {
  //   @apply m-auto absolute left-75px -top-56px;
  //   &.column-3 {
  //     @apply -top-55px;
  //     & > img {
  //       @apply w-40;
  //     }
  //   }
  // }
  // .column {
  //   @apply max-w-600px mx-auto relative flex flex-col items-center space-y-4 rounded-2xl;
  //   @screen lg {
  //     /* @apply space-y-0; */
  //     @apply mx-0;
  //   }
  // }
</style>
