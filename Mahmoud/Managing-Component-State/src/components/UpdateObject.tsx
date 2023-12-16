import { useState } from "react";

const UpdateObject = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // we can't modify value of object
    // ex1
    // this will not work
    drink.price = 6;
    setDrink(drink);

    // ex2
    // to solve that we need to create new object
    const newDrink = {
      title: drink.title,
      price: 6,
    };
    setDrink(newDrink);

    // if have too much property it`s take time to copy all property
    // here we sprate opreater (...) which means copy all the object property
    const newDrink2 = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);

    // now we don`t have to create new object
    setDrink({ ...drink, price: 6 });
  };
  return (
    <>
      {/* ex1: nothing will render */}
      {drink.price}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateObject;
