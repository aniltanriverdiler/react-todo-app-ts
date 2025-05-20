import React from "react";
import type { TodoListProps } from "../types/types";
import { List } from "../styles/StyledComponents";
import TodoItem from "./TodoItem";

function TodoList({ items, toggleDone, deleteItem, updateItem }: TodoListProps) {
  return (
    <List>
      <h2>TodoList</h2>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} toggleDone={toggleDone} deleteItem={() => deleteItem(item.id)} updateItem={updateItem} />
      ))}
    </List>
  );
}

export default TodoList;
