import React from "react";

const AppointmentChecklist = (props) => {
  const timeDisplay = (time) => {
    time = time.split(":");

    const hours = Number(time[0]);
    const minutes = Number(time[1]);

    let timeValue = "";

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }

    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes;
    timeValue += hours >= 12 ? " PM" : " AM";

    return timeValue;
  };

  return (
    <div className="form-check">
      <input className="form-check-input big-checkbox" type="checkbox" />
      <label className="form-check-label strikethrough">
        <div className="row">
          <div className="form-check-detail timeOfDay">
            {timeDisplay(props.appointment.time)}
          </div>
          <div className="form-check-detail med">
            {props.appointment.title.toLowerCase()}
          </div>
        </div>
      </label>
    </div>
  );
};

export default AppointmentChecklist;
