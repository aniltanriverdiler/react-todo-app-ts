import { useEffect } from "react";
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
    console.log("Yeni item eklendi:", newList); 
    setItems(prevItems => [...prevItems, newList]);  
    setNewItemContent("");
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, newContent: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, content: newContent } : item
      )
    );
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    console.log("Kaydedilen veriler", items);
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

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
          <TodoList
            items={items}
            toggleDone={toggleDone}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        </ListContainer>
      </Container>
    </>
  );
}

export default App;
