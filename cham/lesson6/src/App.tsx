import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Lesson2 from "./components/2-Understanding_the_Effect_Hook/Lesson2";
import EffectDependencies from "./components/3-Effect_Dependencies/EffectDependencies";
import EffectCleanUp from "./components/4-_Effect_Clean_Up/EffectCleanUp";

function App() {
  // const [category, setCategory] = useState("");
  return (
    <>
      <h1>
        {/* <Lesson2 /> */}

        {/* <div>
          <select
            className="form-select"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
          </select>
          <EffectDependencies category={category} />
        </div> */}

        <div>
          <EffectCleanUp />
        </div>
      </h1>
    </>
  );
}

export default App;
