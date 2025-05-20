import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import type { ItemsProps } from "./types/types";
import { nanoid } from "nanoid";
import {
  Container,
  InputContainer,
  ListContainer,
} from "./styles/StyledComponents";

function App() {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [newItemContent, setNewItemContent] = useState<string>("");
  const toggleDone = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const addItem = () => {
    const newList: ItemsProps = {
      id: nanoid(),
      content: newItemContent,
      done: false,
    };
    setItems([...items, newList]);
    setNewItemContent("");
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <Container>
        <InputContainer>
          <InputForm
            newItemContent={newItemContent}
            setNewItemContent={setNewItemContent}
            addItem={addItem}
          />
        </InputContainer>
        <ListContainer>
          <TodoList items={items} toggleDone={toggleDone} deleteItem={deleteItem} />
        </ListContainer>
      </Container>
    </>
  );
}

export default App;
