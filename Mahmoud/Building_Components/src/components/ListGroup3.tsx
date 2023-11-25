function ListGroup3() {
  let items: string[] = [
    "New Yord",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  items = [];
  // conditions

  // store condition
  const message = items.length === 0 && <p> No Item found</p>;

  const getMessage = () => {
    return items.length === 0 && <p> No Item found</p>;
  };
  // if statement
  // not good practice coz <h1>List</h1> multi times
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>item not found</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/*
         we can write condition here so the h1 remain it items is empty 
        to refactor we move the code to up and stored with varible   
        */}
        {items.length === 0 ? <p> No Item found</p> : null}
        {/* we can refactor using && to get rid off null*/}
        {items.length === 0 && <p> No Item found</p>}
        {/* call the varible */}
        {message}
        {/* better to use function to render message dynamically */}
        {getMessage()}
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup3;
