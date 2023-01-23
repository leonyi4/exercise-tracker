import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ExerciseActivity from "./ExerciseActivity";

const ExerciseList = (props) => {
  const formData = useLoaderData();

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
