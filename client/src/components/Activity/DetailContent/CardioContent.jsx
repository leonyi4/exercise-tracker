import { useNavigate } from "react-router-dom";
const CardioContent = (props) => {
  const navigate = useNavigate();

  const deleteActivityHandler = () => {
    props.deleteActivity(props.id);
  };

  return (
    <div
      className="grid grid-cols-2 grid-rows-5 mx-auto w-[280px] rounded-md  text-center text-lg
     bg-brown dark:bg-green text-primary dark:text-black
     sm:w-[600px] sm:text-xl "
    >
      <div className="col-span-2 row-span-1 py-2 font-semibold sm:py-1">
        {props.data.date}
      </div>
      <div className="col-span-1 row-span-1 py-2  sm:py-1 font-semibold">
        Activity
      </div>
      <div className="col-span-1 row-span-1 py-2 sm:py-1">
        {props.data.activity}{" "}
      </div>
      <div className="col-span-1 row-span-1 py-2 font-semibold  sm:py-1">
        Speed
      </div>
      <div className="col-span-1 row-span-1 py-2 ">{props.data.speed} km/h</div>
      <div className="col-span-1 row-span-1 py-2 sm:py-1 font-semibold">
        Duration{" "}
      </div>
      <div className="col-span-1 row-span-1 py-2 sm:py-1 ">
        {props.data.duration} mins
      </div>

      <div className="col-span-1 row-span-2 justify-self-end mr-2 mb-2">
        <button className="btn" onClick={(e) => navigate(`edit`)}>
          Edit
        </button>
      </div>
      <div className="col-span-1 row-span-2 justify-self-start ml-2 mb-2">
        <button onClick={deleteActivityHandler} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardioContent;
