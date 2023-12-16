import { useState } from "react";

const ButtonShow1 = () => {
  const [isVisible, setVisibilty] = useState(false);
  // ex3 [false, true]
  const [isApproved, setApproved] = useState(true);
  // ex2:
  let count = 0;
  const handleClick = () => {
    setVisibilty(true);
    // ex1: still false
    console.log(isVisible);
    // ex2:
    count++;
  };
  // ex1: here after finishing the handle event the isVisible will be true
  return (
    <div>
      <button onClick={handleClick}>show</button>
    </div>
  );
};

export default ButtonShow1;
