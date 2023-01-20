import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState("false");

  const cName = isOpen
    ? "z-10 mx-auto hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
    : "z-10 mx-auto bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700";

  let text = "Choose Exercise Type";
  if (props.selected !== "") {
    text = props.selected;
  }

  return (
    <div className=" h-[40px] flex flex-col text-center align-middle">
      <button
        className=" max-w-fit mx-auto text-black dark:text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        type="button"
        onClick={(e) => setIsOpen(!isOpen)}
      >
        {text} <AiFillCaretDown className="mt-1 ml-1" />
      </button>
      <div id="dropdown" className={cName}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
                props.onSetSelect("Cardio");
              }}
              className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Cardio
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
                props.onSetSelect("Weight");
              }}
              className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Weight
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
                props.onSetSelect("Calisthenics");
              }}
              className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Calisthenics
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
                props.onSetSelect("Flexibility");
              }}
              className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Flexibility
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
