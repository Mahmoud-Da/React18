import ListGroupV from "./components/ListGroupV";
import ListGroupM from "./components/ListGroupM";
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
        heading="City"
        onSelectedItem={handleSlecetedItem}
      />
      <ListGroupM
        items={items}
        heading="City"
        onSelectedItem={handleSlecetedItem}
      />
    </>
  );
}
export default App;

<h1>List</h1>;
