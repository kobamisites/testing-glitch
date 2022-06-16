<script>
  import { metadata } from '@content/menus/main-menu.md'
  import { metadata as settings } from '@settings/site.md'
  import Icon from '@/blocks/Icon.svelte'
  import BookingButton from '@/blocks/BookingButton.svelte'
  import PhoneButton from '@/blocks/PhoneButton.svelte'
  import Logo from '@/blocks/Logo.svelte'

  export let logoPosition = 'logo-' + metadata.logoPosition || 'logo-left'
  export let items = metadata.items || []

  let innerWidth
  $: isMobile = innerWidth < 1024
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
</script>

<nav class={logoPosition}>
  <Logo class="area-logo" />
  {#if isMobile}
    <PhoneButton class="area-secondary outlined" />
    <BookingButton class="area-action" />
  {:else}
    <div class="area-buttons">
      {#each buttons as item}
        <a href="{item.link}" class='btn  {item.design}'>{item.name}</a>
      {/each}
    </div>
  {/if}

  {#if !isMobile}
    <div class="area-menu menu">
      {#each links as item}
        <a class="nav-item" href={item.link}>
          {#if item.image}
            <img src={item.image} height="50" alt={item.name} />
          {:else}
            {item.name}
          {/if}
        </a>
      {/each}
    </div>
  {/if}

  {#if isMobile}
    <button
      class="area-menu dropdown"
      on:click={() => (showMobileMenu = !showMobileMenu)}
      aria-label="toggle menu">
      <Icon name="hamburger-menu" height="50" width="50" />
    </button>

    {#if showMobileMenu}
      {#each items as item}
        <a class="nav-item" class:isMobile href={item.link}>{item.name}</a>
      {/each}
    {/if}
  {/if}
</nav>

<svelte:window bind:innerWidth />

<style type="scss">
  nav {
    @apply grid p-4 gap-x-4 gap-y-4;
    grid-template:
      'logo logo'
      'action secondary'
      'menu menu'
      / 1fr 1fr;
    grid-template:
      'logo menu'
      'action secondary'
      / 1fr 1fr;
    .area-menu {
      @apply justify-self-end;
    }
    @screen md {
      .area-action {
        @apply @md:place-self-end;
      }
      .area-secondary {
        @apply @md:place-self-start;
      }
    }
    @screen lg {
      &.logo-left {
        @apply place-items-center gap-x-16;
        grid-template:
          'logo menu buttons'
          / max-content 1fr max-content max-content;
      }
      &.logo-center {
        @apply items-end gap-x-16;
        grid-template:
          'menu logo buttons'
          / 1fr max-content 1fr;
      }
      .area-buttons {
        @apply space-x-4
        xl:space-x-8;
      }
    }
  }

  .logo {
    @apply flex justify-between items-center;
    img {
      height: 60px;
      width: auto;
    }
  }

  .menu {
    @apply flex space-x-4
    xl:space-x-8;
  }
  // Style differently for mobile
  .nav-item.isMobile {
    @apply col-span-2 py-2 px-4 rounded place-self-stretch;
    @apply text-theme-text shadow ring ring-theme-primary hover:bg-theme-primary hover:text-theme-light;
  }
</style>
