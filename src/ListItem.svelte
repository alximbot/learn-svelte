<script type="ts">
  import { createEventDispatcher } from "svelte";
  export let text: string;

  const dispatch = createEventDispatcher();
</script>

<input bind:value={text} />
<button on:click={() => dispatch("remove")}>✖️</button>

<style type="scss">
  input {
    color: #6c6c6c;
    font-size: 1.5em;
    border: none;
    outline: none;

    &:focus {
      color: #1a1a1a;
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
</style>
