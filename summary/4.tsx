// Vnilla Css
import "./ListGroup.css";

function ListGroup1() {
  return <ul className="list-group"></ul>;
}

// Css Modules
import styles from "./ListGroup.module.css";

function ListGroup2() {
  return <ul className={styles.listGroup}></ul>;
}

// CSS-IN-JS
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

function listGroup3() {
  return <List></List>;
}
