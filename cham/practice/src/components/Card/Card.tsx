import { useState } from "react";
import styles from "./Card.module.css";
import girl1 from "../../assets/girl1.png";

interface Props {
  items: string[];
  header: string;
  style: string;
  text: string;

  onSlecetedItem: (item: string) => void;
}

const Card = ({ items, header, style, text, onSlecetedItem }: Props) => {
  //Hook
  const [selectIndex, setSelectedIndex] = useState(-1);
  const attention = items.length === 0 && <p>please insert item</p>;
  return (
    <>
      <h1>{header}</h1>
      <img src={girl1} className="card-img-top" alt="..." />
      <div className="card-body">
        <p>{text}</p>
      </div>

      <ul className={styles["list-group"]}>
        {attention}
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index ? style : styles["list-group-item"]
            }
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

export default Card;
