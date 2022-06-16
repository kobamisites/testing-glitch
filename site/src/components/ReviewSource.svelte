<script>
  import Icon from '@/blocks/Icon.svelte'

  export let source = undefined

  function matchIconWithSource() {
    return {
      google: 'google',
      facebook: 'facebook',
      yelp: 'yelp',
      jobber: 'jobber'
    }[source?.toLowerCase()]
  }

  let icon = matchIconWithSource()
</script>

{#if icon}
  <Icon classes="source" title={source} name={icon} />
{:else if source}
  <span title={source} class="source">{source}</span>
{/if}