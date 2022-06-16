<script>
  import { metadata as settings } from '@settings/site.md'

  export let buttonText = 'Get an Estimate!'
</script>

{#if settings.bookingPage}
  <a href="{settings.bookingPage}" class="btn {$$restProps.class}">{buttonText}</a>
{/if}
