import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskContext from "./state-management/contexts/taskContext";
import tasksReducer from "./state-management/reducers/taskReducer";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <AuthProvider>
        <TaskContext.Provider value={{ tasks, taskDispatch }}>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </TaskContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
