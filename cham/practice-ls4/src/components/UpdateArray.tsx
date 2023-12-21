import { useState } from "react";

const UpdateArray = () => {
  const [numbers, setnumbers] = useState([0, 1, 2]);
  const [numbers1, setnumbers1] = useState([0, 1, 2]);
  const [numbers2, setnumbers2] = useState([0, 1, 2]);
  const handleClick = () => {
    //追加（４）
    setnumbers([...numbers, 4]);
    //削除
    setnumbers1(numbers1.filter((number) => number != 0));
    //更新
    setnumbers2(numbers2.map((number) => (number === 1 ? 4 : number)));
  };
  return (
    <>
      {numbers}
      <br />
      {numbers1}
      <br />
      {numbers2}
      <br />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateArray;
