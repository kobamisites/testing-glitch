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
  $: isMobile = innerWidth < 1081
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
  <Logo class="area-logo <lg:place-self-center lg:py-4 lg:ml-$site-margin-x" width=187 height=110 />
  <PhoneButton class="area-secondary outlined lg:self-center" />
  <BookingButton class="area-action lg:self-center lg:mr-$site-margin-x" />

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
    @apply grid gap-x-4 <lg:gap-y-8;
    grid-template:
      'logo logo'
      'action secondary'
      'menu menu'
      / 1fr 1fr;
    .area-menu {
      @apply place-self-center;
    }
    @screen lg {
      @apply bg-gray-200;
      .area-action {
        @apply @md:place-self-end;
      }
      &.logo-left {
        grid-template:
          'logo secondary action'
          'menu menu menu'
          / 1fr max-content max-content;
      }
      &.logo-center {
        grid-template:
          'menu logo secondary action'
          / max-content 1fr max-content max-content;
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
    @apply flex bg-white py-4 justify-evenly w-full space-x-4
    lg:border-b lg:border-light-500
    xl:space-x-8;
  }
  // Style differently for mobile
  .nav-item.isMobile {
    @apply col-span-2 py-2 px-4 rounded place-self-stretch;
    @apply text-theme-text shadow ring ring-theme-primary hover:bg-theme-primary hover:text-theme-light;
  }
</style>
