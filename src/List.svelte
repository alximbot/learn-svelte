<script lang="ts">
  const list: string[] = ["Eat breakfast", "Work out", "Meditate"];
</script>

<div class="listInputs">
  {#each list as item}
    <input bind:value={item} />
  {/each}
</div>

<style>
  .listInputs {
    display: grid;
    grid-auto-flow: row;
    row-gap: 12px;
  }

  input {
    color: #6c6c6c;
    font-size: 1.5em;
    border: none;
    outline: none;
  }

  input:focus {
    color: #1a1a1a;
  }
</style>
