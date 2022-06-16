<script>
  import Content, {metadata} from '@content/blocks/callToAction.md'

  export let buttonText = metadata.buttonText || 'Sign Up'
  export let backgroundImage = metadata.backgroundImage || 'https://via.placeholder.com/270/F0F0F0?Text=HEROIMAGE'
  export let bgCss = `
    background-image: linear-gradient(to left, rgba(360,360,360, 0) 30%, rgba(360, 360, 360, 1)),
      url(${backgroundImage}), none;
  `
      bgCss = `background-image: url(${backgroundImage});`
</script>

<section style={bgCss} class="standard-block call-to-action">
  <div class="float-right text-center">
    <div class="call-to-action">
      <Content />
      <hr class="hr hr-sm !border-white">
    </div>
    <a class="btn btn-primary" href="/contact-us">{buttonText}</a>
  </div>
  <div class="clear-both"></div>
</section>

<style lang="scss">
  .call-to-action {
    @apply max-w-140 px-12 py-12 mb-12;
    @apply bg-theme-primary leading-12 text-center;
  }
  :global(.call-to-action p) {
    @apply text-white text-3xl font-bold leading-14 pb-0;
  }
  section {
    @apply py-24 pr-0 mb-0;
    background-repeat: repeat, repeat, repeat;
    background-attachment: scroll, scroll, scroll;
    background-origin: padding-box, padding-box, padding-box;
    background-clip: border-box, border-box, border-box;
    background-size: cover;
    background-position: 100% 55%;
  }
</style>