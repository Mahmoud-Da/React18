import ButtonShow1 from "./components/ButtonShow1";
import FullName from "./components/FullName";
import Massege from "./components/Massege";
import Massege2 from "./components/Massege2";
import UpdateArray from "./components/UpdateArray";
import UpdateObject from "./components/UpdateObject";
import UpdatingArrayOfObject from "./components/UpdatingArrayOfObject";
import UpdatingNestedObject from "./components/UpdatingNestedObject";

function App() {
  return (
    <>
      <ButtonShow1 />

      <FullName />

      {/*  we got the markup */}
      <Massege />
      <Massege />
      <Massege />

      {/* check in console how many times component called */}
      <Massege2 />

      <UpdateObject />

      <UpdatingNestedObject />

      <UpdateArray />

      <UpdatingArrayOfObject />
    </>
  );
}

export default App;
