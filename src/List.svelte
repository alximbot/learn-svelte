<script lang="ts">
  import { onDestroy } from "svelte";
  import AddItemInput from "./AddItemInput.svelte";
  import ListItem from "./ListItem.svelte";
  import { todoList } from "./store";

  let list: string[];
  const unsubscribe = todoList.subscribe((todos) => (list = todos));

  onDestroy(() => {
    unsubscribe();
  });

  let newItem: string = "";

  function addToList() {
    todoList.set([...list, newItem]);
    newItem = "";
  }

  function removeFromList(index: number) {
    list.splice(index, 1);
    todoList.set(list);
  }
</script>

<AddItemInput bind:value={newItem} on:addItem={() => addToList()} />

<div class="listItems">
  {#each list as item, i}
    <ListItem text={item} on:remove={() => removeFromList(i)} />
  {/each}
</div>

<style type="scss">
  .listItems {
    display: grid;
    grid-template-columns: auto 30px;
    align-items: center;
    grid-auto-flow: row;
    row-gap: 12px;
  }
</style>
