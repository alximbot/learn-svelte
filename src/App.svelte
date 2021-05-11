<script lang="ts">
  import List from "./List.svelte";
</script>

<main>
  <h1>Svelte TODO List</h1>
  <List />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 500px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
