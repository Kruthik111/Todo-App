import React, { useContext } from "react";
import CircularProgress from "./CircularProgress";
import { ListContext } from "../context/ListContext";
import GroupCard from "./GroupCard";

const Banner = () => {
  const { tasks } = useContext(ListContext);
  const completed = tasks.filter((e) => e.isComplete == true).length;
  const { groups } = useContext(ListContext);
  return (
    <div className="flex items-center w-full bg-transparent rounded-lg text-xl md:text-2xl py-5 md:px-9 space-y-5">
      {tasks.length > 0 && (
        <span className="shadow-lg shadow-black dark:shadow-slate-600  p-4 px-7 text-lg rounded-lg">
          <>
            <CircularProgress completed={completed} total={tasks.length} />
            <div className="w-20 dark:text-white">
              {completed}/{tasks.length} tasks Completed
            </div>
          </>
        </span>
      )}
      <div className="flex gap-2 overflow-auto scrollbar pb-6">
        {groups?.length > 0 &&
          groups.map((group, index) => (
            <GroupCard
              key={index}
              // setSelected={setSelected}
              group={group}
              // setFilter={setFilter}
            />
          ))}
      </div>
      {/* <div className="h-full my-auto ">
        <IoIosArrowDropright
          className="text-black dark:text-white "
          size={20}
        />
      </div> */}
    </div>
  );
};

export default Banner;
