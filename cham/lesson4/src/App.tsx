import { useState } from "react";
import ButtonShow from "./components/ButtonShow";
import Cart from "./components/Cart";
import FullName from "./components/FullName";
import Massege from "./components/Massege";
import NavBar from "./components/NavBar";
import UpdateArray from "./components/UpdateArray";
import UpdateNastedArray from "./components/UpdateNastedArray";
import UpdateNastedObject from "./components/UpdateNastedObject";
import UpdateObject from "./components/UpdateObject";

function App() {
  const [cartItem, setCartItem] = useState([
    "東京",
    "大阪",
    "京都",
    "北海道",
    "沖縄",
  ]);
  return (
    <>
      {/* <ButtonShow /> */}
      {/* <FullName /> */}

      {/* <Massege />
      <Massege />
      <Massege />
      <Massege /> */}

      {/* <UpdateObject /> */}

      {/* <UpdateNastedObject /> */}
      {/* <UpdateArray /> */}
      {/* <UpdateNastedArray /> */}

      <NavBar cartItemCount={cartItem.length} />
      <Cart
        cartItems={cartItem}
        onClear={() => setCartItem([])}
        removeOneItem={() =>
          setCartItem((cartItem) => [...cartItem.slice(0, -1)])
        }
      />
    </>
  );
}

export default App;
