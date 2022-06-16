<script>
  import BlockContent, { metadata } from '@content/blocks/problem.md'
  import BookingButton from '@/blocks/BookingButton.svelte'
  import YoutubeVideo from '@/components/YoutubeVideo.svelte'

  export let title = metadata.title || 'Title'
  export let subtitle = metadata.subtitle || 'Subtitle'
  export let images = metadata.images || []
  export let youtubeId = metadata.youtubeId
</script>

<section class="problem-as-hero standard-block">
  <div class="content">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <div>
      <BlockContent />
    </div>
    <BookingButton />
  </div>

  {#if youtubeId}
    <div class="media-section video">
      <YoutubeVideo {youtubeId} />
    </div>
  {:else if images.length}
    <div class="media-section images">
      {#each images as image}
        <div>
          <img src={image} alt={image} width="321" height="503" />
        </div>
      {/each}
    </div>
  {/if}
</section>

<style type="scss">
  section {
    @apply flex flex-col;
    @screen lg {
      @apply flex flex-row gap-16 pt-16;
    }
  }
  h1 {
    @apply text-left mb-4 mx-0;
    @screen lg {
      @apply text-5xl;
    }
  }
  h2 {
    @apply mb-4 text-lg font-semibold text-left;
    @screen lg {
      @apply m-0 p-0;
      @apply mb-4;
      @apply text-xl;
    }
  }
  p {
    @apply mb-4;
    @screen lg {
      @apply m-0 p-0 text-left;
    }
  }
  .problem-as-hero :global(p) {
    @apply p-0;
  }
  .content {
    @apply order-2;
    @screen lg {
      @apply max-w-1/2 flex flex-col justify-center order-1;
    }
  }
  .media-section {
    @apply gap-2 mb-8;
    max-width: 1100px;

    @screen lg {
      @apply mb-0;
      & > * {
        @apply gap-4;
      }
    }

  }
  .media-section.video {
    @screen lg {
      @apply order-2 flex-grow;
    }
  }
  .media-section.images {
    @apply grid grid-cols-3;
    img {
      margin: auto;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    @screen lg {
      @apply order-2;
    }
  }


  @screen lg {
    .media-section.images {
      > div:first-child {
        img {
          border-top-left-radius: 50px;
        }
      }
      > div:last-child {
        img {
          border-bottom-right-radius: 50px;
        }
      }
    }
  }
</style>
