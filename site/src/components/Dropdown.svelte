<script>
  import Icon from '@/blocks/Icon.svelte'

  export let text = undefined
  export let items = []

  let details
  let content

  // We need to set the dropdown content to position fixed so it works
  // inside elements with scroll auto. We just copy the clicked element's
  // position relative to the viewport and add a little to the top to push
  // the content down below it.
  function openMenu () {
    if (!details.open) {
      const detailsPos = getPos(details)
      content.style.top = detailsPos.top + 35 + 'px'
      content.style.left = detailsPos.left + 'px'
    }
  }

  function getPos (el) {
    const viewportOffset = el.getBoundingClientRect()
    // these are relative to the viewport
    return { top: viewportOffset.top, left: viewportOffset.left }
  }
</script>

<div class={'dropdown ' + $$restProps.class}>
  <details bind:this={details}>
    <summary aria-haspopup="true" on:click={openMenu}>
      <slot name="summary">
        {#if text}
          <span class="text-sm text-blue-500">{text}</span>
        {:else}
          <Icon name="dots-horizontal" class="p-1 stroke-gray-500 hover:bg-gray-300 w-7 h-7 rounded"/>
        {/if}
      </slot>
    </summary>
    <ul bind:this={content} role="menu" class="!z-50" on:click={() => details.open = false}>
      <slot>
        {#each items as { action, text }}
          {#if action}
            <li>
              <button on:click|preventDefault={action || (() => {})}>
                {text}
              </button>
            </li>
          {:else}
            <li class="text-sm px-4 py-1">
              {text}
            </li>
          {/if}
        {/each}
      </slot>
    </ul>
  </details>
</div>

<style>
    ul {
        position: fixed;
    }
</style>