import { useLoaderData } from "react-router-dom";
import ExerciseActivity from "./ExerciseActivity";

const ExerciseList = (props) => {
  const data = useLoaderData();
  const formData = [];
  for (const key in data) {
    formData.push({ ...data[key] });
  }
  console.log(formData[0]._id);
  console.log(formData[0].exerciseType);
  console.log(formData[0].exerciseData);

  return (
    <div className="mt-20 max-h-full">
      <ul className="no-underline w-full ">
        {formData.map((activity) => (
          <ExerciseActivity
            key={activity._id}
            id={activity._id}
            activity={activity.exerciseData}
            exerciseType={activity.exerciseType}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
