const ListGroup1 = () => {
  const items: string[] = [
    "Html",
    "Css",
    "GitHub",
    "JavaScript",
    "TypeScript",
    "React",
  ];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup1;

{
  /*    <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> 
  */
}
