import { writable } from "svelte/store";

export type TodoListItem = { text: string; done?: boolean };

export type TodoList = Array<TodoListItem>;

export const todoList = writable<TodoList>([
  {
    text: "Eat breakfast",
  },
  { text: "Work out" },
  { text: "Meditate" },
]);
