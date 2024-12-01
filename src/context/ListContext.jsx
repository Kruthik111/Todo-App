import { createContext, useEffect, useState } from "react";

export const ListContext = createContext(null);

const ListProvider = ({ children }) => {
  const [groups, setGroups] = useState(() => {
    let savedgroups = JSON.parse(localStorage.getItem("groups"));
    if (!savedgroups) {
      savedgroups = [
        { name: "Personal", emoji: "😊" },
        { name: "Work", emoji: "💼" },
        { name: "Home", emoji: "🏠" },
        { name: "Fitness", emoji: "⛹🏽" },
      ];
    }
    return savedgroups;
  });

  const [tasks, setTasks] = useState(() => {
    let currentTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(currentTasks);
    if (!currentTasks) {
      currentTasks = [];
    }
    return currentTasks;
  });

  /*
  function handleAddToFavorites(getCurrentItem) {
    // console.log(getCurrentItem);
    let cpyFavoritelist = [...favoritesList];
    const index = cpyFavoritelist.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavoritelist.push(getCurrentItem);
    } else {
      cpyFavoritelist.splice(index);
    }
    setFavoritesList(cpyFavoritelist);
  }
    */
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // console.log(JSON.parse(localStorage.getItem("tasks")));
  }, [tasks, groups]);
  function clearTasks() {
    setGroups([
      { name: "Personal", emoji: "😊" },
      { name: "Work", emoji: "💼" },
      { name: "Home", emoji: "🏠" },
      { name: "Fitness", emoji: "⛹🏽" },
    ]);
    setTasks([]);
  }

  function addTasks(newTask) {
    // console.log(JSON.stringify(newTask));
    if (!newTask.name) return;
    setTasks([...tasks, newTask]);
  }
  function updateTask(updatedTask) {
    var index = tasks.findIndex((e) => updatedTask.id === e.id);
    // console.log(index);
    if (index !== -1) {
      const tempTasks = [...tasks];
      tempTasks[index] = updatedTask;
      setTasks(tempTasks);
    }
  }
  function deleteTask(taskId) {
    const tempTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(tempTasks);
  }
  return (
    <ListContext.Provider
      value={{ tasks, addTasks, groups, clearTasks, updateTask, deleteTask }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
