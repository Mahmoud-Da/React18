import { useState } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import ArrayList from "./components/ArrayList";

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "I love Apple!" },
    { id: 2, title: "I love Orange!" },
    { id: 3, title: "I love Strawbery!" },
    { id: 4, title: "I love Cherry!" },
  ]);
  return (
    <>
      <h1>Hello Kitty</h1>
      <ColorBox />
      <TodoList />
      <ArrayList
        itemLists={items.map(({ id, title }) => ({ [id]: title }))}
        onClear={() => setItems([])}
        removeOneItem={() => setItems((items) => [...items.slice(0, -1)])}
      />
    </>
  );
}

export default App;
