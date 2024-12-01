import { useContext } from "react";
import { BsFillMoonStarsFill, BsMoonStars, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import OwlIcon from "./OwlIcon";
import ProfileIcon from "./ProfileIcon";
import SunIcon from "./SunIcon";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className=" flex justify-between mt-3 text-black  dark:text-white">
      <span>
        <h1 className="font-bold text-4xl black-ops-one-regular">Do It</h1>
        <h1 className="line-through">To do</h1>
      </span>
      <Link>
        <span className="flex items-center gap-3">
          <span
            className="w-10"
            onClick={toggleTheme}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${theme ? "Light Mode" : "Dark Mode"}`}
          >
            {theme ? <SunIcon /> : <OwlIcon />}
          </span>
          <Tooltip
            id="my-tooltip"
            className="bg-black bg-opacity-80 text-white dark:bg-slate-600"
          />
          {/* <span className="w-14">
            <ProfileIcon />
          </span> */}
        </span>
      </Link>
    </div>
  );
};

export default Header;
