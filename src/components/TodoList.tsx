import React from "react";
import type { TodoListProps } from "../types/types";
import { List, EmptyState } from "../styles/StyledComponents";
import TodoItem from "./TodoItem";

function TodoList({
  items,
  toggleDone,
  deleteItem,
  updateItem,
}: TodoListProps) {
  return (
    <List>
      <h2>Your Tasks</h2>

      {items.length === 0 ? (
        <EmptyState>
          <p>You have no tasks yet</p>
          <p>Add a new task to get started</p>
        </EmptyState>
      ) : (
        items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            toggleDone={toggleDone}
            deleteItem={() => deleteItem(item.id)}
            updateItem={updateItem}
          />
        ))
      )}
    </List>
  );
}

export default TodoList;
