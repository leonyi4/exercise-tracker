import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { IoSunnyOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import useDarkMode from "../utils/useDarkMode";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className=" text-secondary dark:bg-black dark:text-primary  flex justify-between h-20 max-w-[1024px] px-4 m-auto items-center">
      <h1 className="font-bold text-brown dark:text-green flex w-full text-3xl ">
        CET
      </h1>
      <ul className="hidden md:flex uppercase font-medium">
        <li className="p-4 hover:text-brown dark:hover:text-green">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-brown dark:hover:text-green">
          <Link to="/view">View</Link>
        </li>
        <li className="p-4 hover:text-brown dark:hover:text-green">
          <Link to="/profile">profile</Link>
        </li>
        <li className="p-4 hover:text-brown dark:hover:text-green">
          <Link to="/login">Login</Link>
        </li>
        <li>
          <button
            className="p-1 mt-2.5 rounded-md border-2
             text-white dark:text-black border-secondary dark:border-primary  bg-secondary dark:bg-primary
            dark:hover:border-green dark:hover:text-white dark:hover:bg-green
            hover:bg-brown hover:border-brown hover:text-black"
            onClick={(e) => setDarkMode(!darkMode)}
          >
            {darkMode ? <BiMoon size="25" /> : <IoSunnyOutline size="24" />}
          </button>
        </li>
      </ul>
      <div
        onClick={(e) => setIsOpen(!isOpen)}
        className="block md:hidden hover:text-brown dark:hover:text-green"
      >
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          isOpen
            ? "z-1 fixed left-0 top-0 w-[60%] border-r-2 border-primary dark:border-secondary bg-[#65e19f] dark:bg-[#1e1d1d] h-full ease-in-out duration-[400ms]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" font-bold text-brown dark:text-green flex w-full text-3xl m-4 p-4 ">
          CET
        </h1>

        <ul className=" p-4 uppercase">
          <li className="p-4 border-b  border-primary dark:border-secondary hover:text-brown dark:hover:text-green">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b  border-primary dark:border-secondary hover:text-brown dark:hover:text-green">
            <Link to="/view">View</Link>
          </li>
          <li className="p-4 border-b border-primary dark:border-secondary hover:text-brown dark:hover:text-green">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="p-4 border-b border-primary dark:border-secondary hover:text-brown dark:hover:text-green">
            <Link to="/login">Login</Link>
          </li>
          <li>
            <button
              className="p-1 ml-4 mt-2.5 rounded-md border-2
              text-white dark:text-black border-secondary dark:border-primary  bg-secondary dark:bg-primary
             dark:hover:border-green dark:hover:text-white dark:hover:bg-green
             hover:bg-brown hover:border-brown hover:text-black"
              onClick={(e) => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiMoon size="20" /> : <IoSunnyOutline size="20" />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
