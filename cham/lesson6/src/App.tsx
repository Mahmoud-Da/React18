import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Lesson2 from "./components/2-Understanding_the_Effect_Hook/Lesson2";
import EffectDependencies from "./components/3-Effect_Dependencies/EffectDependencies";
import EffectCleanUp from "./components/4-_Effect_Clean_Up/EffectCleanUp";
import FetchData from "./components/5-_Fetching_Data/FetchData";
import UnderstandingHttpRequests from "./components/6-_Understanding_HTTP_Requests/UnderstandingHttpRequests";
import HandlingErrors from "./components/7-_Handling_Errors/HandlingErrors";
import WorkingWithAsyncAndAwait from "./components/8-_Working_with_Async_and_Await/WorkingWithAsyncAndAwait";
import CancellingAFetchRequest from "./components/9-_Cancelling_a_Fetch_Request/CancellingAFetchRequest";
import ShowingALoadingIndicator from "./components/10-_Showing_a_Loading_Indicator/ShowingALoadingIndicator";
import DeletingData from "./components/11-_Deleting_Data/DeletingData";
import CreatingData from "./components/12-_Creating_Data/CreatingData";
import UpdatingData from "./components/13-_Updating_Data/UpdatingData";
import ExtractingAReusableApiClient from "./components/14-_Extracting_a_Reusable_API_Client/ExtractingAReusableApiClient";

function App() {
  const [category, setCategory] = useState("");
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

        {/* <div>
          <EffectCleanUp />
        </div> */}
        {/* <h4>Users</h4> */}
        {/* <FetchData /> */}

        {/* <UnderstandingHttpRequests /> */}

        {/* <HandlingErrors /> */}
        {/* <WorkingWithAsyncAndAwait /> */}

        {/* <CancellingAFetchRequest /> */}
        {/* <ShowingALoadingIndicator /> */}

        {/* <DeletingData /> */}

        {/* <CreatingData /> */}

        {/* <UpdatingData /> */}

        <ExtractingAReusableApiClient />
      </h1>
    </>
  );
}

export default App;
