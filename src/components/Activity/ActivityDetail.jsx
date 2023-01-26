import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityContent from "./ActivityContent";

const ActivityDetail = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

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
  }, [fetchData]);

  return (
    <div className="max-w-[1024px]  mx-auto  min-h-screen h-screen w-full">
      <h1
        className="text-4xl font-bold my-10 text-center text-secondary dark:text-primary
      rounded-md p-2 mx-auto w-fit bg-green dark:bg-brown"
      >
        Exercise Detail
      </h1>
      <ActivityContent data={details} />
    </div>
  );
};

export default ActivityDetail;
