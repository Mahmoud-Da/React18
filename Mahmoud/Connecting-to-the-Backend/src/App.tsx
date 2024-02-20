import { useState } from "react";
import Lesson1 from "./components/2-Understanding_the_Effect_Hook/Lesson1";
import Lesson2 from "./components/2-Understanding_the_Effect_Hook/Lesson2";
import ProductList from "./components/3-Effect_Dependencies/ProductList";
import EffectClean from "./components/4-_Effect_Clean_Up/EffectClean";
import FetchingData from "./components/5-_Fetching_Data/FetchingData";
import UnderstandingHttpRequests from "./components/6-_Understanding_HTTP_Requests/UnderstandingHttpRequests";
import HandlingErrors from "./components/7-_Handling_Errors/HandlingErrors";
import WorkingWithAsyncAndAwait from "./components/8-_Working_with_Async_and_Await/WorkingWithAsyncAndAwait";
import CancellingAFetchRequest from "./components/9-_Cancelling_a_Fetch_Request/CancellingAFetchRequest";

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

      <h4>8-_Working_with_Async_and_Await</h4>
      <WorkingWithAsyncAndAwait />

      <h4>9-_Cancelling_a_Fetch_Request</h4>
      <CancellingAFetchRequest />
    </>
  );
}

export default App;
