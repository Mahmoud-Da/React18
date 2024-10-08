import "./App.css";
import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskProvider from "./state-management/tasks/TaskProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <Counter />
          <NavBar></NavBar>
          <HomePage></HomePage>
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
