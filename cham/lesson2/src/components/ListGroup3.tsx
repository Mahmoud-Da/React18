import { useState } from "react";

const ListGroup3 = () => {
  let items: string[] = [
    "Html",
    "Css",
    "GitHub",
    "JavaScript",
    "TypeScript",
    "React",
  ];

  // Hook
  const [selectIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>please insert item</p>;

  return (
    <>
      <h1>Programming Languge Group</h1>
      <ul className="list-group">
        {message}
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => setSelectedIndex(0)}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup3;
