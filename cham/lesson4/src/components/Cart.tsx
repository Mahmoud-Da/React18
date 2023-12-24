import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
  removeOneItem: () => string[] | void;
}
const Cart = ({ cartItems, onClear, removeOneItem }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
      <button onClick={removeOneItem}>removeOneItem</button>
    </>
  );
};

export default Cart;
