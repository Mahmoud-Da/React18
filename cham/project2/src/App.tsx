import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      desciption: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      desciption: "bbb",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      desciption: "ccc",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 4,
      desciption: "ddd",
      amount: 10,
      category: "Utilities",
    },
  ]);
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
