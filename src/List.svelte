<script lang="ts">
  let list: string[] = ["Eat breakfast", "Work out", "Meditate"];
  let newItem: string = "";

  function addToList() {
    list = [...list, newItem];
    newItem = "";
  }
</script>

<div class="newInputContainer">
  <input class="newInput" placeholder="" bind:value={newItem} />
  <button class="addButton" on:click={addToList}>Add</button>
</div>

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

  .listInputs input {
    color: #6c6c6c;
    font-size: 1.5em;
    border: none;
    outline: none;
  }

  .listInputs :focus {
    color: #1a1a1a;
  }

  .newInputContainer {
    display: grid;
    grid-template-columns: auto 80px;
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
  }
</style>
