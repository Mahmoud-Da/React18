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

function ListGroup() {
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
  return (
    // empty brackets represents Fragment Element
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          // key option to let React to keep tracking of our element(removing, editing, and so...)
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
