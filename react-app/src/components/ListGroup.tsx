import { MouseEvent, useState } from "react";

function ListGroup2() {
  return (
    // empty brackets represents Fragment Element
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

function ListGroup3() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // better way to achive the same result of condition (if we don't have to use parameters)
  // a better logic than using null
  // true && "moody" => "moody"
  // false && "moody" => false (nothing will return)
  const message = items.length === 0 && <p>No item Found</p>;
  // or even store the logic inside a function to be able to use parameter if we want
  const getMessage = (parameter: string) => {
    return items.length === 0 ? <p>No item found{parameter}</p> : null;
    // return items.length === 0 && <p>No item found{parameter}</p>
  };
  // add condition
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>;<p>No item found</p>
  //       </>
  //     );
  //   }

  // handler click
  const handleClick = (event: MouseEvent) => console.log(event);

  // active only the selected index -1 means nothing selected
  let selectedIndex = -1;

  return (
    // empty brackets represents Fragment Element
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          // key option to let React to keep tracking of our element(removing, editing, and so...)
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

function ListGroup4() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // better way to achive the same result of condition (if we don't have to use parameters)
  // a better logic than using null
  // true && "moody" => "moody"
  // false && "moody" => false (nothing will return)
  const message = items.length === 0 && <p>No item Found</p>;
  // or even store the logic inside a function to be able to use parameter if we want
  const getMessage = (parameter: string) => {
    return items.length === 0 ? <p>No item found{parameter}</p> : null;
    // return items.length === 0 && <p>No item found{parameter}</p>
  };
  // add condition
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>;<p>No item found</p>
  //       </>
  //     );
  //   }

  // handler click
  const handleClick = (event: MouseEvent) => console.log(event);

  // active only the selected index -1 means nothing selected
  // Hook
  // arr[0] variable (selectedIndex)
  // arr[1] updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    // empty brackets represents Fragment Element
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          // key option to let React to keep tracking of our element(removing, editing, and so...)
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// if we want to have a real data we us use Props(property: the input to our component)
// in this list we will define Props { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // if we want somthing happen after an item is sleceted ex: log the item on the console
  onSlecetItem: (item: string) => void;
}

// function ListGroup(props: Props)
// better to use { items, heading } so we don't have to write props.items.map((item, index)
// we have to call the OnSlecetItem also like a parameter
function ListGroup({ items, heading, onSlecetItem }: Props) {
  // move items (data) to App.tsx  file
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      {/* replace the List with heading(to make it dynamically) */}
      <h1>{heading}</h1>
      <ul className="list-group">
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
              // we have to call the function here too
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
export default ListGroup;
