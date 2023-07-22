// if we want to have a real data we us use Props(property: the input to our component)

import { useState } from "react";
import styles from "./ListGroup2.module.css";

interface Props {
  items: string[];
  heading: string;
  onSlecetItem: (item: string) => void;
}

function ListGroup2({ items, heading, onSlecetItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/* <ul className={styles["list-group2"]}> */}
      {/* to avoid using[] we change the Css class to Camel Notation */}
      {/* <ul className={styles.listGroup}> */}
      {/* to add multi classes */}
      <ul className={[styles.listGroup, styles.fontFamily].join()}>
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
export default ListGroup2;
