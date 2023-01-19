import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Content from "./Content";

const Form = () => {
  const options = ["", "Cardio", "Weight", "Calisthenics", "flexibility"];
  const defaultOption = options[0];
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (selected === "Weight") {
      console.log(2);
    }
    if (selected === "Calisthenics") {
      console.log(3);
    }
    if (selected === "flexibility") {
      console.log(4);
    }
  }, [selected]);

  let content = <div></div>;

  return (
    <div>
      <form className="bg-green h-40 w-[500px] p-4">
        <div>
          <Dropdown
            options={options}
            onChange={(e) => setSelected(e.value)}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <Content selected={selected} />
      </form>
    </div>
  );
};

export default Form;
