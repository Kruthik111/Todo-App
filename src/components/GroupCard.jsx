import React from "react";

const GroupCard = ({ group, setSelected, setFilter }) => {
  function handleClick() {
    setFilter({ nmae: "category", category: group.name });
    setSelected(2);
  }
  return (
    <div
      key={group.name}
      className=" flex justify-center items-center p-4 py-3 h-32 w-60 shadow-md shadow-slate-700  dark:bg-gray-800 dark:border-gray-700 max-w-2xl  rounded-md dark:text-white text-xl font-semibold border-2 border-gray-400"
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center gap-3 items-center">
        <span className="text-3xl drop-shadow-lg">{group.emoji}</span>
        <h1 className="[textShadow:0px_0px_3px_rgb(1_1_1_/_63%)]">
          {group.name}
        </h1>
      </div>
      {/* <IoIosArrowForward /> */}
    </div>
  );
};

export default GroupCard;
