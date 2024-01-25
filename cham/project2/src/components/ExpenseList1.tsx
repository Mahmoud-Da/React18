import React from "react";

interface Expense1 {
  id1: number;
  desciption1: string;
  amount1: number;
  category1: string;
}

interface Props {
  expenses1: Expense1[];
  onDelete1: (id1: number) => void;
}

const ExpenseList1 = ({ expenses1, onDelete1 }: Props) => {
  return (
    <>
      <table className="tabel table-bordered">
        <thead>
          <tr>
            <th>DESCRIPTION</th>
            <th>AMOUNT</th>
            <th>CATEGORY</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses1.map((expense1) => (
            <tr key={expense1.id1}>
              <td>{expense1.desciption1}</td>
              <td>¥{expense1.amount1}</td>
              <td>{expense1.category1}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete1(expense1.id1)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ¥
              {expenses1
                .reduce((acc1, expense1) => acc1 + expense1.amount1, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList1;
