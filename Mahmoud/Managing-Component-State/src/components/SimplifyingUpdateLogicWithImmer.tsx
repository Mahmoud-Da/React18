import { useState } from "react";
import produce from "immer";

const SimplifyingUpdateLogicWithImmer = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // using immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      {bugs.map((bug) => (
        <div key={bug.id}>
          {`Bug ID: ${bug.id}, Title: ${bug.title}, Fixed: ${bug.fixed}`}
        </div>
      ))}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default SimplifyingUpdateLogicWithImmer;
