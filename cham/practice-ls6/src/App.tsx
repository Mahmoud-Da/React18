import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Lesson1 from "./components/Lesson1";
import Lesson2 from "./components/Lesson2";
import EffectDependencies from "./components/EffectDependencies";
import EffectCleanUp from "./components/EffectCleanUp";
import FetchData from "./components/FetchData";
import FetchData1 from "./components/FetchData1";
import UnderstandingHttpRequests from "./components/UnderstandingHttpRequests";
import HandingErrors from "./components/HandingErrors";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      {/* <Lesson1 />
      <Lesson2 /> */}
      {/* <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <EffectDependencies category={category} /> */}
      {/* <EffectCleanUp /> */}
      {/* <FetchData /> */}
      {/* <FetchData1 /> */}
      {/* <UnderstandingHttpRequests /> */}
      <HandingErrors />
    </>
  );
}

export default App;
