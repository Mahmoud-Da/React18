import React from "react";

interface Props {
  itemLists: [];
  onClear: () => void;
  removeOneItem: () => [] | void;
}

const ArrayList = ({ itemLists, onClear, removeOneItem }: Props) => {
  return (
    <>
      <div>ArrayList</div>
      <ul>
        {itemLists.map((itemList) => (
          <li> {itemList}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
      <button onClick={removeOneItem}>RemoveOneItem</button>
    </>
  );
};

export default ArrayList;
