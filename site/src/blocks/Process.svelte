<script>
  import { metadata } from '@content/blocks/process.md'
  import ThreeColumn from '@/components/ThreeColumn.svelte'
  import LeadForm from '@/blocks/LeadForm.svelte'

  export let title = metadata.title || 'How does it work?'
  export let columns = metadata.columns
  export let withLeadForm = false
</script>


<section class="{withLeadForm ? 'md:-pb-96' : ''}">
  <div class="standard-block">
    <h2 class="text-center mb-16">{title}</h2>

    <article class="process">
      {#if columns}
        <ThreeColumn {columns} showArrows />
      {/if}
      {#if withLeadForm}
        <div class="md:-mb-96">
          <LeadForm />
        </div>
      {/if}
    </article>
  </div>
</section>