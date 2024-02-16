import { useState } from "react";
import Lesson1 from "./components/2-Understanding_the_Effect_Hook/Lesson1";
import Lesson2 from "./components/2-Understanding_the_Effect_Hook/Lesson2";
import ProductList from "./components/3-Effect_Dependencies/ProductList";
import EffectClean from "./components/4-_Effect_Clean_Up/EffectClean";
import FetchingData from "./components/5-_Fetching_Data/FetchingData";
import UnderstandingHttpRequests from "./components/6-_Understanding_HTTP_Requests/UnderstandingHttpRequests";
import HandlingErrors from "./components/7-_Handling_Errors/HandlingErrors";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <h4>2-Understanding_the_Effect_Hook</h4>
      <Lesson1 />
      <Lesson2 />

      <h4>3-Effect_Dependencies</h4>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />

      <h4>4-Effect_Clean_Up</h4>
      <EffectClean />

      <h4>5-Fetching_Data</h4>
      <FetchingData />

      <h4>6-Understanding_HTTP_Requests</h4>
      <UnderstandingHttpRequests />

      <h4>7-_Handling_Errors</h4>
      <HandlingErrors />
    </>
  );
}

export default App;
