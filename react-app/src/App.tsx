import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import ListGroup2 from "./components/Styling-lesson/ListGroup1(CssModules)";
import ListGroup1 from "./components/Styling-lesson/ListGroup1(VanillaCss)";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cites"
          onSlecetItem={handleSelectItem}
        />
      </div>

      <div>
        {/* if we want to type Hello World inside the Alert tag like normal HTML element we use (children Props) */}
        {/* <Alert text="Hello World" /> */}
        <Alert>Hello World</Alert>
        {/* using React node class we can pass element to Alert */}
        <Alert>
          Hello <span>World</span>
        </Alert>
      </div>

      {/* lesson4 Styling */}
      {/* Vanilla Css */}
      <div>
        <ListGroup1
          items={items}
          heading="Cites"
          onSlecetItem={handleSelectItem}
        />
      </div>

      {/* Css Mudules */}
      <div>
        <ListGroup2
          items={items}
          heading="Cites"
          onSlecetItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
