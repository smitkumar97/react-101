import { useState } from "react";

const TaskList = ({ listItems, editTask, removeTask }) => {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEditClick = (task) => {
        setEditingId(task.id);
        setEditText(task.taskName);
    };

    const handleSave = (task) => {
        editTask({ ...task, taskName: editText });
        setEditingId(null);
    };

    const handleItemCheck = (task) => {
        editTask({ ...task, completed: !task.completed });
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {listItems && listItems.map(item => (
                        <tr key={item.id} className={item.completed ? 'bg-gray-50' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => handleItemCheck(item)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${item.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                                {editingId === item.id ? (
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        autoFocus
                                    />
                                ) : (
                                    item.taskName
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {item.completed ? 'Completed' : 'Active'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                {editingId === item.id ? (
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleSave(item)}
                                            className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditingId(null)}
                                            className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-sm"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEditClick(item)}
                                            disabled={item.completed}
                                            className={`text-white bg-blue-600 px-3 py-1 rounded-md text-sm ${item.completed ? 'cursor-default' : 'cursor-pointer hover:bg-blue-700'}`}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => removeTask(item)}
                                            className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {listItems.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No tasks found. Add a new task to get started!
                </div>
            )}
        </div>
    );
};

export default TaskList;