import React from "react";

const AppointmentChecklist = (props) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={props.appointment.title}
        id="defaultCheck1"
      />
      <label className="form-check-label strikethrough" htmlFor="defaultCheck1">
        {props.appointment.title}
      </label>
    </div>
  );
};

export default AppointmentChecklist;
