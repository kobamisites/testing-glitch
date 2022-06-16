<script>
  import BlockContent, { metadata } from '@content/blocks/promoVideo.md'
  import YoutubeVideo from '@/components/YoutubeVideo.svelte'

  export let youtubeId = metadata.youtubeId || undefined
</script>

{#if youtubeId}
  <YoutubeVideo {youtubeId} />
  <BlockContent />
{/if}