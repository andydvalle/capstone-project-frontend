import React from "react";

const ConditionInfo = (props) => {

  return (
    <div>
       {props.condition.name.charAt(0).toUpperCase() + props.condition.name.slice(1)}
    </div>
  );
};

export default ConditionInfo;
