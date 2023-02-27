import React from "react";
import CalisthenicsContent from "./EditContents/CalisthenicsContent";
import CardioContent from "./EditContents/CardioContent";
import FlexibilityContent from "./EditContents/FlexibilityContent";
import WeightContent from "./EditContents/WeightContent";

const EditActivityContent = (props) => {
  if (props.exerciseType === "Cardio") {
    return (
      <CardioContent
        submitData={props.submitData}
        data={props.exerciseData}
        id={props.id}
      />
    );
  }
  if (props.exerciseType === "Weight") {
    return (
      <WeightContent
        submitData={props.submitData}
        data={props.exerciseData}
        id={props.id}
      />
    );
  }
  if (props.exerciseType === "Calisthenics") {
    return (
      <CalisthenicsContent
        submitData={props.submitData}
        data={props.exerciseData}
        id={props.id}
      />
    );
  }
  if (props.exerciseType === "Flexibility") {
    return (
      <FlexibilityContent
        submitData={props.submitData}
        data={props.exerciseData}
        id={props.id}
      />
    );
  }
};

export default EditActivityContent;
