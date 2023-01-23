import React from "react";

const ActivityContent = (props) => {
  if (props.data.type === "Cardio") {
    return <CardioContent data={props.data} />;
  }
  if (props.data.type === "Weight") {
    return <WeightContent data={props.data} />;
  }
  if (props.data.type === "Calisthenics") {
    return <CalisthenicsContent data={props.data} />;
  }
  if (props.data.type === "Flexibility") {
    return <FlexibilityContent data={props.data} />;
  }

  return <div>Wrong type!</div>;
};

export default ActivityContent;

const CardioContent = (props) => {
  return (
    <div className="text-primary text-center bg-black border-primary">
      <h1 className="text-3xl">{props.data.activity}</h1>
      <h1 className="text-2xl">{props.data.speed}</h1>
      <h1 className="text-xl">{props.data.duration}</h1>
      <h1 className="text-lg">{props.data.date}</h1>
      <button className="btn">Edit</button>
      <button className="btn">Delete</button>
    </div>
  );
};

const WeightContent = (props) => {
  return (
    <div>
      <h1>{props.data.activity}</h1>
      <h1>{props.data.weight}</h1>
      <h1>{props.data.sets}</h1>
      <h1>{props.data.duration}</h1>
      <h1>{props.data.date}</h1>
    </div>
  );
};
const CalisthenicsContent = (props) => {
  return (
    <div>
      <h1>{props.data.activity}</h1>
      <h1>{props.data.reps}</h1>
      <h1>{props.data.sets}</h1>
      <h1>{props.data.duration}</h1>
      <h1>{props.data.date}</h1>
    </div>
  );
};
const FlexibilityContent = (props) => {
  return (
    <div>
      <h1>{props.data.activity}</h1>
      <h1>{props.data.reps}</h1>
      <h1>{props.data.sets}</h1>
      <h1>{props.data.duration}</h1>
      <h1>{props.data.date}</h1>
    </div>
  );
};
