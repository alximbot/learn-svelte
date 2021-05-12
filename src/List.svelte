<script lang="ts">
  import AddItemInput from "./AddItemInput.svelte";
  import ListItem from "./ListItem.svelte";
  import { todoList } from "./store";
  import type { TodoListItem } from "./store";

  let newItem: TodoListItem = { text: "" };

  function addToList() {
    todoList.set([...$todoList, newItem]);
    newItem = { text: "" };
  }

  function removeFromList(index: number) {
    $todoList.splice(index, 1);
    todoList.set($todoList);
  }

  function markItemAsDone(index: number) {
    $todoList[index].done = !$todoList[index].done;
    todoList.set($todoList);
  }
</script>

<AddItemInput bind:value={newItem.text} on:addItem={() => addToList()} />

<div class="listItems">
  {#each $todoList as item, i}
    <ListItem
      text={item.text}
      done={item.done}
      on:remove={() => removeFromList(i)}
    >
      <span slot="beforeText">{i + 1}.</span>
      <button slot="afterText" on:click={() => markItemAsDone(i)}>✔</button>
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

    button {
      background: none;
      border: none;
      cursor: pointer;
      width: 40px;
      height: 40px;
      opacity: 0.2;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>
