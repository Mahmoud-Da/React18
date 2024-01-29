import { useState } from "react";

import ExpenseList from "./components/ExpenseList";
// import ExpenseList1 from "./components/ExpenseList1";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      desciption: "banana",
      amount: 300,
      category: "Utilities",
    },
    {
      id: 2,
      desciption: "Apple",
      amount: 400,
      category: "Utilities",
    },
    {
      id: 3,
      desciption: "Drink",
      amount: 530,
      category: "Groceries",
    },
    {
      id: 4,
      desciption: "Game",
      amount: 500,
      category: "Entertainment",
    },
  ]);

  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  // const [expenses1, setExpenses1] = useState([
  //   {
  //     id1: 1,
  //     desciption1: "abc",
  //     amount1: 28,
  //     category1: "food",
  //   },
  //   {
  //     id1: 2,
  //     desciption1: "abc",
  //     amount1: 35,
  //     category1: "food",
  //   },
  //   {
  //     id1: 3,
  //     desciption1: "abc",
  //     amount1: 23,
  //     category1: "food",
  //   },
  //   {
  //     id1: 4,
  //     desciption1: "abc",
  //     amount1: 14,
  //     category1: "food",
  //   },
  // ]);
  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />

      {/* <ExpenseList1
        expenses1={expenses1}
        onDelete1={(id1) =>
          setExpenses1(expenses1.filter((a) => a.id1 !== id1))
        }
      /> */}
    </>
  );
}

export default App;
