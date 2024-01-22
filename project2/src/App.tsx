import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
function App() {
  const [expenses, setExpenese] = useState([
    { id: 1, description: "one", amount: 2, category: "food" },
    { id: 2, description: "two", amount: 6, category: "food" },
    { id: 3, description: "three", amount: 7, category: "food" },
    { id: 4, description: "four", amount: 5, category: "food" },
  ]);
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenese(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
