<script>
  export let source = ''
  export let text = ''
  export let width = ''
  export let height = ''
</script>

{#if source}
  <img class="image {$$restProps.class}" src={source} alt={text} {width} {height} />
{/if}
