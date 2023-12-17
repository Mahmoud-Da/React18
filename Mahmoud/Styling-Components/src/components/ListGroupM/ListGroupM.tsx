import { useState } from "react";
import styles from "./ListGroupM.module.css";
interface Props {
  items: string[];
  heading: string;

  // (item: string) => void
  onSelectedItem: (item: string) => void;
}

function ListGroupM({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useState;
  return (
    <>
      <h1>{heading}</h1>
      {/* <ul className="list-group"> */}
      {/* <ul className={styles["list-group"]}> */}
      {/* <ul className={styles.listGroup}> */}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
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
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupM;
