import React from "react";

const Summary = () => {
  const childrenName: string[] = ["Mai", "Van", "Hoa"];
  return (
    <>
      <h1>Summary</h1>
      <h2>lesson2</h2>
      <ul className="list-group">
        {childrenName.map((name) => (
          <li className="list-group-item" key={name}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Summary;
