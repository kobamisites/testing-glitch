<script>
  import Content, {metadata} from '@content/blocks/whyUs.md'
  import ThreeColumn from '@/components/ThreeColumn.svelte'
  import Columns from '@/components/Columns.svelte'

  export let columns = metadata.columns || [
    {
      image: "https://via.placeholder.com/270",
      content: "Are you ready to discover the automatic selling machine that can double, triple or even quadruple your cleaning business? For FREE?",
      link: "/link"
    }
  ]
</script>

<section class="features">
  <!-- <ThreeColumn {columns} /> -->
  <Columns {columns} />
</section>
