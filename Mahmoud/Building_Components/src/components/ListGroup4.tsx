import { MouseEvent } from "react";
function ListGroup4() {
  let items: string[] = [
    "New Yord",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p> No Item found</p>}
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log("Clicked")}
            // onClick={() => console.log(item)}
            // onClick={(event) => console.log(event)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup4;
