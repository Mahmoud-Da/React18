import React, { useState } from "react";

const UpdateObject = () => {
  const [drink, setDrink] = useState({
    title: "ミルクティー",
    price: 4,
  });

  //方法１
  const newDrink1 = {
    title: drink.title,
    price: 5,
  };
  //方法２
  const newDrink2 = {
    ...drink,
    price: 7,
  };

  const handleClick = () => {
    //方法１
    setDrink(newDrink1);
    //方法２
    setDrink(newDrink2);
    //ベスト方法
    setDrink({ ...drink, price: 7 });
  };

  return (
    <>
      {drink.title}: {drink.price}
      <br />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateObject;
