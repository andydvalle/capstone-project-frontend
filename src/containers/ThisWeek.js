import React from "react";

const ThisWeek = (props) => {
  return (
    <div className="main_content">
      <div className="header">
        {props.foundProfile.firstName.charAt(0).toUpperCase() +
          props.foundProfile.firstName.slice(1)}
        's Schedule This Week
        {/* 's {day.charAt(0).toUpperCase() + day.slice(1)} Schedule{" "} */}
      </div>
      {/* <div className="subheader">Medications</div>
          {renderMeds()}
          <div className="subheader">Appointments</div>
          {renderAppts()} */}
    </div>
  );
};

export default ThisWeek;
