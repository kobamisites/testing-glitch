<script>
  export let url = ""
  export let text = ""
  export let target = ""
</script>

{#if url}
  <a href={url} class="link {$$restProps.class}" {target}>{text}</a>
{/if}
