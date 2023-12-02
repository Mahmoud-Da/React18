import Alert from "./components/Alert";
import Card from "./components/Card";
import ListGroup1 from "./components/ListGroup1";
import ListGroup2 from "./components/ListGroup2";
import ListGroup3 from "./components/ListGroup3";
import ListGroup4 from "./components/ListGroup4";
import ListGroup5 from "./components/ListGroup5";
import ListGroup6 from "./components/ListGroup6";
import ListGroup7 from "./components/ListGroup7";

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
      <h4>=============1============</h4>
      {/* bootstrap */}
      <ListGroup1 />
      <br />
      <br />
      <h4>=============2============</h4>
      <br />

      <br />
      {/* rendering list */}
      <ListGroup2 />
      <br />
      <br />
      <h4>============3=============</h4>
      <br />
      <br />

      {/* conditional rendering */}
      <ListGroup3 />
      <br />
      <br />
      <h4>============4=============</h4>
      <br />
      <br />

      {/* Handling click events */}
      <ListGroup4 />
      <Card />
      <br />
      <br />
      <h4>============5=============</h4>
      <br />
      <br />

      {/* Manging State */}
      {/* every list group will have it owns state */}
      <ListGroup5 />
      <ListGroup5 />
      <br />
      <br />
      <h4>=============6============</h4>
      <br />
      <br />

      {/* Passing Data Via Props */}
      <br />
      <br />
      <h4>=============6============</h4>
      <br />
      <br />
      <ListGroup6 items={items} heading="City" />

      {/* Passing Functions Via Props */}
      <br />
      <br />
      <h4>=============6============</h4>
      <br />
      <br />
      <ListGroup7
        items={items}
        heading="City"
        onSelectedItem={handleSlecetedItem}
      />

      {/* Passing Childern */}
      <br />
      <br />
      <h4>=============6============</h4>
      <br />
      <br />
      <Alert>
        Hello <span>World</span>
      </Alert>
    </>
  );
}
export default App;

<h1>List</h1>;
