// our import state in App.tsx is ugly so we create index.tsx to make it better

// before
// import ListGroup1 from "./components/Styling-lesson/ListGroup1(VanillaCss)/ListGroup1";

// after
//import ListGroup1 from "./components/Styling-lesson/ListGroup1(VanillaCss)";
// we don't have to write /ListGroup1(VanillaCss)/index because the compiler will look automatically to the index file
import ListGroup2 from "./ListGroup2";

export default ListGroup2;
