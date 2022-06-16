<script>
  import {onMount} from 'svelte'

  export let youtubeUrl = undefined
  export let youtubeId = undefined

  // if (youtubeUrl) {
  //   const params = new URLSearchParams(youtubeUrl)
  // }

  let videoEl
  onMount(() => {
    let yt = document.createElement('lite-youtube')
    yt.setAttribute('videoid', youtubeId)
    yt.setAttribute('height', "405")
    yt.setAttribute('width', "720")
    yt.style.backgroundImage = "url('https://i.ytimg.com/vi/uuF705i5g-Q/maxresdefault.jpg');"
    yt.innerHTML = `
      <button type="button" class="lty-playbtn">
        <span class="lyt-visually-hidden">Play Video</span>
      </button>
    `
    videoEl.appendChild(yt)
  })
</script>


<div bind:this={videoEl} class="yt-video-wrapper">
</div>

<style lang="scss">
  .yt-video {
    @apply border-0 rounded-lg shadow-lg;
  }
  .yt-video-wrapper {
    @apply min-w-400px mx-auto max-w-720px;
  }
</style>