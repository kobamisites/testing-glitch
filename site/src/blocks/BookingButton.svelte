<script>
  import { metadata as settings } from '@settings/site.md'

  export let buttonText = settings.booking_buttonText || 'Book Now'
</script>

{#if settings.bookingPage}
  <a href="{settings.bookingPage}" class="btn primary booking {$$restProps.class}">{buttonText}</a>
{/if}
