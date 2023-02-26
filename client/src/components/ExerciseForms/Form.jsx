import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "./components/Content";
import DropDown from "./components/DropDown";

const Form = (props) => {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://exercise-tracker-d2354-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        navigate(0);
      })
      .catch((err) => console.log(err.message));
  };

  const formDataHandler = (data) => {
    const s = new Date();
    let date = s.toString();
    date = date.slice(0, 15);

    setFormData((formData) => ({
      ...formData,
      type: selected,
      ...data,
      date: date,
    }));
  };

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-black dark:bg-green max-h-96  w-full p-4 m-auto border-4 rounded-xl 
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