import React from "react";

const ActivityContent = (props) => {
  if (props.data.type === "Cardio") {
    return (
      <CardioContent data={props.data} deleteActivity={props.deleteActivity} />
    );
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
    <div
      className="grid grid-cols-2 grid-rows-5 mx-auto w-[600px] rounded-md  text-center text-lg
     bg-brown dark:bg-green text-primary dark:text-black"
    >
      <div className="col-span-2 row-span-1 py-2 font-semibold">
        {props.data.date}
      </div>
      <div className="col-span-1 row-span-1 py-2  font-semibold">Activity</div>
      <div className="col-span-1 row-span-1 py-2">{props.data.activity} </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">Speed</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.speed} km/h</div>
      <div className="col-span-1 row-span-1 py-2 font-semibold">Duration </div>
      <div className="col-span-1 row-span-1 py-2 ">
        {props.data.duration} mins
      </div>

      <div className="col-span-1 row-span-2 justify-self-end mr-2 mb-2">
        <button className="btn">Edit</button>
      </div>
      <div className="col-span-1 row-span-2 justify-self-start ml-2 mb-2">
        <button onClick={props.deleteActivity} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

const WeightContent = (props) => {
  return (
    <div
      className="grid grid-cols-2 grid-rows-7 mx-auto w-[600px] rounded-md  text-center text-lg
     bg-brown dark:bg-green text-primary dark:text-black"
    >
      <div className="col-span-2 row-span-1 py-2 font-semibold">
        {props.data.date}
      </div>
      <div className="col-span-1 row-span-1 py-2  font-semibold">Activity</div>
      <div className="col-span-1 row-span-1 py-2">{props.data.activity} </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">weight</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.weight} kg</div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">reps</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.reps}</div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">sets</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.sets} </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold">Duration </div>
      <div className="col-span-1 row-span-1 py-2 ">
        {props.data.duration} mins
      </div>

      <div className="col-span-1 row-span-2 justify-self-end mr-2 mb-2">
        <button className="btn">Edit</button>
      </div>
      <div className="col-span-1 row-span-2 justify-self-start ml-2 mb-2">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};
const CalisthenicsContent = (props) => {
  return (
    <div
      className="grid grid-cols-2 grid-rows-6 mx-auto w-[600px] rounded-md  text-center text-lg
     bg-brown dark:bg-green text-primary dark:text-black"
    >
      <div className="col-span-2 row-span-1 py-2 font-semibold">
        {props.data.date}
      </div>
      <div className="col-span-1 row-span-1 py-2  font-semibold">Activity</div>
      <div className="col-span-1 row-span-1 py-2">{props.data.activity} </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">reps</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.reps}</div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">sets</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.sets} </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold">Duration </div>
      <div className="col-span-1 row-span-1 py-2 ">
        {props.data.duration} mins
      </div>

      <div className="col-span-1 row-span-2 justify-self-end mr-2 mb-2">
        <button className="btn">Edit</button>
      </div>
      <div className="col-span-1 row-span-2 justify-self-start ml-2 mb-2">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};
const FlexibilityContent = (props) => {
  return (
    <div
      className="grid grid-cols-2 grid-rows-7 mx-auto w-[600px] rounded-md  text-center text-lg
     bg-brown dark:bg-green text-primary dark:text-black"
    >
      <div className="col-span-2 row-span-1 py-2 font-semibold">
        {props.data.date}
      </div>
      <div className="col-span-1 row-span-1 py-2  font-semibold">Activity</div>
      <div className="col-span-1 row-span-1 py-2">{props.data.activity} </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">reps</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.reps}</div>
      <div className="col-span-1 row-span-1 py-2 font-semibold ">sets</div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.sets} </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold">Duration </div>
      <div className="col-span-1 row-span-1 py-2 ">
        {props.data.duration} mins
      </div>

      <div className="col-span-1 row-span-2 justify-self-end mr-2 mb-2">
        <button className="btn">Edit</button>
      </div>
      <div className="col-span-1 row-span-2 justify-self-start ml-2 mb-2">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};
