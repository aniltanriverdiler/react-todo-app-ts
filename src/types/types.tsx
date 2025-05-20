export interface ItemsProps {
  id: string;
  content: string;
  done: boolean;
}

export interface InputFormProps {
  newItemContent: string;
  setNewItemContent: (value: string) => void;
  addItem: () => void;
}

export interface TodoItemProps {
  item: ItemsProps;
  toggleDone: (id: string) => void;
  deleteItem: (id: string) => void;
}

export interface TodoListProps {
  items: ItemsProps[];
  toggleDone: (id: string) => void;
  deleteItem: (id: string) => void;
}
