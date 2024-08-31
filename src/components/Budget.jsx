import React, { useState } from 'react';

const Budget = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpense = () => {
    setExpenses([...expenses, { item: '', cost: 0 }]);
  };

  const handleExpenseChange = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
    calculateTotal(newExpenses);
  };

  const calculateTotal = (expenses) => {
    const totalCost = expenses.reduce((acc, expense) => acc + parseFloat(expense.cost || 0), 0);
    setTotal(totalCost);
  };

  return (
    <div className='p-20 bg-gradient-to-t'>
      <h2 className="text-2xl font-bold mb-4">Track Your Budget</h2>
      {expenses.map((expense, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            value={expense.item}
            onChange={(e) => handleExpenseChange(index, 'item', e.target.value)}
            placeholder="Enter Item"
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            value={expense.cost}
            onChange={(e) => handleExpenseChange(index, 'cost', e.target.value)}
            placeholder="Enter Cost"
            className="border p-2 rounded w-full mt-2"
          />
        </div>
      ))}
      <button onClick={addExpense} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
        Add Expense
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total: Rs.{total}</h3>
      </div>
    </div>
  );
};

export default Budget;
