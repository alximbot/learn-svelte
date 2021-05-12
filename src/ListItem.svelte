<script type="ts">
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  export let text: string;
  export let done: boolean;

  const dispatch = createEventDispatcher();
</script>

<div in:fly={{ y: 100, duration: 1000 }} class="container">
  <slot name="beforeText" />
  <input bind:value={text} class:done />
  <slot name="afterText"><div /></slot>
  <button on:click={() => dispatch("remove")}>✖️</button>
</div>

<style type="scss">
  .container {
    display: grid;
    grid-template-columns: auto 1fr auto 30px;
    align-items: center;

    input {
      color: #6c6c6c;
      font-size: 1.5em;
      border: none;
      outline: none;
      margin: 0;

      &:focus {
        color: #1a1a1a;
      }

      &.done {
        text-decoration: line-through;
      }
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
