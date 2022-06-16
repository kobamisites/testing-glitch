<script>
  import BlockContent, {metadata} from '@content/blocks/blogPosts.md'

  export let title = metadata.title || ''
  export let pages = metadata.pages || import.meta.globEager( '../../content/pages/blog/*.md')

  pages = Object.entries(pages).map(([filePath, cmp]) => {
    return {
      url: filePath.split('../../content/pages').pop().split('.md')[0],
      metadata: cmp.metadata,
      title: cmp.metadata?.title,
      excerpt: cmp.metadata?.excerpt,
      image: cmp.metadata?.image,
      date: cmp.metadata?.date,
      preview: cmp.default
    }
  }).filter((page) => page.title)
</script>

<section>
  {#if title}
    <h1>{title}</h1>
  {/if}
  <BlockContent />

  {#if pages?.length}
    {#each pages as page }
      <div class="mb-4">
        <a class="link block text-theme-primary" href={page.url}>
        <img class="w-300px max-h-250px" src="{page.image}" width="400" height="250" alt="featured"/>
          {page.title}
      </a>
        <span class="italic text-sm">{page.date}</span>
      </div>
    {/each}
  {/if}

</section>

<style lang="scss">

</style>