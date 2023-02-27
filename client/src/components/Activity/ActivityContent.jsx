import React from "react";
import CalisthenicsContent from "./DetailContent/CalisthenicsContent";
import CardioContent from "./DetailContent/CardioContent";
import FlexibilityContent from "./DetailContent/FlexibilityContent";
import WeightContent from "./DetailContent/WeightContent";

const ActivityContent = (props) => {
  if (props.exerciseType === "Cardio") {
    return (
      <CardioContent
        id={props._id}
        data={props.exerciseData}
        deleteActivity={props.deleteActivity}
      />
    );
  }
  if (props.exerciseType === "Weight") {
    return (
      <WeightContent
        id={props._id}
        data={props.exerciseData}
        deleteActivity={props.deleteActivity}
      />
    );
  }
  if (props.exerciseType === "Calisthenics") {
    return (
      <CalisthenicsContent
        id={props._id}
        data={props.exerciseData}
        deleteActivity={props.deleteActivity}
      />
    );
  }
  if (props.exerciseType === "Flexibility") {
    return (
      <FlexibilityContent
        id={props._id}
        data={props.exerciseData}
        deleteActivity={props.deleteActivity}
      />
    );
  }
};

export default ActivityContent;
