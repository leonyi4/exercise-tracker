import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between h-20 max-w-[1024px] m-auto items-center">
      <h1 className="font-bold text-[#E04F06] flex w-full text-3xl ">
        Exercise
      </h1>
      <ul className="flex text-primary">
        <li className="p-4">View</li>
        <li className="p-4">Create</li>
      </ul>
    </div>
  );
};

export default Nav;
