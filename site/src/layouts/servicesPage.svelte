<script>
  import PagesLayout from '@/layouts/pages.svelte'
  import { metadata as servicesMenu } from '@content/menus/services.md'

  export let title = ''
  export let highlightsTitle = "What's always included?"
  export let highlights = []
  export let services = servicesMenu.items || []
</script>

<PagesLayout {...$$restProps}>
  <section class="content">
    <h1>{title}</h1>
    <section class="available-services">
      <div>
        <h2>{highlightsTitle}</h2>
        <ul>
          {#each highlights as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h2>Available Services</h2>
        <ul>
          {#each services as service}
            <li><a href="{service.link}">{service.name}</a></li>
          {/each}
        </ul>
      </div>
    </section>
    <slot></slot>
  </section>
</PagesLayout>

<style type="scss">
  .available-services {
    @apply flex flex-col gap-8;
    @screen md {
      @apply flex-row justify-around;
    }
  }

  .available-services :global(h2) {
    text-transform: none;
    text-align: left;
    font-size: 1.4rem;
  }

  .available-services :global(h2:after) {
    display: none;
  }
  .content :global(h3) {
    @apply mt-16;
    padding-right: var(--site-padding-x);
    padding-left: var(--site-padding-x);
  }
  .content :global(h2) {
    padding-right: var(--site-padding-x);
    padding-left: var(--site-padding-x);
  }
  .content :global(p) {
    padding-right: var(--site-padding-x);
    padding-left: var(--site-padding-x);
  }
</style>
