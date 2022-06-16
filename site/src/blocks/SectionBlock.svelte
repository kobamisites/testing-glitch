<script>
  export let Component = undefined
  export let metadata = undefined
  export let context = undefined
  export let backgroundImage = metadata.backgroundImage
  export let template = metadata.template
  export let section = metadata.section || false
  export let name = undefined
  export let block = metadata.block?.replaceAll(' ', '-') || toKebabCase(name)
  export let rows = metadata.rows
  export let classes = [(metadata.classes || ''), 'section', template, block, context, rows && ('matrix-rows-' + rows)].join(' ')

  function toKebabCase (str) {
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')
  }
</script>

{#if context.startsWith('pages') || section}
  <section style:--background-image={`url(${backgroundImage})`} class="{classes}">
    <Component />
  </section>
{:else}
  <Component />
{/if}



<style lang="scss">
  section {
    background-image: var(--background-image);
    background-size: cover;
  }
</style>