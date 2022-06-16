<script>
  import { metadata as settings } from '@settings/site.md'

  export let imageClass = 'h-$nav-image-height w-auto'
</script>

{#if settings.company_logo}
  <a class="logo {$$restProps.class}" href="/" title="Home" aria-label="go to home page">
    <img class="{imageClass}" src={settings.company_logo} height="100" width="100" alt="logo" />
  </a>
{/if}