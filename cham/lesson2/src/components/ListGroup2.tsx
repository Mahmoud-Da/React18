const ListGroup2 = () => {
  let items: string[] = [
    "Html",
    "Css",
    "GitHub",
    "JavaScript",
    "TypeScript",
    "React",
  ];

  items = [];

  //  not Good
  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List Group</h1>
  //       <p>please insert item</p>
  //     </>
  //   );
  // }

  // items.length === 0 ? <p> No Item found</p> : null
  const message = items.length === 0 && <p>please insert item</p>;

  // getMessage = (a: string) => {
  //   return items.length === 0 && <p>please insert {a}</p>;
  // };

  // && operator
  // 1 && 2
  //  => 2
  // true && 2
  //  => 2
  // false && 2
  //  => false

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {message}
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup2;
