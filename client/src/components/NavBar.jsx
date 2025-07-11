import React, { useState } from "react";
import { FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseStyle = "text-gray-300 hover:text-green-500 transition";
  const activeStyle = "text-green-500 font-semibold";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow relative z-50">

      <Link to="/parks">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaMapMarkerAlt className="text-green-500" />
          <span>ParkMate</span>
        </div>
      </Link>

      <div className="hidden sm:flex items-center gap-6 text-sm sm:text-base">
        <NavLink
          to="/parks"
          className={({ isActive }) =>
            isActive ? `${baseStyle} ${activeStyle}` : baseStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? `${baseStyle} ${activeStyle}` : baseStyle
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${baseStyle} ${activeStyle}` : baseStyle
          }
        >
          Settings
        </NavLink>
      </div>

      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-300 hover:text-green-500 transition"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start px-6 py-4 gap-4 sm:hidden text-sm">
          <NavLink
            to="/parks"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/settings"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Settings
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
