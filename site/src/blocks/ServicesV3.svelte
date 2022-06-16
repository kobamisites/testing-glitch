<script>
  import Content, { metadata } from '@content/blocks/services.md'

  const subBlocks = Object.values(import.meta.globEager('../../content/blocks/services/*.md'))
</script>

<section class="services">
  <div class="content">
    <Content />
  </div>

  {#if subBlocks?.length}
    <ol class="list layout sub-blocks">
      {#each subBlocks as { default: block, metadata = { } }, index}
        <li class="column">
          {#if metadata.image}
            <div class="feature-image column-{index + 1}">
              <img height="100" width="100" class="" src={metadata.image} alt="feature" />
            </div>
          {/if}
          <svelte:component this={block} />
        </li>
      {/each}
    </ol>
  {/if}
</section>

<style lang="scss">
  .feature-image {
    @apply m-auto absolute left-75px -top-56px;
    &.column-3 {
      @apply -top-55px;
      & > img {
        @apply w-40;
      }
    }
  }
  .column {
    @apply max-w-600px mx-auto relative flex flex-col items-center space-y-4 rounded-2xl;
    @screen lg {
      /* @apply space-y-0; */
      @apply mx-0;
    }
  }
</style>
