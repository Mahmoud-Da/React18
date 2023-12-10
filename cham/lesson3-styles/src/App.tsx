import ListGroupV from "./components/ListGroupV";
import ListGroupM from "./components/ListGroupM";
import ListGroupS from "./components/ListGroupS";

import "./App.css";
import Apple from "./components/Apple";
function App() {
  let cars: string[] = ["BMW", "Toyota", "Honda", "Suzuki", "Benz"];

  const handleSlecetedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroupV
        items={cars}
        header="Cars-Vanilla"
        style="list-group-item-success"
        onSlecetedItem={handleSlecetedItem}
      />
      <ListGroupM
        items={cars}
        header="Cars-Module"
        style="list-group-item-success"
        onSlecetedItem={handleSlecetedItem}
      />
      <ListGroupS
        items={cars}
        header="Cars-CSS-in-JS"
        style="list-group-item-success"
        onSlecetedItem={handleSlecetedItem}
      />
      <Apple />
    </>
  );
}

export default App;
