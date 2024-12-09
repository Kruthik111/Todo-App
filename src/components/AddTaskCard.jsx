import React, { useContext, useState } from "react";
import { ListContext } from "../context/ListContext";

const Required = () => <span className="text-red-600 font-bold">*</span>;

const AddTaskCard = ({ closeAddTask, task }) => {
  const { tasks, groups, addTasks, updateTask } = useContext(ListContext);
  const taskNameLength = 35;

  const [newTask, setNewTask] = useState(
    task
      ? { ...task }
      : {
          id: Date.now(),
          name: "",
          description: "",
          date: "",
          isComplete: false,
          category: "personal",
        }
  );

  function addNewTask(event) {
    event.preventDefault();
    if (!task) {
      if (!newTask.name) return;
      const taskid = tasks.length;
      const updatedTask = { ...newTask, id: taskid };
      setNewTask(updatedTask);
      console.log("new task", newTask);
      addTasks(newTask);
    } else {
      updateTask({ ...newTask });
    }
    closeAddTask();
  }

  return (
    <div className="bg-white p-10 px-3 sm:px-14 text-black dark:text-white dark:bg-indigo-500 rounded-lg text-lg">
      <h1 className="text-3xl font-bold">
        {task ? "Edit Task" : "Add New Task"}
      </h1>
      <form
        onSubmit={addNewTask}
        className="flex flex-col min-w-[80%] mt-5 w-80"
      >
        <label htmlFor="taskname" className="block mb-2 font-medium ">
          Task Name <Required />
        </label>
        <input
          type="text"
          name="taskname"
          className="outline outline-1 text-lg text-black rounded-lg mb-2 py-2 px-2"
          value={newTask.name}
          placeholder="Enter task name..."
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          maxLength={taskNameLength}
        />
        {newTask.name.length > 0 && (
          <span className="text-xs">
            {newTask.name.length} / {taskNameLength}
          </span>
        )}
        <label
          htmlFor="description"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          className="outline outline-1 text-lg text-black rounded-lg mb-2 py-2 px-2"
          name="description"
          id=""
          placeholder="Enter the task description here..."
          value={newTask.description}
          maxLength={150}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        {newTask.description.length > 0 && (
          <span className="text-xs">{newTask.description.length} / 150</span>
        )}
        <label
          htmlFor="description"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <Dropdown
          label="What do we drink?"
          options={[...groups]}
          value={newTask.category}
          onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
        />
        <label
          htmlFor="due"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Due Date
        </label>
        <input
          type="date"
          name="due"
          className="outline outline-1 text-lg text-black rounded-lg py-2 px-2 mb-2"
          id=""
          value={newTask.date}
          onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-md mt-4"
        >
          {task ? "Edit" : "Add"} Task
        </button>
        <div
          type="cancel"
          onClick={closeAddTask}
          className="bg-red-700 text-white p-2 rounded-md mt-4 text-center cursor-pointer hover:bg-red-600"
        >
          Cancel
        </div>
      </form>
    </div>
  );
};

export default AddTaskCard;

const Dropdown = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="rounded-lg h-10">
      {options.map((option, index) => (
        <option
          key={index}
          className="text-gray-800 font-semibold"
          value={option.name}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};
