import { useState } from 'react'

const ExpenseForm = ({ onFormSubmit }) => {
    const [expenseName, setExpenseName] = useState('');
    const [cost, setCost] = useState('');
    const handleSubmit = (e) => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-GB');

        e.preventDefault();
        onFormSubmit({
            id: Date.now(),
            title: expenseName,
            amount: cost,
            date: formattedDate
        })
        setCost(0);
        setExpenseName('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                name="expenses"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                placeholder="Enter task name"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
                type="number"
                name="expenses"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="0"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Add Expense
            </button>
        </form>
    )
}

export default ExpenseForm