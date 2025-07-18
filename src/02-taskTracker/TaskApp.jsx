import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskApp = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            taskName: 'Learn React',
            completed: true
        },
        {
            id: 2,
            taskName: 'Build a project',
            completed: false
        }
    ]);

    function addTaskItem(task) {
        const taskExists = taskList.some(
            t => t.taskName.toLowerCase() === task.taskName.toLowerCase()
        );

        if (!taskExists) {
            setTaskList([...taskList, task]);
        } else {
            alert('Task already exists!');
        }
    }

    function modifyTaskItem(updatedTask) {
        setTaskList(taskList.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        ));
    }

    function removeTaskItem(currentTask) {
        setTaskList(taskList.filter(task => task.id !== currentTask.id));
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Task Tracker</h1>
                <TaskForm addTaskItem={addTaskItem} />
                <div className="mt-8">
                    <TaskList
                        listItems={taskList}
                        editTask={modifyTaskItem}
                        removeTask={removeTaskItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskApp;