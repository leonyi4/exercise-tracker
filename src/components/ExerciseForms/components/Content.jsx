import React from "react";

const Content = (props) => {
  if (props.selected === "cardio") {
    return <CardioForm />;
  }
  if (props.selected === "weight") {
    return <WeightForm />;
  }
  if (props.selected === "calisthenics") {
    return <CalisthenicsForm />;
  }
  if (props.selected === "flexibility") {
    return <FlexibilityForm />;
  }

  return <div> </div>;
};

const CardioForm = () => {
  return (
    <div className="mt-4 text-lg text-center text-black flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20 ">name </p>
        <input className="flex-grow" type="text" name="name" />
      </label>

      <label className="inline-flex">
        <p className="w-20 ">speed </p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration </p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
    </div>
  );
};

const WeightForm = () => {
  return (
    <div className="mt-4 text-lg text-center text-black flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20">name</p>
        <input className="flex-grow" type="text" name="name" />
      </label>

      <label className="inline-flex">
        <p className="w-20">weight</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">reps</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">sets</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
    </div>
  );
};

const CalisthenicsForm = () => {
  return (
    <div className="mt-4 text-lg text-center text-black flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20">name</p>
        <input className="flex-grow" type="text" name="name" />
      </label>
      <label className="inline-flex">
        <p className="w-20">reps</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">sets</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
    </div>
  );
};

const FlexibilityForm = () => {
  return (
    <div className="mt-4 text-lg text-center text-black flex flex-col gap-2">
      <label className="inline-flex ">
        <p className="w-20">name</p>
        <input className="flex-grow" type="text" name="name" />
      </label>
      <label className="inline-flex">
        <p className="w-20">weight</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">reps</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">sets</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
      <label className="inline-flex">
        <p className="w-20">duration</p>
        <input className="flex-grow" type="text" name="amount" />
      </label>
    </div>
  );
};

export default Content;
