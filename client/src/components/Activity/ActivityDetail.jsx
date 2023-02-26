import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActivityContent from "./ActivityContent";

const ActivityDetail = () => {
  const [details, setDetails] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const response = await fetch(
      `https://exercise-tracker-d2354-default-rtdb.asia-southeast1.firebasedatabase.app/data/${params.id}.json`
    );

    const data = await response.json();
    setDetails((details) => ({
      ...details,
      ...data,
    }));
  }, [params.id]);

  useEffect(() => {
    fetchData();
    window.scroll(0, 0);
  }, [fetchData]);

  const deleteHandler = async (id) => {
    try {
      await fetch(
        `https://exercise-tracker-d2354-default-rtdb.asia-southeast1.firebasedatabase.app/data/${id}.json`,
        { method: "DELETE" }
      );
      navigate("/view");
    } catch (err) {
      console.log(err.message);
    }
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-[1024px]  mx-auto  min-h-screen h-screen w-full">
      <h1
        className="text-4xl font-bold my-10 text-center text-secondary dark:text-primary
      rounded-md p-2 mx-auto w-fit bg-green dark:bg-brown"
      >
        Exercise Detail
      </h1>
      <ActivityContent
        id={params.id}
        deleteActivity={deleteHandler}
        data={details}
      />
      <button
        onClick={backHandler}
        className="btn text-center w-24 content-center block my-5 mx-auto"
      >
        Back
      </button>
    </div>
  );
};

export default ActivityDetail;
