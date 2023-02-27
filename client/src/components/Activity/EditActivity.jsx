import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditActivityContent from "./EditActivityContent";

const EditActivity = (props) => {
  const [details, setDetails] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const response = await fetch(`http://localhost:5000/view/${params.id}`);

    const data = await response.json();
    setDetails((details) => ({
      ...data.activity,
    }));
  }, [params.id]);

  useEffect(() => {
    fetchData();
    window.scroll(0, 0);
  }, [fetchData]);

  const submitHandler = async (data) => {
    const { id, exerciseData } = data;
    console.log(exerciseData);
    console.log(id);
    try {
      await fetch(`http://localhost:5000/view/${id}/edit`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Data updated successfully!");
      navigate("/view");
    } catch (err) {
      console.error(`Error updating ${id}: ${err}`);
    }
  };

  return (
    <div className="max-w-[1024px]  mx-auto  min-h-screen h-screen w-full">
      <h1
        className="text-4xl font-bold my-10 text-center text-secondary dark:text-primary
      rounded-md p-2 mx-auto w-fit bg-green dark:bg-brown"
      >
        Edit Activity
      </h1>
      <EditActivityContent
        submitData={submitHandler}
        id={details._id}
        exerciseType={details.exerciseType}
        exerciseData={details.exerciseData}
      />
    </div>
  );
};

export default EditActivity;
