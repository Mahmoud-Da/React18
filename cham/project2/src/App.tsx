import { useState } from "react";

import ExpenseList from "./components/ExpenseList";
import ExpenseList1 from "./components/ExpenseList1";

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

  const [expenses1, setExpenses1] = useState([
    {
      id1: 1,
      desciption1: "abc",
      amount1: 28,
      category1: "food",
    },
    {
      id1: 2,
      desciption1: "abc",
      amount1: 35,
      category1: "food",
    },
    {
      id1: 3,
      desciption1: "abc",
      amount1: 23,
      category1: "food",
    },
    {
      id1: 4,
      desciption1: "abc",
      amount1: 14,
      category1: "food",
    },
  ]);
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />

      <ExpenseList1
        expenses1={expenses1}
        onDelete1={(id1) =>
          setExpenses1(expenses1.filter((a) => a.id1 !== id1))
        }
      />
    </>
  );
}

export default App;
