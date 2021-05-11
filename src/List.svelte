<script lang="ts">
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

  function onKeypress(e: KeyboardEvent) {
    if (e.key === "Enter") addToList();
  }
</script>

<div class="newInputContainer">
  <input
    class="newInput"
    placeholder=""
    bind:value={newItem}
    on:keypress={onKeypress}
  />
  {#if !!newItem}
    <button class="addButton" on:click={addToList}>Add</button>
  {/if}
</div>

<div class="listItems">
  {#each list as item, i}
    <input bind:value={item} />
    <button on:click={() => removeFromList(i)}>✖️</button>
  {/each}
</div>

<style>
  .listItems {
    display: grid;
    grid-template-columns: auto 30px;
    align-items: center;
    grid-auto-flow: row;
    row-gap: 12px;
  }

  .listItems input {
    color: #6c6c6c;
    font-size: 1.5em;
    border: none;
    outline: none;
  }

  .listItems :focus {
    color: #1a1a1a;
  }

  .listItems button {
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    opacity: 0.2;
  }

  .listItems button:hover {
    opacity: 1;
  }

  .newInputContainer {
    position: relative;
    display: grid;
    margin-bottom: 40px;
  }

  .newInputContainer > * {
    height: 100%;
  }

  input.newInput {
    color: #1a1a1a;
    font-size: 1.5em;
    border: 1px solid rgba(coral, 0.3);
    border-radius: 2px;
    margin-right: 2px;
  }

  input.newInput:focus {
    border: 1px solid coral;
    outline: none;
  }

  .addButton {
    cursor: pointer;
    position: absolute;
    right: 0;
    width: 64px;
    color: coral;
    background: none;
    border: none;
  }
</style>
