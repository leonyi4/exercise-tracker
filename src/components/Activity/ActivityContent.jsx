import React from "react";
import CalisthenicsContent from "./DetailContent/CalisthenicsContent";
import CardioContent from "./DetailContent/CardioContent";
import FlexibilityContent from "./DetailContent/FlexibilityContent";
import WeightContent from "./DetailContent/WeightContent";

const ActivityContent = (props) => {
  if (props.data.type === "Cardio") {
    return (
      <CardioContent
        id={props.id}
        data={props.data}
        deleteActivity={props.deleteActivity}
      />
    );
  }
  if (props.data.type === "Weight") {
    return (
      <WeightContent
        id={props.id}
        data={props.data}
        deleteActivity={props.deleteActivity}
      />
    );
  }
  if (props.data.type === "Calisthenics") {
    return (
      <CalisthenicsContent
        id={props.id}
        data={props.data}
        deleteActivity={props.deleteActivity}
      />
    );
  }
  if (props.data.type === "Flexibility") {
    return (
      <FlexibilityContent
        id={props.id}
        data={props.data}
        deleteActivity={props.deleteActivity}
      />
    );
  }
};

export default ActivityContent;
