import React from "react";
import type { TodoItemProps } from "../types/types";
import { ListBox } from "../styles/StyledComponents";
import { Button, Container } from "react-bootstrap";

function TodoItem({ item, toggleDone, deleteItem }: TodoItemProps) {
  return (
    <>
      <Container>
        <ListBox done={item.done}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleDone(item.id)}
          />
          <span> {item.content} </span>
        </ListBox>
        <Button variant="dark" onClick={() => deleteItem(item.id)}>
          Delete
        </Button>
      </Container>
    </>
  );
}

export default TodoItem;
