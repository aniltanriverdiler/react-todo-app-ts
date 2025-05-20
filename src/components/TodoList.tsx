import React from "react";
import type { TodoListProps } from "../types/types";
import { List } from "../styles/StyledComponents";
import TodoItem from "./TodoItem";

function TodoList({ items, toggleDone, deleteItem }: TodoListProps) {
  return (
    <List>
      <h2>TodoList</h2>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} toggleDone={toggleDone} deleteItem={() => deleteItem(item.id)} />
      ))}
    </List>
  );
}

export default TodoList;
