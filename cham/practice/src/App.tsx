// import Cards from "./components/Cards";


import Navbar from "./components/Navar";
import Scrollspy from "./components/Scrollspy";

// import Alert from "./components/Alert";
// import ListGroups1 from "./components/ListGroup1";
// import ListGroups2 from "./components/ListGroup1";
// import ListGroupV from "./components/ListGroupV";
// import ListGroupS from "./components/ListGroupS";

import Card from "./components/Card";


function App() {
  // let t_flowers: string[] = [
  //   "Lily",
  //   "Rose",
  //   "Lavender",
  //   "Violet",
  //   "Tulip",
  //   "Sunflower",
  // ];

  // let t_fruits: string[] = [
  //   "Cherris",
  //   "Watermelon",
  //   "Avocado",
  //   "Fig",
  //   "Plum",
  //   "Peach",
  // ];

  let nameList: string[] = [
    "LyLy",
    "Rose",
    "Hanah",
    "Aimee",
    "Cheryl",
    "Jessica",
  ];

  let navList: string[] = ["Home", "Link", "About"];

  const handleSlecetedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>

      {/* <Cards /> */}
      {/* <ListGroups1

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
      <Alert>
        Hello <span>Lily</span>
        <br></br>
        <span>My cat</span>
      </Alert> */}

      {/* <Scrollspy /> */}
      <Navbar />

      {/* <ListGroupV
        items={t_flowers}
        header="The flowers"
        style="list-group-item list-group-item-primary"
        onSlecetedItem={handleSlecetedItem}
      /> */}
      {/* <ListGroupS
        items={t_flowers}
        header="The flowers"
        style="list-group-item list-group-item-primary"
        onSlecetedItem={handleSlecetedItem}
      /> */}

      <Card
        items={nameList}
        navList={navList}
        header="Baby girl's name"
        style="list-group-item"
        text="Some quick example text to build on the card title and make up the
       bulk of the card's content."
        onSlecetedItem={handleSlecetedItem}
      />

    </>
  );
}

export default App;
