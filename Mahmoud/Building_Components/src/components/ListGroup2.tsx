function ListGroup2() {
  const items: string[] = [
    "New Yord",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
  // we move this code inside return and wrap it with {}
  // items.map((item) => <li className="list-group-item">{item}</li>);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
        {/* now we can remove all this code with one line
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup2;

// in Chrome console we have this error
// Warning: Each child in a list should have a unique "key" prop.

// react normaly need key to keep tracking of our each item
//  so when we add or remove dynamically react should know which part should change
// normally we use id from having data from API
// but know coz our string is unique
// key={item}
