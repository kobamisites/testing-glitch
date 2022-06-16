<script>
  import DefaultLayout from '@/layouts/default.svelte'
  import Header from '@/components/Header.svelte'
  import Footer from '@/components/Footer.svelte'
  import Aside from '@/blocks/Aside.svelte'
</script>

<DefaultLayout {...$$restProps}>
  <Header />
  <main>
    <article>
      <slot/>
    </article>
    <aside>
      <Aside />
    </aside>
  </main>
  <Footer />
</DefaultLayout>

<style type="scss">
main {
  @screen md {
    @apply grid grid-cols-9;
  }
}

article {
  @screen md {
    @apply px-8;
    @apply col-span-6;
  }
}

article :global(h1) {
  @apply text-left;
}

aside {
  @apply px-4;
  @screen md {
    @apply border-l border-gray-300 mt-31 col-span-3;
  }
}
</style>
