import React, { useState } from "react";
import { IoMdList } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation for active styling
import { useReducerContext } from "../../context/Context";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useReducerContext();
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    console.log("Toggle Theme Action Dispatched");
    dispatch({ type: "toggle" });
  };

  // Function to determine if a NavLink should be active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`flex justify-between p-4 ${
        state.theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex gap-8">
        <h1 className="text-3xl text-purple-600">TextUtils</h1>
        <div className="hidden md:flex">
          <ul className="flex">
            <li className="mx-2">
              <NavLink
                exact
                to="/"
                className={`${
                  isActive("/") && "text-purple-600" // Apply purple text color if active
                } hover:text-purple-600`}
              >
                Home
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink
                to="/about"
                className={`${
                  isActive("/about") && "text-purple-600" // Apply purple text color if active
                } hover:text-purple-600`}
              >
                About
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink
                to="/contact"
                className={`${
                  isActive("/contact") && "text-purple-600" // Apply purple text color if active
                } hover:text-purple-600`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <IoMdList
          onClick={toggleMenu}
          className="md:hidden text-3xl text-purple-500 cursor-pointer hover:text-purple-600"
        />
      </div>

      {state.theme ? (
        <FaToggleOn className="text-3xl cursor-pointer" onClick={toggleTheme} />
      ) : (
        <FaToggleOff
          className="text-3xl cursor-pointer"
          onClick={toggleTheme}
        />
      )}

      {isMenuOpen && (
        <div
          className={`absolute top-16 left-0 w-full shadow-md z-10 md:hidden ${
            state.theme ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <ul className="flex flex-col">
            <li className="py-2 px-4">
              <NavLink
                exact
                to="/"
                className={`${
                  isActive("/") && "text-purple-600" // Apply purple text color if active
                } hover:text-purple-600`}
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="/about"
                className={`${
                  isActive("/about") && "text-purple-600" // Apply purple text color if active
                } hover:text-purple-600`}
              >
                About
              </NavLink>
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="/contact"
                className={`${
                  isActive("/contact") && "text-purple-600" // Apply purple text color if active
                } hover:text-purple-600`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
