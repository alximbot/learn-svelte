<script lang="ts">
  const list: string[] = ["Eat breakfast", "Work out", "Meditate"];
  let newItem: string = "";
</script>

<input bind:value={newItem} />

{#each list as item}
  <h2>{item}</h2>
{/each}

<h2>{newItem}</h2>
