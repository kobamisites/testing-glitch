<script>
  import BlockContent from '@/components/Content.svelte'

  export let title = 'Title'
  export let image = 'Image Link'
  export let imagePosition = 'first' // or last
  export let content = undefined
  export let button = undefined
  let outerWidth

  $: mobileView = outerWidth < 1000
</script>

<svelte:window bind:outerWidth />

{#if imagePosition === 'first' || mobileView }
  <article class="image" style="background-image: url({image});">
    <img src="{image}" class="lg:hidden" loading="lazy" alt="results you can trust" width="500" height="500">
  </article>
{/if}

<article class="content">
  <slot name="before-content"></slot>
  <div>
    <h3>{title}</h3>
    <slot name="content">
      {#if content}
        <BlockContent {content} />
      {/if}
    </slot>
    <slot></slot>
  </div>
  <slot name="button">
    {#if button}
      <svelte:component this={button} />
    {/if}
  </slot>
  <slot name="after-content"></slot>
</article>

{#if imagePosition === 'last' && !mobileView}
  <article class="image" style="background-image: url({image});">
    <img src="{image}" class="lg:hidden" loading="lazy" alt="results you can trust" width="500" height="500">
  </article>
{/if}

<style type="scss">
  // section {
  //   @apply flex flex-col;
  //   @screen lg {
  //     @apply grid grid-cols-2 gap-8 place-items-center;
  //   }
  // }

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
      // @apply rounded;
      height: 100%;
      min-height: 500px;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
</style>