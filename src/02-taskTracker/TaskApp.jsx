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
        },
        {
            id: 3,
            taskName: 'Learn NodeJs',
            completed: true
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
        <div className="min-h-screen bg-blue-950 py-20 px-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden p-6">
                <h1 className="text-5xl font-black text-white mb-10 text-center drop-shadow-2xl">
                    <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent px-4 py-2 rounded-lg">
                        TASK TRACKER
                    </span>
                </h1>
                <TaskForm addTaskItem={addTaskItem} taskList={taskList} />
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