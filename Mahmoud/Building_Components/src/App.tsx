import Card from "./components/Card";
import ListGroup1 from "./components/ListGroup1";
import ListGroup2 from "./components/ListGroup2";
import ListGroup3 from "./components/ListGroup3";
import ListGroup4 from "./components/ListGroup4";
import ListGroup5 from "./components/ListGroup5";

function App() {
  return (
    <>
      {/* bootstrap */}
      <ListGroup1 />

      {/* rendering list */}
      <ListGroup2 />

      {/* conditional rendering */}
      <ListGroup3 />

      {/* Handling click events */}
      <ListGroup4 />
      <Card />

      {/* Manging State */}
      {/* every list group will have it owns state */}
      <ListGroup5 />
      <ListGroup5 />
    </>
  );
}
export default App;

<h1>List</h1>;
