<script>
  export let image = undefined
</script>

{#if image}
  <img src={image} class="w-full mb-8" width="900" height="600" alt="featured" />
{/if}



