import { useState } from "react";

const UpdateNastedArray = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  // id: 1の fixed: trueに変更
  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <>
      {bugs.map((bug) => (
        <div key={bug.id}>
          {`Bug Id: ${bug.id}, Title: ${bug.title},Fixed: ${bug.fixed},`}
        </div>
      ))}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateNastedArray;
