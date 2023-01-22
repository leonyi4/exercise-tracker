import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExerciseActivity from "./ExerciseActivity";

const ExerciseList = (props) => {
  const [formData, setFormData] = useState();

  const fetchExercises = useCallback(() => {
    fetch(
      "https://exercise-tracker-d2354-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
    )
      .then(async (response) => {
        const data = await response.json();

        const loadedData = [];
        for (const key in data) {
          loadedData.push({ id: key, ...data[key] });
        }
        console.log(loadedData);

        setFormData(loadedData);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  return (
    <div className="mt-20 max-h-full bg-secondary ">
      <ul className="no-underline w-full ">
        {formData.map((activity) => (
          <ExerciseActivity key={uuidv4()} activity={activity} />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
