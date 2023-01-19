import React from "react";

const Content = (props) => {
  console.log(props.selected);
  if (props.selected === "Cardio") {
    return <CardioForm />;
  }
  if (props.selected === "Weight") {
    return <WeightForm />;
  }
  if (props.selected === "Calisthenics") {
    return <CalisthenicsForm />;
  }
  if (props.selected === "flexibility") {
    return <FlexibilityForm />;
  }

  return <div>{props.selected}</div>;
};

const CardioForm = () => {
  return (
    <div>
      <label>
        name:
        <input type="text" name="name" />
      </label>
      <label>
        speed:
        <input type="text" name="amount" />
      </label>
      <label>
        duration:
        <input type="text" name="amount" />
      </label>
    </div>
  );
};

const WeightForm = () => {
  return (
    <div>
      <label>
        name:
        <input type="text" name="name" />
      </label>
      <label>
        weight:
        <input type="text" name="amount" />
      </label>
      <label>
        sets:
        <input type="text" name="amount" />
      </label>
      <label>
        reps:
        <input type="text" name="amount" />
      </label>
      <label>
        duration:
        <input type="text" name="amount" />
      </label>
    </div>
  );
};

const CalisthenicsForm = () => {
  return (
    <div>
      <label>
        name
        <input type="text" name="amount" />
      </label>
      <label>
        reps
        <input type="text" name="amount" />
      </label>
      <label>
        set:
        <input type="text" name="amount" />
      </label>
      <label>
        duration:
        <input type="text" name="amount" />
      </label>
    </div>
  );
};

const FlexibilityForm = () => {
  return (
    <div>
      <label>
        name:
        <input type="text" name="amount" />
      </label>
      <label>
        amount:
        <input type="text" name="amount" />
      </label>
      <label>
        hold duration:
        <input type="text" name="amount" />
      </label>
      <label>
        total duration
        <input type="text" name="amount" />
      </label>
    </div>
  );
};

export default Content;
