// import ListGroup1 from "./components/ListGroup1";
// import ListGroup2 from "./components/ListGroup2";
// import ListGroup3 from "./components/ListGroup3";
// import ListGroup4 from "./components/ListGroup4";
// import ListGroup5 from "./components/ListGroup5";

// import Card from "./components/Card";
import Alert from "./components/Alert";

function App() {
  let p_languge: string[] = [
    "Html",
    "Css",
    "GitHub",
    "TypeScript",
    "JavaScript",
  ];
  let cars: string[] = ["BMW", "Toyota", "Honda", "Suzuki", "Benz"];

  const handleSlecetedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      {/* lesson1 */}
      {/* <ListGroup1 /> */}
      {/* lesson2 */}
      {/* <ListGroup2 /> */}
      {/* lesson3 */}
      {/* <ListGroup3 /> */}
      {/* lesson4 */}
      {/* <ListGroup4
        items={p_languge}
        header="Programming Languge"
        onSlecetedItem={handleSlecetedItem}
      />
      <ListGroup4
        items={cars}
        header="Cars"
        onSlecetedItem={handleSlecetedItem}
      /> */}
      {/* lesson5 */}
      {/* <ListGroup5
        items={p_languge}
        header="Programming Languge"
        style="list-group-item-primary"
        onSlecetedItem={handleSlecetedItem}
      />
      <ListGroup5
        items={cars}
        header="Cars"
        style="list-group-item-success"
        onSlecetedItem={handleSlecetedItem}
      /> */}

      {/* lesson6 */}
      <Alert>
        <p>Hello</p>
        <h2>Dodo</h2>
      </Alert>
      {/* <Card /> */}
    </>
  );
}

export default App;
