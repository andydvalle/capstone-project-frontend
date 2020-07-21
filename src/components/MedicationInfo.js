import React from "react";

const MedicationInfo = (props) => {

  return (
    <div>
       {props.medication.name_route}
    </div>
  );
};

export default MedicationInfo;
