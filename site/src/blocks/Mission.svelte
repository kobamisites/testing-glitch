<script>
  import BlockContent, { metadata } from '@content/blocks/mission.md'

  export let backgroundImage = metadata.backgroundImage || 'https://via.placeholder.com/270/F0F0F0?Text=HEROIMAGE'
  export let bgCss = `
    background-image: linear-gradient(to left, rgba(360,360,360, 0) 70%, rgba(100, 100, 100, 0)),
     linear-gradient(to right, rgba(360,360,360, 0) 30%, rgba(360, 360, 360, 0)),
      url(${backgroundImage}), none;
  `
  export let title = metadata.title || ''
</script>


<section class="mission py-16 lg:py-32 filter" style={bgCss}>
  <h2>{title}</h2>
  <div class="">
    <BlockContent />
  </div>
</section>

<style lang="scss">

  section {
    /* @apply h-100 lg:h-150 flex flex-col justify-center; */
    // background-position-x: 0%, 0%, 0%, 0%;
    // background-position-y: 0%, 0%, 0%, 0%;
    // background-repeat: repeat, repeat, repeat, repeat;
    // background-attachment: scroll, scroll, scroll, scroll;
    // background-origin: padding-box, padding-box, padding-box, padding-box;
    // background-clip: border-box, border-box, border-box, border-box;
    // background-blend-mode: normal, normal, normal, normal;
    background-size: cover;
    background-position: 100% 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>