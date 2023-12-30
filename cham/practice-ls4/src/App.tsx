import { useState } from "react";
import Button from "./components/Button";
import FullName from "./components/FullName";
import UpdateArray from "./components/UpdateArray";
import UpdateNastedArray from "./components/UpdateNastedArray";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
function App() {
  const [cartItems, setCartItems] = useState([
    "NewYork",
    "Tokyo",
    "Osaka",
    "Berlin",
    "Hanoi",
  ]);
  return (
    <>
      <Button />
      <br />
      <br />
      <FullName />
      <br />
      <br />
      <UpdateArray />
      <br />
      <br />
      <UpdateNastedArray />
      <br />
      <br />
      <NavBar cartItemCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => setCartItems([])}
        removeOneItem={() =>
          setCartItems((cartItems) => [...cartItems.slice(0, -1)])
        }
      />
    </>
  );
}

export default App;
