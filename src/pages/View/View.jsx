import React, { useState } from "react";
import Form from "../../components/ExerciseForms/Form";

const View = () => {
  const [isAdding, setIsAdding] = useState(false);
  let content = isAdding ? (
    <Form />
  ) : (
    <button
      onClick={(e) => setIsAdding(!isAdding)}
      className="bg-green border-primary border-[3px] rounded-md p-4
                  font-semibold text-xl"
    >
      Add an activity
    </button>
  );

  return (
    <div className="max-w-[1024px] mx-auto h-screen flex flex-col ">
      <div className="mx-auto">{content}</div>
      <div className="mx-auto">
        <div>Example</div>
        <div>Example</div>
      </div>
    </div>
  );
};

export default View;
