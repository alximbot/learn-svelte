<script lang="ts">
  const list: string[] = ["Eat breakfast", "Work out", "Meditate"];
</script>

{#each list as item}
  <h2>{item}</h2>
{/each}
