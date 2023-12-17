import { useState } from "react";
import "./ListGroupV.css";

interface Props {
  items: string[];
  header: string;
  style: string;

  onSlecetedItem: (item: string) => void;
}

const ListGroupV = ({ items, header, style, onSlecetedItem }: Props) => {
  //Hook
  const [selectIndex, setSelectedIndex] = useState(-1);
  const attention = items.length === 0 && <p>please insert item</p>;
  return (
    <>
      <h1>{header}</h1>
      <ul className="list-group">
        {attention}
        {items.map((item, index) => (
          <li
            className={selectIndex === index ? style : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSlecetedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroupV;
