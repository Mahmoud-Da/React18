import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenese] = useState([
    { id: 1, description: "first", amount: 10, category: "string" },
    { id: 2, description: "Second", amount: 10, category: "string" },
    { id: 3, description: "thrid", amount: 10, category: "string" },
    { id: 4, description: "fourth", amount: 10, category: "string" },
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
