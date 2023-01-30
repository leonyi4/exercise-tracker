import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditActivityContent from "./EditActivityContent";

const EditActivity = (props) => {
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

  const submitHandler = async (data) => {
    const { id, ...body } = data;
    console.log(body);
    console.log(id);
    try {
      await fetch(
        `https://exercise-tracker-d2354-default-rtdb.asia-southeast1.firebasedatabase.app/data/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
        id={params.id}
        data={details}
      />
    </div>
  );
};

export default EditActivity;
