import { useState } from "react";

function ListGroup5() {
  let items: string[] = [
    "New Yord",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
  // to keep tracking of the index -1 (nothing selceted) 0 means the first index
  // let selectedIndex = -1;

  // is a hook to tell react that selectedIndex will be updated
  // ps: if we have multi list Group every list group will have it owns state
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // setSelectedIndex is the updater
  useState;
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p> No Item found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup5;
