import React, { useState } from "react";

const UpdateArray = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleClick = () => {
    setNumbers([...numbers, 10]);
    setNumbers(numbers.filter((number) => number != 1));
    setNumbers(numbers.map((number) => (number === 2 ? 8 : number)));
  };
  return (
    <>
      <h2 className="mb-3">UpdateArray </h2>
      {numbers}
      <button className="btn btn-warning" onClick={handleClick}>
        Button
      </button>
    </>
  );
};

export default UpdateArray;
