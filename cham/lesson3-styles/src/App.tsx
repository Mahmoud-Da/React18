import ListGroup from "./components/ListGroup";

function App() {
  let cars: string[] = ["BMW", "Toyota", "Honda", "Suzuki", "Benz"];

  const handleSlecetedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={cars}
        header="Cars"
        style="list-group-item-success"
        onSlecetedItem={handleSlecetedItem}
      />
    </>
  );
}

export default App;
