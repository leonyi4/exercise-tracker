import React, { useState } from "react";
import Content from "./components/Content";
import DropDown from "./components/DropDown";

const Form = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div>
      <form className="bg-green max-h-80 w-[500px] p-4">
        <DropDown onSetSelect={handleSelect} selected={selected} />
        <Content selected={selected} />
      </form>
    </div>
  );
};

export default Form;
