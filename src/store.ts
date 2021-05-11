import { writable } from "svelte/store";

export const todoList = writable(["Eat breakfast", "Work out", "Meditate"]);
