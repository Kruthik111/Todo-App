import React, { useContext, useState } from "react";
import { ListContext } from "../context/ListContext";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoPencilOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import AddTaskCard from "./AddTaskCard";
import Modal from "./Modal";
import DeleteConfirmDialog from "./DeleteConfirmModal";

const TaskCard = ({ task }) => {
  const { updateTask, deleteTask } = useContext(ListContext);
  const [open, setOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  function handleChange() {
    const updatedTask = { ...task, isComplete: !task.isComplete };
    updateTask(updatedTask);
  }
  function handleDelete(taskId) {
    deleteTask(taskId);
  }

  return (
    task && (
      <div
        className={`[textShadow:0px_0px_3px_rgb(1_1_1_/_63%)] dark:[textShadow:0px_0px_3px_rgb(200_200_200_/_63%)]  flex justify-between items-center px-5 py-5   dark:bg-gray-800 dark:border-gray-700 max-w-2xl rounded-md text-xl font-semibold  transition-all ease-in-out w-full text-red-500 duration-500 group border-2 border-gray-400 group bg-gray-100 shadow-lg ${
          task.isComplete ? " line-through   " : " dark:bg-gray-700 "
        }`}
        // style={{ textShadow: "0px 0px 4px rgb(1 1 1 / 63%)" }}
        onDoubleClick={handleChange}
      >
        <div className="gap-5">
          <h1 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task.name}
          </h1>
          <h5 className="text-xs text-gray-700 dark:text-gray-400 font-bold">
            {task.category}
          </h5>
          <p className="font-normal text-gray-700 w-full  dark:text-gray-400 line-clamp-1 transition-all duration-500 ease-in-out group-hover:line-clamp-none">
            {task.description}
          </p>
        </div>
        <span className="opacity-100  drop-shadow-lg sm:opacity-0 group-hover:opacity-100 text-black dark:text-white transition-opacity duration-500 flex gap-5 text-2xl">
          <span className="text-green-800" onClick={handleChange}>
            {task.isComplete ? <IoMdCheckmarkCircleOutline /> : <FaRegCircle />}
          </span>
          <span
            className="text-blue-800 "
            title="Edit"
            onClick={() => setOpen(true)}
          >
            <IoPencilOutline />
          </span>
          <span
            className="text-red-700"
            title="Delete"
            onClick={() => setDisplayModal(true)}
          >
            <MdDelete />
          </span>
        </span>
        <Modal isOpen={open} onClickOutside={() => setOpen(false)}>
          <AddTaskCard closeAddTask={() => setOpen(false)} task={task} />
        </Modal>
        <Modal isOpen={displayModal} onClickOutside={() => setOpen(false)}>
          <DeleteConfirmDialog
            setDisplayModal={setDisplayModal}
            deleteTask={() => handleDelete(task.id)}
            taskName={task.name}
          />
        </Modal>
      </div>
    )
  );
};

export default TaskCard;
