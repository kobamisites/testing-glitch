<script>
  import { metadata } from '@settings/whats-included.md'

  let names = metadata.names || {standard: 'Standard Clean', deep: 'Deep Clean', move: 'Move In/Out'}
  let categories = metadata.categories || []
  export let hideStandard = undefined
  export let hideDeep = undefined
  export let hideMove = undefined
</script>

{#each categories as category}
  <section class='responsive'>
    <table class='services-table table table-auto mt-12 w-full'>
      <thead>
      <tr class="services-row">
        <th class="service-category"></th>
        <th class:hidden={hideStandard}>{names['standard']}</th>
        <th class:hidden={hideDeep}>{names['deep']}</th>
        <th class:hidden={hideMove}>{names['move']}</th>
      </tr>
      </thead>
      <tbody>
      <tr class="category first">
        <th colspan="4">{category.name}</th>
      </tr>
      {#each category.items as item}
        <tr>
          <th>{item.name}</th>
          <td class:hidden={hideStandard}>
            <span class={item.standard}>{item.standard || ''}</span>
          </td>
          <td class:hidden={hideDeep}>
            <span class={item.deep}>{item.deep || ''}</span>
          </td>
          <td class:hidden={hideMove}>
            <span class={item.move}>{item.move || ''}</span>
          </td>
        </tr>
      {/each}
      </tbody>
    </table>
  </section>
{/each}


<style type="scss">
  .service-category {
    @apply md:min-w-450px;
  }
  .services-table {
    margin: 40px auto;
    text-align: left;
    font-size: 1rem;
    width: 100%;
    max-width: 800px;
    border-collapse: collapse;
  }

  .services-table thead th {
    text-align: center;
    padding: 5px 10px;
  }

  .services-table td {
    text-align: center;
  }

  .services-table tbody th {
    padding: 20px;
    font-weight: normal;
  }


  .services-table .services-row th {
    padding: 0;
  }

  .services-table .category th {
    color: theme('colors.theme.primary');
    border-bottom: 2px solid theme('colors.theme.primary');
    font-weight: bold;
    padding: 80px 10px 10px;
  }

  .services-table .category.first th {
    padding: 0 10px 10px;
  }

  .services-table .included {
    display: inline-block;
  }

  @media (min-width: 960px) {
    td {
      padding: 10px 20px;
    }

  }
</style>
