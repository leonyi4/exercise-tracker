import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-primary flex justify-between h-20 max-w-[1024px] px-4 m-auto items-center">
      <h1 className="font-bold text-[#E04F06] flex w-full text-3xl ">
        Exercise
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">View</li>
        <li className="p-4">Create</li>
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
        <ul className=" p-4 uppercase">
          <li className="p-4 border-b border-primary">View</li>
          <li className="p-4 border-b border-primary">Create</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
