import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const TaskContainer = ({ tasks, filter }) => {
  const [search, setSearch] = useState("");
  const [displayTask, setDisplayTask] = useState([...tasks]);
  function setShowTasks(filter) {
    var temptask;
    switch (filter.name) {
      case "completedfirst":
        temptask = tasks
          .filter((task) => task.isComplete === false)
          .concat(tasks.filter((task) => task.isComplete === true));
        setDisplayTask([...temptask]);
        break;
      case "":
        break;

      default:
        break;
    }
  }
  useEffect(() => {
    if (search) {
      var dummyTasks = tasks.filter(
        (task) =>
          task.name.toLowerCase().includes(search.toLowerCase()) === true
      );
      setDisplayTask([...dummyTasks]);
      return;
    }
    setDisplayTask([...tasks]);
  }, [tasks, search]);

  return (
    <div className="w-full">
      <span className="flex justify-center select-text">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          class="block p-3 ps-7 capitalize text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full md:w-10/12"
          placeholder="Search Tasks...."
          required
          autoFocus
        />
      </span>
      <div className="flex flex-col items-center gap-3 my-4 max-h-[27rem] sm:max-h-64 overflow-auto scrollbar scroll-smooth">
        {displayTask?.length > 0 &&
          displayTask.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default TaskContainer;
