import ListGroupV from "./components/ListGroupV";
import ListGroupM from "./components/ListGroupM";
import ListGroupS from "./components/ListGroupS";
import "./App.css";

function App() {
  let items: string[] = [
    "New Yord",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  const handleSlecetedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroupV
        items={items}
        heading="City1"
        onSelectedItem={handleSlecetedItem}
      />
      <ListGroupM
        items={items}
        heading="City2"
        onSelectedItem={handleSlecetedItem}
      />
      <ListGroupS
        items={items}
        heading="City3"
        onSelectedItem={handleSlecetedItem}
      />
    </>
  );
}
export default App;

<h1>List</h1>;
