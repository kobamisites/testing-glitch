<script>
  import { metadata as settings } from '@settings/site.md'
  import SocialMediaIcons from '@/blocks/SocialMediaIcons.svelte'
</script>

<footer>
  <a href='/'>&copy; {(new Date()).getFullYear()} {settings.company_name}</a>
  <span class="hidden md:inline-block">&nbsp; | &nbsp;</span>
  {#if settings.madeBy}
    <a href={settings.madeBy.link}>{settings.madeBy.text}</a>
  {:else}
    <a href='https://maid.tech'>site by Maid.Tech</a>
  {/if}

  <SocialMediaIcons />
</footer>

<style lang="scss">
  footer {
    @apply flex flex-col items-center p-8 space-y-4 m-auto;
    @screen md {
      @apply flex-row space-y-0 pt-64;
    }
    @screen lg {
      @apply pt-8;
    }
  }
</style>
