import React from "react";
import { useParams } from "react-router-dom";

const ActivityDetail = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="max-w-[1024px]  mx-auto  min-h-screen  w-full">
      {params.id}
    </div>
  );
};

export default ActivityDetail;
