// if we want to have a real data we us use Props(property: the input to our component)

import { useState } from "react";
import "./ListGroup1.css";

interface Props {
  items: string[];
  heading: string;
  onSlecetItem: (item: string) => void;
}

function ListGroup1({ items, heading, onSlecetItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group1">
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
              onSlecetItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;
