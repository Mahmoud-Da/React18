import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenese] = useState([
    { id: 1, desciption: "消しゴム", amount: 5, category: "Utilities" },
    { id: 2, desciption: "ガゾリン代", amount: 4552, category: "Utilities" },
    { id: 3, desciption: "大根", amount: 100, category: "Groceries" },
    {
      id: 4,
      desciption: "野菜（飾り）",
      amount: 500,
      category: "Entertainment",
    },
  ]);
  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenese([...expenses, { ...expense, id: expenses.length + 1 }])
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
        onDelete={(id) => setExpenese(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
