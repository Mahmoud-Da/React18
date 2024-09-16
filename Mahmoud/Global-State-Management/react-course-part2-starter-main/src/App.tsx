import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthContext from "./state-management/contexts/authContext";
import TaskContext from "./state-management/contexts/taskContext";
import authReducer from "./state-management/reducers/authReducer";
import tasksReducer from "./state-management/reducers/taskReducer";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <>
      <AuthContext.Provider value={{ user, authDispatch }}>
        <TaskContext.Provider value={{ tasks, taskDispatch }}>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </TaskContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
