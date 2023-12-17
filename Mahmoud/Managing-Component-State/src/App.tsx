import { useState } from "react";
import ButtonShow1 from "./components/ButtonShow1";
import Cart from "./components/Cart";
import FullName from "./components/FullName";
import Massege from "./components/Massege";
import Massege2 from "./components/Massege2";
import NavBar from "./components/NavBar";
import SimplifyingUpdateLogicWithImmer from "./components/SimplifyingUpdateLogicWithImmer";
import UpdateArray from "./components/UpdateArray";
import UpdateObject from "./components/UpdateObject";
import UpdatingArrayOfObject from "./components/UpdatingArrayOfObject";
import UpdatingNestedObject from "./components/UpdatingNestedObject";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
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

      <SimplifyingUpdateLogicWithImmer />

      <NavBar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}

export default App;
