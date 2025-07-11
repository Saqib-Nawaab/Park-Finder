import { FaSun, FaMoon } from "react-icons/fa";
import React from "react";
// import { useAppContext } from "../context/AppContext";
import NavBar from "../components/NavBar";
function Setting() {
//   const { theme, toggleTheme } = useAppContext();
  return (
    <div>
        <NavBar/>
      <button
        // onClick={toggleTheme}
        // className="text-xl text-gray-300 hover:text-yellow-400 transition"
      >
        {/* {theme === "dark" ? <FaSun /> : <FaMoon />} */}
      </button>
    </div>
  );
}

export default Setting;
