<script>
  import { metadata as quicklinks } from '@content/menus/quick-links.md'
  import { metadata as menu } from '@content/menus/main-menu.md'
  import { metadata as settings } from '@settings/site.md'

  export let items = quicklinks.items || menu.items || []

  // get links from settings
  items.forEach((item) => {
    if (item.link) {
      return
    }

    if (item.setting === 'phone') {
      item.link = 'tel:' + settings.company_phone?.replace(/\D+/g, '')
      item.name = settings.company_phone
    } else if (item.setting === 'bookingPage') {
      item.link = settings?.bookingPage
    }
  })

  const links = items.filter((i) => i.type !== 'button')
  const buttons = items.filter((i) => i.type === 'button')
</script>

<nav class="quick-links">
  {#each links as item}
    <a class="nav-item link" href="{item.link}">
      {#if item.image}
        <img src="{item.image}" height="50" alt="{item.name}">
      {:else}
        {item.name}
      {/if}
    </a>
  {/each}

  {#if buttons.length}
    <div class="buttons">
      {#each buttons as item}
        <a href="{item.link}" class='btn {item.design}'>{item.name}</a>
      {/each}
    </div>
  {/if}
</nav>

<style type="scss">
  .quick-links {
    @screen lg {
      // @apply m-auto flex flex-row justify-evenly items-center;
    }
    .nav-item {
      @apply block border-b-1 border-gray-100 py-4;
      @apply text-theme-text block;
    }
    .nav-item::after {
      content: "\25BA";
      @apply text-gray-300 float-right;
    }
    .buttons  {
      @apply flex flex-col my-4 children:my-3;
    }
  }
</style>
