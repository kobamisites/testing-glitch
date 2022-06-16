<script>
  import { onMount } from 'svelte'
  import Content, { metadata } from '@content/blocks/services.md'

  export let subBlocks = metadata.subBlocks || []
  export let title = metadata.title || 'Services Title'
  export let columns = metadata.columns || [
    {
      image: 'https://via.placeholder.com/270',
      content:
        'Are you ready to discover the automatic selling machine that can double, triple or even quadruple your cleaning business? For FREE?',
      link: '/link'
    }
  ]

  onMount(async () => {
    subBlocks = import.meta.globEager('../../content/blocks/services/*.md')
    subBlocks = Object.values(subBlocks)
  })
</script>

<section class="services standard-block">
  <div class="content">
    <Content />
  </div>

  {#if subBlocks?.length}
    <ol class="columns sub-blocks">
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
  section {
    @apply relative overflow-hidden bg-gray-50 mb-10;
  }
  .filler {
    @apply -mt-16 h-100px;
    @screen lg {
      @apply h-0 hidden;
    }
  }
  .feature-image {
    @apply m-auto absolute left-75px -top-56px;
    &.column-3 {
      @apply -top-55px;
      & > img {
        @apply w-40;
      }
    }
    @screen md {
      // @apply w-42;
    }
  }
  .title {
    @apply relative z-2 my-8 max-w-3xl mx-auto;
  }
  .columns {
    @apply space-y-16 mx-auto;
    @screen lg {
      @apply grid grid-cols-3 space-y-0 gap-x-20;
    }
  }
  .column {
    @apply max-w-600px mx-auto relative flex flex-col items-center space-y-4 rounded-2xl;
    @screen lg {
      /* @apply space-y-0; */
      @apply mx-0;
    }
  }
  .services .sub-blocks {
    :global(h3) {
      @apply -mt-0;
    }
    :global(ong) {
      @apply font-semibold text-theme-accent;
    }
  }
</style>
