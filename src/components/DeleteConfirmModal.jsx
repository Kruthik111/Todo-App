import { useRef } from "react";
import useClickedOutside from "../utils/useClickedOutside";

const DeleteConfirmDialog = ({
  setDisplayModal,
  deleteTask,
  taskName = "",
}) => {
  const modalRef = useRef();
  function closeModal() {
    setDisplayModal(false);
  }
  function DeleteTask() {
    deleteTask();
    setDisplayModal(false);
  }
  useClickedOutside(modalRef, closeModal);
  return (
    <div
      className="bg-white w-80 h-36 dark:bg-black text-black dark:text-white rounded-lg p-5 z-20"
      ref={modalRef}
    >
      <div>
        <h1>Do you want to delete the task {taskName}</h1>
      </div>
      <div className="text-sm flex justify-around text-white">
        <button className="p-1 bg-red-600 rounded-md" onClick={DeleteTask}>
          Delete
        </button>
        <button className="p-1 bg-gray-500 rounded-md" onClick={closeModal}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmDialog;
