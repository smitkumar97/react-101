const ExpenseList = ({ listItem }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Item</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> */}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        listItem.map((item, index) => (
                            <tr key={item.id} className={item.completed ? 'bg-gray-50' : ''}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm 'text-gray-900'`}>{item.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.amount < 1000 ? 'bg-green-100 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {item.amount}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                {/* <td className="px-6 py-4 whitespace-nowrap">None</td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {listItem.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No tasks found. Add a new task to get started!
                </div>
            )}
        </div>
    )
}

export default ExpenseList