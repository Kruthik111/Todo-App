import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={` ${theme}`}>
      <div className="px-4 md:px-10 lg:px-44 pt-5 bg-white  dark:bg-black   h-screen overflow-hidden font-mono itim-regular select-none ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tasks" element={}/> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
