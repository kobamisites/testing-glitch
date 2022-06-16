<script>
  import { metadata as settings } from '@settings/site.md'
  import BlockContent, { metadata } from '@content/blocks/callToAction.md'

  export let title = metadata.title || 'Title'
</script>

<section class="standard-block center call-to-action">
  <h2>{title}</h2>
  <div class="links">
    <a href="tel:{settings.company_phone}" class="btn outlined">Call {settings.company_phone}</a><br>
    <a href="{settings.bookingPage}" class="get-estimate btn">Get an Estimate!</a>
  </div>

  <!--Figure out how to dynamicall style for content or not-->
  <!-- <div class="content">
    <BlockContent />
  </div> -->
</section>

<style type="scss">
  section {
    @apply my-16 bg-gray-100;
  }

  .links {
    @apply flex flex-col gap-4;
  }
  @screen md {
    .links {
      @apply flex-row justify-center;
      a {
        @apply px-16;
      }
    }
  }
</style>
