<script>
  import Icon from '@/blocks/Icon.svelte'
  export let columns = []
  export let showArrows = false
</script>

<ul class="columns md:grid md:grid-cols-3 reset">
  {#each columns as column, index}
    <li class="column">
      <div class="feature-image">
        <img width="60" height="60" src={column.image} alt="feature">
      </div>
      {#if column.title}
        <h4 class="title">{column.title}</h4>
      {/if}
      <div class="text-xl content">
        {column.content}
      </div>
      {#if showArrows && index < 2}
        <div class="arrow">
          <Icon name="arrow" width="40" height="40" classes="my-4 transform rotate-90 md:rotate-0"/>
        </div>
      {/if}
    </li>
  {/each}
</ul>

<style type="scss">
  .column {
    @apply flex flex-col gap-4 items-center px-2 relative;
  }
  .feature-image {
    @apply border-2 p-8 md:p-12 m-auto;
  }
  .arrow {
    @screen md {
      @apply float-right absolute;
      top: 20%;
      right: -20px;
    }
  }
</style>