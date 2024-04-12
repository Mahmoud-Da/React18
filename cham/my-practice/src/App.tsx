import { useState } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import ArrayList from "./components/ArrayList";
import UpdateArray from "./components/UpdateArray";
import Form from "./components/Form/Form";
import Form2 from "./components/Form/Form2";
import Form3_1 from "./components/Form/Form3_1";
import Form3 from "./components/Form/Form3";
import Form4 from "./components/Form/Form4";
import UpdateObject from "./components/UpdateObject";
import UpdateNastedArray from "./components/UpdateNastedArray";


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
      {/* <ColorBox />
      <TodoList /> */}
      {/* <ArrayList
        itemLists={items.map(({ id, title }) => ({ [id]: title }))}
        onClear={() => setItems([])}
        removeOneItem={() => setItems((items) => [...items.slice(0, -1)])}
      /> */}
      <br />
      <br />
      {/* <UpdateArray /> */}
      <br />
      <UpdateObject />
      <br />
      {/* <Form /> */}
      {/* <br />
      <br />
      <Form2 />
      <p>-------------------------------------------</p>
      <br />
      <Form3_1 />
      <br />
      <br />
      <Form3 />
      <br />
      <p>-------------------------------------------</p> */}
      <Form4 />
      <br />
      <UpdateNastedArray />
    </>
  );
}

export default App;
