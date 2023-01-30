import React from "react";
import CalisthenicsContent from "./EditContents/CalisthenicsContent";
import CardioContent from "./EditContents/CardioContent";
import FlexibilityContent from "./EditContents/FlexibilityContent";
import WeightContent from "./EditContents/WeightContent";

const EditActivityContent = (props) => {
  if (props.data.type === "Cardio") {
    return (
      <CardioContent
        submitData={props.submitData}
        data={props.data}
        id={props.id}
      />
    );
  }
  if (props.data.type === "Weight") {
    return (
      <WeightContent
        submitData={props.submitData}
        data={props.data}
        id={props.id}
      />
    );
  }
  if (props.data.type === "Calisthenics") {
    return (
      <CalisthenicsContent
        submitData={props.submitData}
        data={props.data}
        id={props.id}
      />
    );
  }
  if (props.data.type === "Flexibility") {
    return (
      <FlexibilityContent
        submitData={props.submitData}
        data={props.data}
        id={props.id}
      />
    );
  }
};

export default EditActivityContent;
