import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  color: green;
`;
interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => props.active && "blue"};
`;
interface Props {
  items: string[];
  heading: string;

  // (item: string) => void
  onSelectedItem: (item: string) => void;
}

function ListGroupS({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useState;
  return (
    <>
      {/* inline style */}
      <h1 style={{ backgroundColor: "yellow" }}>{heading}</h1>
      <List>
        {items.length === 0 && <p> No Item found</p>}
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroupS;
