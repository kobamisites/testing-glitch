<script>
  import Content, { metadata } from '@content/blocks/contactInfo.md'
  import { metadata as settings } from '@content/settings/site.md'
  import Hours from '@/blocks/Hours.svelte'

  export let jobberId = metadata.jobberId || ''
</script>

<section class="contact-info">
  <div class="contact-info-content">
    <h2>{settings.company_name}</h2>
    <p>{settings.company_phone || ''}</p>
    <p>{settings.company_email || ''}</p>
    <address class="text-xl">{settings.company_address || ''}</address>

    <div class="block-content">
      <Content />
    </div>

    {#if jobberId}
      <div id={jobberId}></div>
    {/if}
  </div>
  <div class="hours">
    <h2>Hours</h2>
    <Hours />
  </div>
</section>


<style type="scss">
  section {
    @apply p-0 mx-4 md:mx-8 md:grid md:grid-cols-2 border-2 border-gray-100;
  }

  .contact-info-content {
    @apply md:py-16 md:px-16;
  }

  .hours {
    @apply bg-gray-100;
    @apply md:py-16 md:px-16;
    p {
      @apply mb-0;
    }
  }
</style>
