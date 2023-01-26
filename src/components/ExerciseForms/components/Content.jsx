import React, { useRef } from "react";

const Content = (props) => {
  if (props.selected === "Cardio") {
    return (
      <CardioForm onAddData={props.addData} closeHandler={props.closeHandler} />
    );
  }
  if (props.selected === "Weight") {
    return (
      <WeightForm onAddData={props.addData} closeHandler={props.closeHandler} />
    );
  }
  if (props.selected === "Calisthenics") {
    return (
      <CalisthenicsForm
        onAddData={props.addData}
        closeHandler={props.closeHandler}
      />
    );
  }
  if (props.selected === "Flexibility") {
    return (
      <FlexibilityForm
        onAddData={props.addData}
        closeHandler={props.closeHandler}
      />
    );
  }

  return <div> </div>;
};

const CardioForm = (props) => {
  const activityRef = useRef("");
  const speedRef = useRef();
  const durationRef = useRef();

  const submitHandler = () => {
    const data = {
      activity: activityRef.current.value,
      speed: speedRef.current.value,
      duration: durationRef.current.value,
    };

    props.onAddData(data);
  };

  return (
    <div className="mt-4 text-lg font-medium text-center text-white dark:text-black  flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20 ">activity</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-black"
          type="text"
          name="activity"
          placeholder="activity name"
          ref={activityRef}
        />
      </label>

      <label className="inline-flex">
        <p className="w-20 ">speed </p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-black"
          type="number"
          name="speed"
          placeholder="speed km/h"
          ref={speedRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration </p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-black"
          type="number"
          name="duration"
          placeholder="activity duration (mins)"
          ref={durationRef}
        />
      </label>
      <div className="flex flex-row-reverse">
        <button
          type="button"
          onClick={(e) => props.closeHandler()}
          className="mx-1 mt-2 p-2 rounded-2xl border-[3px] text-white dark:text-black  font-semibold
         dark:bg-primary dark:border-secondary hover:bg-orange dark:hover:bg-brown
          bg-secondary border-primary dark:hover:text-primary "
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={submitHandler}
          className="mx-1 mt-2 p-2 rounded-2xl border-[3px] text-white dark:text-black  font-semibold
         dark:bg-primary dark:border-secondary hover:bg-orange dark:hover:bg-brown
          bg-secondary border-primary dark:hover:text-primary "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const WeightForm = (props) => {
  const activityRef = useRef("");
  const weightRef = useRef();
  const repsRef = useRef();
  const setsRef = useRef();
  const durationRef = useRef();

  const submitHandler = () => {
    const data = {
      activity: activityRef.current.value,
      weight: weightRef.current.value,
      reps: repsRef.current.value,
      sets: setsRef.current.value,
      duration: durationRef.current.value,
    };

    props.onAddData(data);
  };
  return (
    <div className="mt-4 text-lg font-medium text-center text-white dark:text-black flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20">activity</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black] "
          type="text"
          name="activity"
          placeholder="activity name"
          ref={activityRef}
        />
      </label>

      <label className="inline-flex">
        <p className="w-20">weight</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="weight"
          placeholder="kg"
          ref={weightRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">reps</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="reps"
          placeholder="number of reps"
          ref={repsRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">sets</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="sets"
          placeholder="number of sets"
          ref={setsRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="duration"
          placeholder="activity duration (mins)"
          ref={durationRef}
        />
      </label>
      <div className="flex flex-row-reverse">
        <button
          type="button"
          onClick={(e) => props.closeHandler()}
          className="mx-1 mt-2 p-2 rounded-2xl border-[3px] text-white dark:text-black  font-semibold
           dark:bg-primary dark:border-secondary hover:bg-orange dark:hover:bg-brown
            bg-secondary border-primary dark:hover:text-primary "
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={submitHandler}
          className="mx-1 mt-2 p-2 rounded-2xl border-[3px] text-white dark:text-black  font-semibold
         dark:bg-primary dark:border-secondary hover:bg-orange dark:hover:bg-brown
          bg-secondary border-primary dark:hover:text-primary "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const CalisthenicsForm = (props) => {
  const activityRef = useRef("");
  const repsRef = useRef();
  const setsRef = useRef();
  const durationRef = useRef();

  const submitHandler = () => {
    const data = {
      activity: activityRef.current.value,
      reps: repsRef.current.value,
      sets: setsRef.current.value,
      duration: durationRef.current.value,
    };

    props.onAddData(data);
  };

  return (
    <div className="mt-4 text-lg font-medium text-center text-white dark:text-black flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20">activity</p>
        <input
          className="flex-grow pl-2 rounded-md bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="text"
          name="activity"
          placeholder="activity name"
          ref={activityRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">reps</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="reps"
          placeholder="number of reps"
          ref={repsRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">sets</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="sets"
          placeholder="number of sets"
          ref={setsRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="duration"
          placeholder="activity duration (mins)"
          ref={durationRef}
        />
      </label>
      <div className="flex flex-row-reverse">
        <button
          type="button"
          onClick={(e) => props.closeHandler()}
          className="mx-1 mt-2 btn "
        >
          Cancel
        </button>
        <button type="submit" onClick={submitHandler} className="mx-1 mt-2 btn">
          Submit
        </button>
      </div>
    </div>
  );
};

const FlexibilityForm = (props) => {
  const activityRef = useRef("");
  const repsRef = useRef();
  const setsRef = useRef();
  const durationRef = useRef();

  const submitHandler = () => {
    const data = {
      activity: activityRef.current.value,
      reps: repsRef.current.value,
      sets: setsRef.current.value,
      duration: durationRef.current.value,
    };

    props.onAddData(data);
  };
  return (
    <div className="mt-4 text-lg font-medium text-center text-white dark:text-black flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20">activity</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="text"
          name="activity"
          placeholder="activity name"
          ref={activityRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">reps</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="reps"
          placeholder="number of reps"
          ref={repsRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">sets</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="sets"
          placeholder="number of sets"
          ref={setsRef}
        />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration</p>
        <input
          className="flex-grow rounded-md pl-2 bg-primary dark:bg-black dark:text-primary focus:bg-gray-300 text-[black]"
          type="number"
          name="duration"
          placeholder="activity duration (mins)"
          ref={durationRef}
        />
      </label>
      <div className="flex flex-row-reverse">
        <button
          type="button"
          onClick={(e) => props.closeHandler()}
          className="mx-1 mt-2 p-2 rounded-2xl border-[3px] text-white dark:text-black  font-semibold
           dark:bg-primary dark:border-secondary hover:bg-orange dark:hover:bg-brown 
           bg-secondary border-primary dark:hover:text-primary "
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={submitHandler}
          className="mx-1 mt-2 p-2 rounded-2xl border-[3px] text-white dark:text-black 
         font-semibold dark:bg-primary dark:border-secondary hover:bg-orange dark:hover:bg-brown
          bg-secondary border-primary dark:hover:text-primary "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Content;
