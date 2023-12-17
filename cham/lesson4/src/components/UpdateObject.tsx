import { useState } from "react";

const UpdateObject = () => {
  const [drink, setDrink] = useState({
    title: "ミルクティー",
    price: 5,
  });

  // 方法１
  const newDrink1 = {
    title: drink.title,
    price: 6,
  };

  //方法２
  const newDrink2 = {
    ...drink,
    price: 6,
  };
  const handleClick = () => {
    // 方法１
    setDrink(newDrink1);
    // 方法2
    setDrink(newDrink2);
    //　ベスト方法
    setDrink({ ...drink, price: 6 });
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
