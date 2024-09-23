import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import TaskContext from "./tasks/taskContext";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <div>
        <span className="badge text-bg-secondary">{tasks.length}</span>
        <span className="badge text-bg-secondary">{counter}</span>
      </div>

      <LoginStatus />
    </nav>
  );
};

export default NavBar;
