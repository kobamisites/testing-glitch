<script>
  import Content, {metadata} from '@content/blocks/providers.md'

  export let providers = metadata.providers || [
    {
      image: "https://via.placeholder.com/270",
      link: "/link"
    }
  ]
</script>

<section class="providers standard-block">
  <div class="content">
    <Content />
  </div>

  <ol class="list layout">
    {#each providers as provider}
      <li class="card">
        <div class="card-content dividers">
          {#if provider.link}
            <a class="provider-card" href={provider.link}>
              <img class="m-auto max-h-50px max-w-full" src={provider.image} alt="provider" />
            </a>
            {:else}
              <div class="provider-card">
                <img class="m-auto max-w-150px" src={provider.image} alt="provider" />
              </div>
            {/if}
        </div>
      </li>
    {/each}
  </ol>
</section>

<style lang="scss">
  .content :global(p) {
    @apply text-center;
  }
  .list {
    @apply grid;
    @screen md {
      @apply gap-y-1;
    }
  }
  .card {
    @apply py-4;
  }
  .card-content {
    @apply py-16 h-75px flex justify-center items-center;
    @apply md:border-right-4;
  }
</style>