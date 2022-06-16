<script>
  import { metadata } from '@content/menus/main-menu.md'
  import { metadata as settings } from '@settings/site.md'
  import Icon from '@/blocks/Icon.svelte'
  import BookingButton from '@/blocks/BookingButton.svelte'
  import PhoneButton from '@/blocks/PhoneButton.svelte'

  export let logoPosition = metadata.logoPosition || 'left'
  export let items = metadata.items || []

  let showMobileMenu = false

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
  const phoneItem = items.find((i) => i.setting === 'phone')
  const bookItem = items.find((i) => i.setting === 'bookingPage')
</script>

<nav class="mobile-menu">
  <div class="logo">
    <a class="" href="/" title="Home">
      <img src="{settings.company_logo}" height="110" width="187" alt="logo">
    </a>
    <button on:click={() => showMobileMenu = !showMobileMenu} class="dropdown" aria-label="toggle menu">
      <Icon name="hamburger-menu" height="50" width="50"/>
    </button>
  </div>
  <div class="links {showMobileMenu ? 'flex' : 'hidden'}">
    {#each items as item}
      <a class="nav-item " href="{item.link}">{item.name}</a>
    {/each}
  </div>

  <div class="grid items-center grid-cols-2 gap-1 mt-4">
    {#if phoneItem}
      <PhoneButton />
    {/if}
    {#if bookItem}
      <BookingButton />
    {/if}
  </div>
</nav>

<nav class="menu">
  {#if logoPosition === 'left'}
    <div class="logo left">
      <a class="" href="/" title="Home" aria-label="go to home page">
        <img src="{settings.company_logo}" height="50" alt="logo">
      </a>
    </div>
  {/if}
  {#each links as item}
    <a class="nav-item " href="{item.link}">
      {#if item.image}
        <img src="{item.image}" height="50" alt="{item.name}">
      {:else}
        {item.name}
      {/if}
    </a>
  {/each}
  {#if logoPosition === 'center'}
    <div class="logo center">
      <a class="" href="/" title="Home" aria-label="go to home page">
        <img src="{settings.company_logo}" height="50" alt="logo">
      </a>
    </div>
  {/if}
  <div class="buttons">
    {#each buttons as item}
      <a href="{item.link}" class='btn  {item.design}'>{item.name}</a>
    {/each}
  </div>
</nav>

<style type="scss">
  .mobile-menu {
    @apply py-4;

    .logo {
      @apply flex justify-between items-center;

      img {
        height: 60px;
        width: auto;
      }

    }

    .links {
      @apply flex-col gap-4 p-4 bg-gray-100 rounded-lg;
    }

    .nav-item {
      @apply py-2 px-4 rounded block text-left;
      @apply text-theme-text shadow bg-white;

      &:last-child {
        border: 0;
      }
    }
    @screen lg {
      @apply hidden;
    }
  }

  .menu {
    @apply hidden min-h-80px;

    @screen lg {
      @apply m-auto flex flex-row justify-between items-center;
    }
    .nav-item {
      @apply block;
    }

    .logo {
      img {
        @apply h-$nav-image-height;
      }
    }
    .buttons {
      @apply flex gap-4 items-center;
    }
  }
</style>
