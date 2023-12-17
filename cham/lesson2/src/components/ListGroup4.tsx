import { useState } from "react";
// Props: input するデータの形式を決める
interface Props {
  items: string[];
  header: string;

  onSlecetedItem: (item: string) => void;
}
const ListGroup3 = ({ items, header, onSlecetedItem }: Props) => {
  // Hook
  const [selectIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>please insert item</p>;

  return (
    <>
      <h1>{header}</h1>
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

export default ListGroup3;
