import React, { useContext, useState } from "react";
import Modal from "../components/Modal";
import AddTaskCard from "../components/AddTaskCard";
import { ListContext } from "../context/ListContext";
import { AiFillPlusCircle } from "react-icons/ai";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Banner from "../components/Banner";
import TaskContainer from "../components/TasksContainer";
import { BiFilter } from "react-icons/bi";
import { FaHandPointUp } from "react-icons/fa";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { tasks, groups } = useContext(ListContext);
  const [filter, setFilter] = useState({ name: "", category: "" });

  function addNewTask() {
    setOpen(true);
  }
  const closeAddTask = () => setOpen(false);

  return (
    <div>
      <div className="lg:px-10 xl:px-32">
        <Banner />
        <div className="flex justify-between text-lg font-bold cursor-pointer my-3 md:px-14 text-gray-500">
          <span className=" text-black dark:text-white  ">Tasks</span>
          {/* <span onClick={() => setShowTasks("completedfirst")}>nothing</span> */}
          <span className=" text-gray-700 dark:text-gray-400 text-base font-sans font-bold">
            <BiFilter size={30} />
          </span>
        </div>
        <div>
          <span>
            <TaskContainer tasks={tasks} filter={filter} />
          </span>
        </div>
      </div>
      {/* Add task Icon */}
      <span
        className="inline fixed right-10 sm:right-20 bottom-24 md:bottom-20 rounded-full  dark:bg-white text-indigo-700"
        data-tooltip-id="add-task-tooltip"
        data-tooltip-content="Add New Task"
        data-tooltip-place="left"
        onClick={addNewTask}
      >
        {tasks.length === 0 && (
          <FaHandPointUp
            size={39}
            className="absolute text-orange-200 animate-bounce -top-14 right-4 "
            style={{ rotate: "180deg" }}
          />
        )}
        <AiFillPlusCircle size={60} />
      </span>
      <Tooltip
        id="add-task-tooltip"
        className="bg-black bg-opacity-80 text-white dark:bg-slate-600"
      />
      <Modal isOpen={open} onClickOutside={closeAddTask}>
        <AddTaskCard closeAddTask={closeAddTask} />
      </Modal>
      <div></div>
    </div>
  );
};

export default Home;
