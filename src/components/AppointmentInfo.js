import React from "react";

const AppointmentInfo = (props) => {
  return <div className="dropdown-info">{props.appointment.title}</div>;
};

export default AppointmentInfo;
