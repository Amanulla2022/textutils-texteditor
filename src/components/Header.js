import React, { useState } from "react";
import { IoMdList } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between p-4">
      <h1 className="text-3xl text-purple-600">TextUtils</h1>
      <div className="hidden md:flex">
        <ul className="flex">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <IoMdList
        onClick={toggleMenu}
        className="md:hidden text-3xl text-purple-300 cursor-pointer hover:text-purple-600"
      />
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
          <ul className="flex flex-col">
            <li className="py-2 px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2 px-4">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
