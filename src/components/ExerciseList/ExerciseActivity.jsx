import React from "react";

const ExerciseActivity = (props) => {
  if (props.activity.type === "Cardio") {
    return <CardioActivity activity={props.activity} />;
  }
  if (props.activity.type === "Weight") {
    return <WeightActivity activity={props.activity} />;
  }
  if (props.activity.type === "Calisthenics") {
    return <CalisthenicsActivity activity={props.activity} />;
  }
  if (props.activity.type === "Flexibility") {
    return <FlexibilityActivity activity={props.activity} />;
  }
};

export default ExerciseActivity;

const CardioActivity = (props) => {
  return (
    <li
      className="p-2 m-4 rounded-mg
       bg-secondary border-4 border-black
       text-center text-lg
    "
    >
      <div>
        <h1 className="text-4xl font-bold ">{props.activity.type}</h1>
        <p className="">activity: {props.activity.name}</p>
        <p>speed : {props.activity.speed} km/h</p>
        <p>duration : {props.activity.duration} mins</p>
      </div>
    </li>
  );
};

const WeightActivity = (props) => {
  return (
    <li
      className="p-2 m-4 rounded-mg
       bg-secondary border-4 border-black
       text-center text-lg
    "
    >
      <div>
        <h1 className="text-4xl font-bold">{props.activity.type}</h1>
        <p>activity: {props.activity.name}</p>
        <p>weight: {props.activity.weight} kg</p>
        <p>reps : {props.activity.reps} km/h</p>
        <p>sets : {props.activity.sets} km/h</p>
        <p>duration : {props.activity.duration} mins</p>
      </div>
    </li>
  );
};
const CalisthenicsActivity = (props) => {
  return (
    <li
      className="p-2 m-4 rounded-mg
       bg-secondary border-4 border-black
       text-center text-lg
    "
    >
      <div>
        <h1 className="text-4xl font-bold">{props.activity.type}</h1>
        <p>activity: {props.activity.name}</p>
        <p>reps : {props.activity.reps} km/h</p>
        <p>sets : {props.activity.sets} km/h</p>
        <p>duration : {props.activity.duration} mins</p>
      </div>
    </li>
  );
};
const FlexibilityActivity = (props) => {
  return (
    <li
      className="p-2 m-4 rounded-mg
       bg-secondary border-4 border-black
       text-center text-lg
    "
    >
      <div>
        <h1 className="text-4xl font-bold">{props.activity.type}</h1>
        <p>activity: {props.activity.name}</p>
        <p>reps : {props.activity.reps} km/h</p>
        <p>sets : {props.activity.sets} km/h</p>
        <p>duration : {props.activity.duration} mins</p>
        <p>Date: {props.activity.date}</p>
      </div>
    </li>
  );
};
