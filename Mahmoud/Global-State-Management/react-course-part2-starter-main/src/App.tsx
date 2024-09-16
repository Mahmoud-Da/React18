import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import tasksReducer from "./state-management/reducers/taskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TaskContext from "./state-management/contexts/taskContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TaskContext.Provider>
    </>
  );
}

export default App;
