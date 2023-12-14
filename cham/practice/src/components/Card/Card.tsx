import { useState } from "react";
import { IoLogoApple } from "react-icons/io5";
import styles from "./Card.module.css";
import girl1 from "../../assets/girl1.png";

interface Props {
  items: string[];
  header: string;
  style: string;
  text: string;
  navList: string[];

  onSlecetedItem: (item: string) => void;
}

const Card = ({
  items,
  navList,
  header,
  style,
  text,
  onSlecetedItem,
}: Props) => {
  //Hook
  const [selectIndex, setSelectedIndex] = useState(-1);
  const attention = items.length === 0 && <p>please insert item</p>;

  return (
    <>
      <div id={styles.navbar}>
        <ul className={styles["navbar ul li"]}>
          <IoLogoApple className={styles.apple} />

          {attention}
          {navList.map((item, index) => (
            <li
              className={selectIndex === index ? style : styles.text}
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
        {/* <form className={styles["navbar form"]} role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success">Search</button>
        </form> */}
      </div>

      <h1>{header}</h1>
      <img src={girl1} className="card-img-top" alt="..." />
      <div className={styles.text}>
        <p>{text}</p>
      </div>

      <ul className={styles["list-group"]}>
        {attention}
        {items.map((item, index) => (
          <li
            className={selectIndex === index ? style : styles.text}
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
