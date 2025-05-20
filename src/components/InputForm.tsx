import React from "react";
import { TextField } from "../styles/StyledComponents";
import { Button } from "react-bootstrap";
import type { InputFormProps } from "../types/types";

function InputForm({
  newItemContent,
  setNewItemContent,
  addItem,
}: InputFormProps) {
  return (
    <>
      <TextField
        type="text"
        placeholder="Add a new item..."
        value={newItemContent}
        onChange={(e) => setNewItemContent(e.target.value)}
      />
      <Button variant="dark" onClick={addItem}>
        Add
      </Button>
    </>
  );
}

export default InputForm;
