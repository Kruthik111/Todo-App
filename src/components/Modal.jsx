import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, onClickOutside, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="bg-[#0f172acc] bg-opacity-55 flex z-10 absolute inset-0 w-screen h-screen  "
      onClick={onClickOutside}
    >
      <div className="m-auto " onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
