import React, { useState } from "react";
import type { TodoItemProps } from "../types/types";
import { ListBox } from "../styles/StyledComponents";
import { Button, Container } from "react-bootstrap";

function TodoItem({ item, toggleDone, deleteItem, updateItem }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(item.content);

  return (
    <>
      <Container>
        <ListBox done={item.done}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleDone(item.id)}
          />
          {isEditing ? (
            <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <span> {item.content} </span>
          )}
        </ListBox>
        {isEditing ? (
          <>
            <Button
              variant="success"
              onClick={() => {
                updateItem(item.id, editedContent);
                setIsEditing(false);
              }}
            >
              Save
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setIsEditing(false);
                setEditedContent(item.content); // Geri al
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button variant="secondary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
        <Button variant="dark" onClick={() => deleteItem(item.id)}>
          Delete
        </Button>
      </Container>
    </>
  );
}

export default TodoItem;
