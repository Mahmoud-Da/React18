import React, { useState } from "react";

const UpdateObject = () => {
  const [food, setFood] = useState({ food: "humberger", price: 10 });
  const handleClick = () => {
    setFood({ ...food, price: food.price + 5 });
  };
  return (
    <>
      <h2>UpdateObject</h2>
      <h3>
        {food.food}:{food.price}
      </h3>
      <button className="btn btn-danger" onClick={handleClick}>
        Click
      </button>
    </>
  );
};

export default UpdateObject;
