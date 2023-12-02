import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
// ListGroup6(props: Props) we need to do that props.heading
// to clean our code
function ListGroup6({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useState;
  return (
    <>
      <h1>{heading}</h1>
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

export default ListGroup6;
