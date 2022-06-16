<script>
  import Content, {metadata} from '@content/blocks/contactUsForm.md'

  export let buttonText = metadata.buttonText || 'Submit'
  export let jobberId = metadata.jobberId || ''
</script>

<section class="contact-us-form block" style:min-height={ jobberId ? '1716px' : 'auto'}>
  <div class="content">
    <Content />
  </div>
  {#if jobberId}
    <div class="w-full py-8" id={jobberId}></div>
  {:else}
    <div class="form">
      <form class="flex flex-col space-y-4 md:px-16" action="">
        <input class="input input-text" type="text" name="firstName" placeholder="First Name" value="">
        <input class="input input-text" type="text" name="lastName" placeholder="Last Name" value="">
        <input class="input input-text" type="text" name="email" placeholder="Email" value="">
        <input class="input input-text" type="text" name="phone" placeholder="Phone" value="">
        <textarea class="textarea" name="" id="" cols="30" rows="8" placeholder="What can we help you with?"></textarea>
        <div class="text-center">
          <button class="btn" type="submit">{buttonText}</button>
        </div>
      </form>
    </div>
  {/if}
</section>


<style lang="scss">
  section {
    @apply p-0 mx-4 md:mx-8 md:grid md:grid-cols-2 border-2 border-gray-100;
  }
  .content {
    @apply p-4;
    @screen md {
      @apply p-16;
    }
  }
  .block.contact-us-form :global(h2) {
    @apply mb-8;
  }
  .form {
    @apply bg-gray-100 px-4 py-8 md:py-16;
  }
</style>