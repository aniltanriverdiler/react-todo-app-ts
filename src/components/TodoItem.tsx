import React, { useState } from "react";
import type { TodoItemProps } from "../types/types";
import { 
  ListBox, 
  ActionButton, 
  TodoItemContainer,
  ActionsContainer
} from "../styles/StyledComponents";

function TodoItem({ item, toggleDone, deleteItem, updateItem }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(item.content);

  const handleSave = () => {
    if (editedContent.trim() !== "") {
      updateItem(item.id, editedContent);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedContent(item.content);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <TodoItemContainer>
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
            onKeyDown={handleKeyPress}
            autoFocus
          />
        ) : (
          <span>{item.content}</span>
        )}
      </ListBox>
      
      <ActionsContainer>
        {isEditing ? (
          <>
            <ActionButton
              variant="success"
              onClick={handleSave}
            >
              Save
            </ActionButton>
            <ActionButton
              variant="secondary"
              onClick={handleCancel}
            >
              Cancel
            </ActionButton>
          </>
        ) : (
          <ActionButton 
            variant="secondary" 
            onClick={() => setIsEditing(true)}
          >
            Edit
          </ActionButton>
        )}
        <ActionButton 
          variant="danger" 
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </ActionButton>
      </ActionsContainer>
    </TodoItemContainer>
  );
}

export default TodoItem;