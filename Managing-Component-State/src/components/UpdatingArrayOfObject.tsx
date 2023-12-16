import { useState } from "react";

const UpdatingArrayOfObject = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      {bugs.map((bug) => (
        <div key={bug.id}>
          {`Bug ID: ${bug.id}, Title: ${bug.title}, Fixed: ${bug.fixed}`}
        </div>
      ))}
      <div onClick={handleClick}>Click</div>
    </>
  );
};

export default UpdatingArrayOfObject;
