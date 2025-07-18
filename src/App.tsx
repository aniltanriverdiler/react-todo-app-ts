import { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import type { ItemsProps } from "./types/types";
import { nanoid } from "nanoid";
import {
  Container,
  Header,
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
    if (newItemContent.trim() === "") return;

    const newList: ItemsProps = {
      id: nanoid(),
      content: newItemContent,
      done: false,
    };
    setItems((prevItems) => [...prevItems, newList]);
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
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  return (
    <Container>
      <Header>
        <h1>Focus & Conquer</h1>
        <p>Stay on track and beat distractions to reach your goals.</p>
      </Header>

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
  );
}

export default App;
