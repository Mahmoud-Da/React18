import { useState } from "react";
import { styled } from "styled-components";

const List = styled.ul`
  list-style: disc;
  padding: 0;
  color: brown;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  background: ${(props) => props.active && "yellow"};
`;

interface Props {
  items: string[];
  header: string;
  style: string;

  onSlecetedItem: (item: string) => void;
}

const ListGroupS = ({ items, header, style, onSlecetedItem }: Props) => {
  //Hook
  const [selectIndex, setSelectedIndex] = useState(-1);
  const attention = items.length === 0 && <p>please insert item</p>;
  return (
    <>
      <h1>{header}</h1>
      <List>
        {attention}
        {items.map((item, index) => (
          <ListItem
            active={selectIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSlecetedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroupS;
