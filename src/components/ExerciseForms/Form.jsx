import React, { useState } from "react";
import Content from "./components/Content";
import DropDown from "./components/DropDown";

const Form = (props) => {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    props.closeHandler();
  };

  const formDataHandler = (data) => {
    setFormData((formData) => ({
      ...formData,
      type: selected,
      ...data,
      date: new Date(),
    }));
  };

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-black dark:bg-green max-h-96 w-[600px] p-4 border-4 rounded-xl 
        border-secondary dark:border-white"
      >
        <DropDown onSetSelect={handleSelect} selected={selected} />
        <Content
          selected={selected}
          closeHandler={props.closeHandler}
          addData={formDataHandler}
        />
      </form>
    </div>
  );
};

export default Form;
