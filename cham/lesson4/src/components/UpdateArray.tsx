import { useState } from "react";

const UpdateArray = () => {
  const [alphapets, setAlphapets] = useState(["a", "b"]);

  const handleClick = () => {
    // ["a", "b"]
    // 追加 (c)
    setAlphapets([...alphapets, "c"]);
    // 削除 (b)
    setAlphapets(alphapets.filter((alphapet) => alphapet != "b"));
    // 更新
    setAlphapets(
      alphapets.map((alphapet) => (alphapet === "a" ? "d" : alphapet))
    );
    // 全て削除
    setAlphapets([]);
  };

  return (
    <>
      {alphapets}
      <br />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateArray;
