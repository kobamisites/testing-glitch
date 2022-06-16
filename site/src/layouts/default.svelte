<script>
  import SiteHead from '@/components/SiteHead.svelte'
  import FooterScripts from '@settings/FooterScripts.svelte'
  import { afterPageLoad } from '@/core/router'

  // Disable loading MTEmbedder after page load in dev mode, or it will load twice.
  // The widgets work fine in dev mode but in static mode we have to explicitly call the embed function.
  if (!import.meta.hot) $afterPageLoad(window.MTEmbedder?.embed)
</script>

<SiteHead {...$$restProps} />
<slot />
<FooterScripts />
