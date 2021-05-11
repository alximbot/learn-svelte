<script type="ts">
  import { createEventDispatcher } from "svelte";
  export let value: string;

  const dispatch = createEventDispatcher();
  const dispatchAddItem = (item: string) => dispatch("addItem", item);
</script>

<div class="container">
  <input
    class="newInput"
    placeholder=""
    bind:value
    on:keypress={(e) => e.key === "Enter" && !!value && dispatchAddItem(value)}
  />
  {#if !!value}
    <button class="addButton" on:click={() => dispatchAddItem(value)}
      >Add</button
    >
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;
    display: grid;
    margin-bottom: 40px;

    > * {
      height: 100%;
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

    .newInput {
      color: #1a1a1a;
      font-size: 1.5em;
      border: 1px solid rgba(coral, 0.3);
      border-radius: 2px;
      margin-right: 2px;

      &:focus {
        border: 1px solid coral;
        outline: none;
      }
    }
  }
</style>
