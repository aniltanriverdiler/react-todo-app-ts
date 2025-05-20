import React from "react";
import { TextField, Button } from "../styles/StyledComponents";
import type { InputFormProps } from "../types/types";

function InputForm({
  newItemContent,
  setNewItemContent,
  addItem,
}: InputFormProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <>
      <TextField
        type="text"
        placeholder="Add a new task..."
        value={newItemContent}
        onChange={(e) => setNewItemContent(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={addItem}>
        Add Task
      </Button>
    </>
  );
}

export default InputForm;