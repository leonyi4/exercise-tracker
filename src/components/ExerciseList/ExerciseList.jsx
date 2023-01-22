import React from "react";
import ExerciseActivity from "./ExerciseActivity";
const DUMMY = [
  {
    type: "Cardio",
    name: "running",
    speed: 10,
    duration: 30,
  },

  {
    type: "Weight",
    name: "Dumbbell",
    reps: 5,
    sets: 4,
    duration: 20,
  },
  {
    type: "Calisthenics",
    name: "push up",
    reps: 10,
    sets: 4,
    duration: 30,
  },
  {
    type: "Flexibility",
    name: "back stretch",
    reps: 5,
    sets: 4,
    duration: 15,
  },
];

const ExerciseList = (props) => {
  return (
    <div className="mt-20 max-h-full bg-secondary ">
      <ul className="no-underline w-full ">
        {DUMMY.map((activity) => (
          <ExerciseActivity
            key={props.name + props.duration}
            activity={activity}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
