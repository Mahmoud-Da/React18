import { useState } from "react";

const ButtonShow = () => {
  const [isLili, setIsLili] = useState(false);
  const [isCham, setIsCham] = useState(false);
  [false, false];
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(count);
  };

  return <button onClick={handleClick}>Show</button>;
};

export default ButtonShow;
