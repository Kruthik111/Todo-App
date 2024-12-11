import { useRef } from "react";
import useClickedOutside from "../utils/useClickedOutside";

const DeleteConfirmDialog = ({
  setDisplayModal,
  deleteTask,
  taskName = "",
}) => {
  function closeModal() {
    setDisplayModal(false);
  }
  function DeleteTask() {
    deleteTask();
    setDisplayModal(false);
  }
  return (
    <div className="bg-white w-80 dark:bg-gray-800 text-black dark:text-white rounded-lg p-5 z-20">
      <div>
        <h1>Do you want to delete the task {taskName}</h1>
      </div>
      <div className="text-sm flex justify-around text-white mt-7">
        <button
          className="p-1 bg-red-600 rounded-md hover:opacity-75"
          onClick={DeleteTask}
        >
          Delete
        </button>
        <button
          className="p-1 bg-gray-500 rounded-md hover:opacity-75"
          onClick={closeModal}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmDialog;
