import React from "react";
import { Link } from "react-router-dom";
const ExerciseActivity = (props) => {
  if (props.activity.type === "Cardio") {
    return <CardioActivity id={props.activity.id} activity={props.activity} />;
  }
  if (props.activity.type === "Weight") {
    return <WeightActivity id={props.activity.id} activity={props.activity} />;
  }
  if (props.activity.type === "Calisthenics") {
    return (
      <CalisthenicsActivity id={props.activity.id} activity={props.activity} />
    );
  }
  if (props.activity.type === "Flexibility") {
    return (
      <FlexibilityActivity id={props.activity.id} activity={props.activity} />
    );
  }
};

export default ExerciseActivity;

const CardioActivity = (props) => {
  let s = props.activity.date.slice(0, 10).replaceAll("-", "/");
  return (
    <li
      className="m-4 rounded-md border-4 text-center text-lg
      dark:text-black  dark:bg-primary dark:border-green
      bg-secondary  border-brown text-primary
      hover:opacity-70
   "
    >
      <Link to={`/view/${props.id}`} className="w-full">
        <h1 className="text-3xl pb-1 font-bold bg-white text-black dark:text-primary dark:bg-black">
          {props.activity.activity}
        </h1>
        <div className="">
          <p className="">type: {props.activity.type} </p>
          <p>speed : {props.activity.speed} km/h</p>
          <p>duration : {props.activity.duration} mins</p>
          <p className="mx-auto  w-fit dark:bg-brown bg-green text-black dark:text-primary">
            {s}
          </p>
        </div>
      </Link>
    </li>
  );
};

const WeightActivity = (props) => {
  let s = props.activity.date.slice(0, 10).replaceAll("-", "/");
  return (
    <li
      className="m-4 rounded-md border-4 text-center text-lg
      dark:text-black  dark:bg-primary dark:border-green
      bg-secondary  border-brown text-primary
   "
    >
      <Link to={`/view/${props.id}`} className="w-full">
        <h1 className="text-3xl pb-1 font-bold bg-white text-black dark:text-primary dark:bg-black">
          {props.activity.activity}
        </h1>
        <div className="">
          <p>type: {props.activity.type}</p>
          <p>weight: {props.activity.weight} kg</p>
          <p>reps : {props.activity.reps} km/h</p>
          <p>sets : {props.activity.sets} km/h</p>
          <p>duration : {props.activity.duration} mins</p>
          <p className="mx-auto  w-fit dark:bg-brown bg-green text-black dark:text-primary">
            {s}
          </p>
        </div>
      </Link>
    </li>
  );
};
const CalisthenicsActivity = (props) => {
  let s = props.activity.date.slice(0, 10).replaceAll("-", "/");
  return (
    <li
      className="m-4 rounded-md border-4 text-center text-lg
    dark:text-black  dark:bg-primary dark:border-green
    bg-secondary  border-brown text-primary
 "
    >
      <Link to={`/view/${props.id}`} className="w-full">
        <h1 className="text-3xl pb-1 font-bold bg-white text-black dark:text-primary dark:bg-black">
          {props.activity.activity}
        </h1>
        <div>
          <p>type: {props.activity.type}</p>
          <p>reps : {props.activity.reps} km/h</p>
          <p>sets : {props.activity.sets} km/h</p>
          <p>duration : {props.activity.duration} mins</p>
          <p className="mx-auto  w-fit dark:bg-brown bg-green text-black dark:text-primary">
            {s}
          </p>
        </div>
      </Link>
    </li>
  );
};
const FlexibilityActivity = (props) => {
  let s = props.activity.date.slice(0, 10).replaceAll("-", "/");
  return (
    <li
      className="m-4 rounded-md border-4 text-center text-lg
      dark:text-black  dark:bg-primary dark:border-green
      bg-secondary  border-brown text-primary
   "
    >
      <Link to={`/view/${props.id}`} className="w-full">
        <h1 className="text-3xl pb-1 font-bold bg-white text-black dark:text-primary dark:bg-black">
          {props.activity.activity}
        </h1>

        <div>
          <p>type: {props.activity.type}</p>
          <p>reps : {props.activity.reps} km/h</p>
          <p>sets : {props.activity.sets} km/h</p>
          <p>duration : {props.activity.duration} mins</p>
          <p className="mx-auto  w-fit dark:bg-brown bg-green text-black dark:text-primary">
            {s}
          </p>
        </div>
      </Link>
    </li>
  );
};
