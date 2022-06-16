<script>
  import Icon from '@/blocks/Icon.svelte'
  export let columns = []
  export let showArrows = false
</script>

<ul class="matrix md:gap-4 md:children:col-span-1 xl:grid-cols-4 reset m-0">
  {#each columns as column, index}
    <li class="column" style:background-color={column.color}>
      <div class="feature-image">
        <img width="60" height="60" src={column.image} alt="feature" />
      </div>
      {#if column.title}
        <h4 class="title">{column.title}</h4>
      {/if}
      <div class="content">
        {column.content}
      </div>
      {#if showArrows && index < 2}
        <div class="arrow">
          <Icon
            name="arrow"
            width="40"
            height="40"
            classes="my-4 transform rotate-90 md:rotate-0 text-theme-accent" />
        </div>
      {/if}
    </li>
  {/each}
</ul>

<style type="scss">
  .column {
    @apply flex flex-col gap-4 items-center px-4 py-8 relative text-theme-secondary;
    &:nth-child(odd) {
      @apply bg-theme-neutral;
    }
    @screen md {
      &:nth-child(2) {
        @apply bg-theme-neutral;
      }
      &:nth-child(3) {
        @apply bg-theme-neutral;
      }
      &:nth-child(4) {
        @apply bg-theme-neutral;
      }
      @screen xl {
        &:nth-child(4) {
          @apply bg-theme-neutral;
        }
        &:nth-child(3) {
          @apply bg-theme-neutral;
        }
      }
    }
  }

  .arrow {
    @screen md {
      @apply float-right absolute;
      top: 20%;
      right: -20px;
    }
  }

  .title {
    @apply font-bold text-center w-180px text-xl text-theme-text filter drop-shadow-sm;
  }

  .feature-image {
    @apply bg-theme-light border-2 border-theme-secondary p-8 md:p-12 rounded-full;
  }

  .content {
    @apply text-xl py-4 font-500 leading-10 max-w-md mx-auto;
  }
</style>
