import { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Header from '../UI/Header';

const ExpenseApp = () => {
    const [expenses, setExpenses] = useState([
        {
            id: 1,
            title: 'Groceries',
            amount: 250.45,
            date: new Date().toLocaleDateString('en-GB')
        },
        {
            id: 2,
            title: 'Recharge',
            amount: 3599,
            date: new Date().toLocaleDateString('en-GB')
        },
        {
            id: 3,
            title: 'Petrol',
            amount: 500,
            date: new Date().toLocaleDateString('en-GB')
        },
    ]);

    function handleFormSubmission(expenseOb) {
        setExpenses([...expenses, expenseOb]);
    }

    return (
        <>
            <div className="min-h-screen bg-blue-950 py-8 px-4 flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden p-6">
                    <Header title={'EXPENSE ANALYZER'} subtitle={'Track expenses • Filter • Visualize'} />
                    <ExpenseForm onFormSubmit={handleFormSubmission} />
                    <ExpenseList listItem={expenses} />
                </div>
            </div>
        </>



    )
}

export default ExpenseApp