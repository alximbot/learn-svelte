<script lang="ts">
  import List from "./List.svelte";
  import { todoList } from "./store";
  import { onDestroy } from "svelte";

  let list: string[];
  const unsubscribe = todoList.subscribe((todos) => (list = todos));

  onDestroy(() => {
    unsubscribe();
  });

  $: title = list.length + " things TODO";
</script>

<main>
  <h1>{title}</h1>
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
