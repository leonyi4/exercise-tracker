import { useLoaderData } from "react-router-dom";
import ExerciseActivity from "./ExerciseActivity";

const ExerciseList = () => {
  const data = useLoaderData();
  const formData = [];
  for (const key in data) {
    formData.push({ ...data[key] });
  }

  return (
    <div className="mt-20 max-h-full">
      <ul className="no-underline w-full ">
        {formData.map((activity) => (
          <ExerciseActivity
            key={activity._id}
            _id={activity._id}
            activity={activity.exerciseData}
            exerciseType={activity.exerciseType}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
