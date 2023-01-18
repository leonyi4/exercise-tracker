import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoSunnyOutline, IoSunnySharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import useDarkMode from "../utils/useDarkMode";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [themeStyle, setThemeStyle] = useDarkMode();

  useDarkMode();

  return (
    <div className="text-secondary dark:bg-black dark:text-primary flex justify-between h-20 max-w-[1024px] px-4 m-auto items-center">
      <h1 className="font-bold text-[#E04F06] flex w-full text-3xl ">
        Exercise
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 uppercase">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 uppercase">
          <Link to="/view">View</Link>
        </li>
        <li className="p-4 uppercase">
          <Link to="/profile">profile</Link>
        </li>
        <li className="p-4 uppercase">
          <Link to="/login">Login</Link>
        </li>
        <li>
          <button className="p-4" onClick={(e) => setThemeStyle(!themeStyle)}>
            <IoSunnyOutline size="22" />
          </button>
        </li>
      </ul>
      <div onClick={(e) => setIsOpen(!isOpen)} className="block md:hidden">
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 w-[60%] border-r-2 border-secondary bg-[#1e1d1d] h-full ease-in-out duration-[400ms]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" font-bold text-[#E04F06] flex w-full text-3xl m-4 p-4 ">
          Exercise
        </h1>
        <li className="p-4 uppercase">
          <Link to="/">Home</Link>
        </li>
        <ul className=" p-4 uppercase">
          <li className="p-4 border-b border-primary">
            <Link to="/view">View</Link>
          </li>
          <li className="p-4 border-b border-primary">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="p-4 border-b border-primary">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
