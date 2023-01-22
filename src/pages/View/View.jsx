import React, { useState } from "react";
import Form from "../../components/ExerciseForms/Form";
import ExerciseList from "../../components/ExerciseList/ExerciseList";

const View = () => {
  const [isAdding, setIsAdding] = useState(false);

  const closeHandler = () => {
    setIsAdding(!isAdding);
  };

  let content = isAdding ? (
    <Form closeHandler={closeHandler} />
  ) : (
    <button
      onClick={(e) => setIsAdding(!isAdding)}
      className=" rounded-lg p-4 mt-20  font-semibold text-3xl  border-[4px]

      transition bg-green dark:bg-brown text-secondary dark:text-primary dark:border-primary border-secondary
        hover:bg-brown dark:hover:bg-[#6d2b1b]  hover:text-primary hover:border-primary
        dark:hover:border-secondary dark:hover:text-secondary dark:hover:bg-green hover:p-8  duration-500"
    >
      Add an Exercise
    </button>
  );

  return (
    <div className="max-w-[1024px] mx-auto  min-h-screen flex flex-col ">
      <div className="mx-auto">{content}</div>
      <ExerciseList />
    </div>
  );
};

export default View;
