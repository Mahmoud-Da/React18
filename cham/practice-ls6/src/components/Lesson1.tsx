import React from "react";

const Lesson1 = () => {
  //Pureメソッド
  const addnumber = (a: number, b: number) => {
    return a + b;
  };

  // imPureメソッド
  let total = 0;
  const add = (value: number) => {
    total += value;
  };
  return (
    <>
      {/*Pureメソッド*/}
      <h1>
        <div>{addnumber(5, 5)}</div>
      </h1>

      {/*imPureメソッド*/}
      <div>{add(1)}</div>
    </>
  );
};

export default Lesson1;
