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
    <div className='p-10 px-[10vw]'>
      <h2 className="text-3xl font-bold mb-6 text-center">Track Your Budget</h2>
      {expenses.map((expense, index) => (
        <div key={index} className="mb-6 p-4 bg-white rounded shadow-lg text-black">
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
      <button 
        onClick={addExpense} 
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 mb-6"
      >
        Add Expense
      </button>
      <div className="mt-6 bg-white p-6 rounded shadow-lg text-black">
        <h3 className="text-xl font-bold mb-4 text-center">Budget Summary</h3>
        <ul className="mb-4">
          {expenses.map((expense, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{expense.item || 'Unnamed Expense'}</span>
              <span>Rs.{parseFloat(expense.cost || 0).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t-2 pt-4">
          <h4 className="text-xl font-bold text-center">Total: Rs.{total.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Budget;
