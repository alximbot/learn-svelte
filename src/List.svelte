<script lang="ts">
  import AddItemInput from "./AddItemInput.svelte";
  import ListItem from "./ListItem.svelte";

  let list: string[] = ["Eat breakfast", "Work out", "Meditate"];
  let newItem: string = "";

  function addToList() {
    list = [...list, newItem];
    newItem = "";
  }

  function removeFromList(index: number) {
    list.splice(index, 1);
    list = list;
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
