<script>
  import { metadata } from '@settings/whats-included.md'

  export let categories = metadata.commercialCategories || []
</script>

{#each categories as category}
  <section class='responsive'>
    <table class='services-table table table-auto mt-12 w-full'>
      <thead>
      <tr class="services-row">
        <th></th>
        <th>Standard</th>
      </tr>
      </thead>
      <tbody>
      <tr class="category first">
        <th colspan="4">{category.name}</th>
      </tr>
      {#each category.items as item}
        <tr>
          <th>{item.name}</th>
          <td>
            <span class="{item.standard === 'included' ? 'included' : item.standard }">{item.standard || ''}</span>
          </td>
        </tr>
      {/each}
      </tbody>
    </table>
  </section>
{/each}


<style type="scss">
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

  .services-table tbody tr {
    border-bottom: 2px solid #e7e7e7;
  }

  .services-table .services-row th {
    padding: 0;
  }

  .services-table .category th {
    color: theme('colors.theme.secondary');
    border-bottom: 2px solid theme('colors.theme.secondary');
    font-weight: bold;
    padding: 80px 10px 10px;
  }

  .services-table .category.first th {
    padding: 0 10px 10px;
  }

  .services-table .included {
    display: inline-block;
    background-color: theme('colors.theme.accent');
    color:  theme('colors.theme.accent');
    height: 15px;
    width: 15px;
    border-radius: 50%;
    font-size: 15px;
    overflow: hidden;
  }

  @media (min-width: 960px) {
    td {
      padding: 10px 20px;
    }

  }
</style>
