import { useState } from "react";

const Button = () => {
  const [flower, setFlower] = useState("Rose");
  const [tree, setTree] = useState("Rose");

  const handleClick = () => {
    setFlower(flower.replace("Rose", "Flower"));
    setTree(tree.replace("Rose", "Leaf"));
  };
  return (
    <>
      {flower}
      <br />
      {tree}
      <br />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Button;
