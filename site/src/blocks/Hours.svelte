<script>
  import { metadata } from '@content/settings/hours.md'

  export let hours = metadata
</script>

{#each Object.keys(hours) as key}
  <p>{key}: {hours[key]}</p>
{/each}