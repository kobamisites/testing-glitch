<script>
  import DefaultLayout from '@/layouts/default.svelte'
  import Header from '@/components/Header.svelte'
  import Footer from '@/components/Footer.svelte'
  import {getPageClasses} from '@/core/frontier'
</script>

<DefaultLayout {...$$restProps}>
  <Header />
  <main class="pages {getPageClasses()}">
    <slot />
  </main>
  <Footer />
</DefaultLayout>
