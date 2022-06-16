<script>
  export let stars = -1
  export let title = ''
</script>

{#if stars >= 0}
  <span {title} class="rating stars inline-block" style:--rating={stars} />
{/if}

<style type="scss">
  .stars {
    --star-size: 24px;
    --percent: calc(var(--rating) / 5 * 100%);
    font-size: var(--star-size);
    font-family: Times, monospace;
    line-height: 1;
  }

  .stars:before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    background: linear-gradient(90deg, rgb(247, 146, 33) var(--percent), #e7e7e7 var(--percent));
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
