<script>
  import ReviewContent, {metadata} from '@content/blocks/bio.md'

  export let title = metadata.title || 'Bio Title'
  export let name = metadata.name || 'Bio Name'
  export let position = metadata.position || 'Bio Position'
  export let image = metadata.image || 'image Link'
</script>

<section class="standard-block">
  <h2 class="text-center">{title}</h2>
  <article class="bio">
    <div class="mb-4">
      <img width="500" class="bio-image" src={image} alt="Bio">
      <h3>{name}</h3>
      <h4>{position}</h4>
    </div>
    <ReviewContent/>
  </article>
</section>

<style lang="scss">
  .bio {
    @apply bg-gray-100 p-4 md:p-16;
    @screen md {
      column-count: 2;
      column-gap: 4rem;
    }
  }
  .bio-image {
    @apply mb-8;
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 100%);
  }
</style>