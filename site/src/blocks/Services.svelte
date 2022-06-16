<script>
  import { onMount } from 'svelte'
  import Content, { metadata } from '@content/blocks/services.md'
  import BookingButton from '@/blocks/BookingButton.svelte'

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
    subBlocks = import.meta.globEager( '../../content/blocks/services/*.md')
    subBlocks = Object.values(subBlocks)
  })
</script>

<section class="services standard-block">
  <h2 class="title">{title}</h2>
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

  <div class="text-center">
    <BookingButton />
  </div>
</section>

<style lang="scss">
  section {
    @apply relative overflow-hidden;
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
  .content {
    @apply mb-32 max-w-4xl mx-auto;
    :global(p) {
      @apply text-center;
    }
  }
  .columns {
    max-width: var(--content-max-width);
    @apply space-y-36 mb-24 mx-auto;
    @screen lg {
      @apply grid grid-cols-3 gap-8 space-y-0;
    }
  }
  .column {
    @apply max-w-600px mx-auto relative flex flex-col bg-theme-light items-center py-16 space-y-4 rounded-2xl;
    @screen lg {
      /* @apply space-y-0; */
      @apply mx-0;
    }
  }
  .sub-blocks {
    :global(h3) {
      @apply text-theme-primary;
    }
  }
</style>
