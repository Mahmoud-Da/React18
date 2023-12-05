// import Cards from "./components/Cards";

import ListGroups1 from "./components/ListGroup1";
import ListGroups2 from "./components/ListGroup1";

function App() {
  let t_flowers: string[] = [
    "Lily",
    "Rose",
    "Lavender",
    "Violet",
    "Tulip",
    "Sunflower",
  ];

  let t_fruits: string[] = [
    "Cherris",
    "Watermelon",
    "Avocado",
    "Fig",
    "Plum",
    "Peach",
  ];
  const handleSlecetedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      {/* <Cards /> */}
      <ListGroups1
        items={t_flowers}
        header="The flowers"
        style="list-group-item list-group-item-primary"
        onSlecetedItem={handleSlecetedItem}
      />
      <ListGroups2
        items={t_fruits}
        header="The fruits"
        style="list-group-item list-group-item-warning"
        onSlecetedItem={handleSlecetedItem}
      />
    </>
  );
}

export default App;
