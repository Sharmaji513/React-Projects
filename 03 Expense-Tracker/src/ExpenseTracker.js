import React, { useState } from "react";

const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id));
  };
  return (
    <div className="flex flex-col">
      <h2 className="mt-10">Expense Tracker</h2>

      <div className="mt-5  ">
        <input
          className=" w-[30vw] px-2 py-3   border border-1"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Expense"
          value={input}
        />{" "}
        <br />
        <input
          className=" w-[30vw]  px-2 py-3   border border-1 mt-3"
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          placeholder="Amount"
        />{" "}
        <br />
        <button
          className=" w-[30vw] px-3 py-3   border border-1 mt-3 bg-blue-400 text-white"
          onClick={addExpense}
        >
          Add Expense
        </button>
      </div>

      <div>
        <ul className="expense-list flex flex-col items-center ">
          {expenses.map((expense) => (
            <li className="  mt-4" key={expense.id}>
              <div className=" flex flex-row justify-center item-center  gap-20">
                <span>{expense.title}</span>
                <span>{expense.amount}</span>
                <button
                  className=" px-3 py-1 bg-red-600 text-white"
                  onClick={() => deleteExpense(expense.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
