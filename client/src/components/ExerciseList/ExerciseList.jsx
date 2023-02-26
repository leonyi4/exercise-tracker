import { useLoaderData } from "react-router-dom";
import ExerciseActivity from "./ExerciseActivity";

const ExerciseList = (props) => {
  const data = useLoaderData();

  const formData = [];
  for (const key in data) {
    formData.push({ id: key, ...data[key] });
  }

  return (
    <div className="mt-20 max-h-full">
      <ul className="no-underline w-full ">
        {formData.map((activity) => (
          <ExerciseActivity
            key={activity.id}
            id={activity.id}
            activity={activity}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
