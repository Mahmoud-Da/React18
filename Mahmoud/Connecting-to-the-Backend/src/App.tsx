import { useState } from "react";
import Lesson1 from "./components/Understanding_the_Effect_Hook/Lesson1";
import Lesson2 from "./components/Understanding_the_Effect_Hook/Lesson2";
import ProductList from "./components/Understanding_the_Effect_Hook/ProductList";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <Lesson1 />
      <Lesson2 />

      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
