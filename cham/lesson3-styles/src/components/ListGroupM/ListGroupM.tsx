import { useState } from "react";
import styles from "./ListGroupM.module.css";
interface Props {
  items: string[];
  header: string;
  style: string;

  onSlecetedItem: (item: string) => void;
}
const ListGroupM = ({ items, header, style, onSlecetedItem }: Props) => {
  // Hook
  const [selectIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>please insert item</p>;

  return (
    <>
      <h1>{header}</h1>
      {/* <ul className={styled["list-group"]}> */}
      <ul className={styles.listGroup}>
        {message}
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

export default ListGroupM;
