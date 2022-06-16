<script>
  import DefaultLayout from '@/layouts/default.svelte'
  import Header from '@/components/Header.svelte'
  import FeaturedImage from '@/components/FeaturedImage.svelte'
  import Aside from '@/blocks/Aside.svelte'
  import Footer from '@/components/Footer.svelte'

  export let title = 'title'
  export let date = 'today'
</script>

<DefaultLayout {...$$restProps}>
  <Header />
  <main>
    <article>
      <div class="heading">
        <h1 class="">{title}</h1>
        <p class="italic">{date}</p>
      </div>
      <div class="">
        <FeaturedImage {...$$restProps} />
      </div>
      <div>
        <slot />
      </div>
    </article>
    <aside>
      <Aside />
    </aside>
  </main>
  <Footer />
</DefaultLayout>

<style type="scss">
  .heading {
    @apply col-span-9 xborder-b border-gray-300 mb-8;
    @screen md {
      @apply px-4;
    }
  }
  h1 {
    @apply my-2;
    @apply text-4xl;
  }
  main {
    @screen md {
      @apply grid grid-cols-9 mt-16;
    }
    @screen lg {
      @apply px-8;
    }
  }

  article {
    @screen md {
      @apply px-8 col-span-6;
    }
  }

  article :global(h1) {
    @apply text-left;
  }

  aside {
    @apply px-4;
    @screen md {
      @apply border-l border-gray-300 col-span-3;
    }
  }
</style>
