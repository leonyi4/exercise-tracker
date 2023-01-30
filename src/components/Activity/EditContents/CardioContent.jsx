import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardioContent = (props) => {
  const [activity, setActivity] = useState("");
  const [speed, setSpeed] = useState();
  const [duration, setDuration] = useState();
  const navigate = useNavigate();

  const addData = useCallback(() => {
    setActivity(props.data.activity);
    setSpeed(props.data.speed);
    setDuration(props.data.duration);
  }, [props.data.activity, props.data.speed, props.data.duration]);

  useEffect(() => {
    addData();
  }, [addData]);

  const cancelHandler = () => {
    navigate(-1);
  };

  const submitHandler = () => {
    const data = {
      activity,
      speed,
      duration,
      id: props.id,
      type: "Cardio",
      date: props.data.date,
    };
    props.submitData(data);
  };
  return (
    <div
      className="grid grid-cols-2 grid-rows-5 mx-auto w-[280px] rounded-md  text-center text-lg
       bg-brown dark:bg-green text-primary dark:text-black
       sm:w-[600px] sm:text-xl"
    >
      <div className="col-span-2 row-span-1 py-2 font-semibold">
        {props.data.date}
      </div>
      <div className="col-span-1 row-span-1 py-2  font-semibold my-1">
        Activity
      </div>
      <textarea
        className="col-span-1 row-span-1 p-2 bg-darkGreen my-1 resize-none text-center placeholder-gray-600"
        placeholder={activity}
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      ></textarea>
      <div className="col-span-1 row-span-1 py-2 font-semibold my-1">Speed</div>
      <textarea
        className="col-span-1 row-span-1 p-2 bg-darkGreen my-1 resize-none text-center placeholder-gray-600"
        placeholder={speed}
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      ></textarea>
      <div className="col-span-1 row-span-1 py-2 font-semibold my-1">
        Duration{" "}
      </div>
      <textarea
        className="col-span-1 row-span-1 p-2 bg-darkGreen my-1 resize-none text-center placeholder-gray-600"
        placeholder={duration}
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      ></textarea>

      <div className="col-span-1 row-span-2 justify-self-end mr-2 mb-2">
        <button onClick={submitHandler} className="btn">
          Confirm
        </button>
      </div>
      <div className="col-span-1 row-span-2 justify-self-start ml-2 mb-2">
        <button onClick={cancelHandler} className="btn">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default CardioContent;
