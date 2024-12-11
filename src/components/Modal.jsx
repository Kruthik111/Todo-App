import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, onClickOutside, children }) => {
  if (!isOpen) return null;
  return (
    <div className="bg-[#0f172acc] bg-opacity-55 flex z-10 absolute inset-0 w-screen h-screen  ">
      <>
        <div className="m-auto " onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
        <span
          className="absolute top-12 sm:top-16 md:top-10 right-2 md:right-10 text-white"
          onClick={onClickOutside}
        >
          <span className="sr-only">close modal</span>
          <IoCloseSharp size={35} />
        </span>
      </>
    </div>
  );
};

export default Modal;
