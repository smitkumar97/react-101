import { useState } from 'react';

function TaskForm({ addTaskItem, taskList }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTaskItem({
                id: taskList.length + 1,
                taskName: task.trim(),
                completed: false
            });
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task name"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;