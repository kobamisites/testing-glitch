<script>
  import { metadata as settings } from '@settings/site.md'

  export let buttonText = settings.phone_buttonText || settings.company_phone
</script>

{#if settings.company_phone}
  <a href="tel:{settings.company_phone}" class="btn phone {$$restProps.class || 'outlined'}">{buttonText}</a>
{/if}
