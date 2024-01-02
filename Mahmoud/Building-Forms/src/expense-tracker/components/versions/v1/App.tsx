import { useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import Form5 from "./components/Form5";
import Form6 from "./components/Form6";
import Form7 from "./components/Form7";
import Form8 from "./components/Form8";
import ExpenseList from "./expense-tracker/components/ExpenseList";

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
      {/* Building_a_Form */}
      <h1>Form1</h1>
      <Form1 />
      <br />
      <h1>Form2</h1>
      <Form2 />
      <br />
      <h1>Form3</h1>
      <Form3 />
      <br />
      <h1>Form4</h1>
      <Form4 />
      <br />
      <h1>Form5</h1>
      <Form5 />
      <br />
      <h1>Form6</h1>
      <Form6 />
      <br />
      <h1>Form7</h1>
      <Form7 />
      <br />
      <h1>Form8</h1>
      <Form8 />
      <br />

      <h1>ExpenseList</h1>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      <br />
    </>
  );
}
export default App;
