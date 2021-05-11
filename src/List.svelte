<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import AddItemInput from "./AddItemInput.svelte";
  import ListItem from "./ListItem.svelte";
  import { todoList } from "./store";

  let newItem: string = "";

  function addToList() {
    todoList.set([...$todoList, newItem]);
    newItem = "";
  }

  function removeFromList(index: number) {
    $todoList.splice(index, 1);
    todoList.set($todoList);
  }
</script>

<AddItemInput bind:value={newItem} on:addItem={() => addToList()} />

<div class="listItems">
  {#each $todoList as item, i}
    <ListItem text={item} on:remove={() => removeFromList(i)}>
      <span slot="beforeText">{i + 1}.</span>
    </ListItem>
  {/each}
</div>

<style type="scss">
  .listItems {
    display: grid;
    grid-auto-flow: row;
    row-gap: 12px;

    span {
      color: #666666;
      margin-right: 8px;
    }
  }
</style>
