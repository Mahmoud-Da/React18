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
import WorkingWithAsyncAndAwait from "./components/WorkingWithAsyncAndAwait";
import CancellingAFetchRequest from "./components/CancellingAFetchRequest";
import ShowingALoadingIndicator from "./components/ShowingALoadingIndicator";
import DeletetingData from "./components/DeletetingData";
import DeletetingData1 from "./components/DeletetingData1";
import CreatingData from "./components/CreatingData";
import UpdatingData from "./components/UpdatingData";
import CreatingData1 from "./components/CreatingData1";
import DeletetingData2 from "./components/DeletetingData2";
import UpdatingData1 from "./components/UpdatingData1";
import UpdatingData2 from "./components/UpdatingData2";
import ExtractingTheUserService from "./components/ExtractingTheUserService";
import Practice from "./components/Practice";
import ExtractingAReusableApiClient from "./components/ExtractingAReusableApiClient";
import Summary from "./components/Summary";

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
      {/* <HandingErrors /> */}
      {/* <WorkingWithAsyncAndAwait /> */}
      {/* <CancellingAFetchRequest /> */}
      {/* <ShowingALoadingIndicator /> */}
      {/* <DeletetingData /> */}
      {/* <DeletetingData1 /> */}
      {/* <CreatingData /> */}
      {/* <UpdatingData /> */}
      {/* <CreatingData1 /> */}
      {/* <DeletetingData2 /> */}
      {/* <UpdatingData1 /> */}
      {/* <UpdatingData2 /> */}
      {/* <ExtractingTheUserService />
      <ExtractingAReusableApiClient /> */}
      <Summary />
    </>
  );
}

export default App;
