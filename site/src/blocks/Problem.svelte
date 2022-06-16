<script>
  import { metadata } from '@content/blocks/problem.md'
  import BlockContent from '@content/blocks/problem.md'

  export let title = metadata.title || title
</script>


<section class="standard-block max-w-3xl m-auto lg:text-center">
  <h2>{title}</h2>
  <div>
    <BlockContent />
  </div>
</section>