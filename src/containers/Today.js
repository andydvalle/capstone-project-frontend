import React, { useState } from "react";
import TodayChecklist from "../components/TodayChecklist";
import AppointmentChecklist from "../components/AppointmentChecklist";

const Today = (props) => {
  const weekday = () => {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    const n = weekday[d.getDay()];
    return n;
  };

  const getDate = () => {
    const d = new Date();
    const mm = `0${+d.getMonth() + 1}`;
    const yyyy = `${d.getFullYear()}`;
    const dd = `${d.getDate()}`;
    const dStr = `${yyyy}-${mm}-${dd}`;
    return dStr;
  };

  const [day] = useState(weekday());
  const [date] = useState(getDate());

  const renderMeds = () => {
    return props.foundProfile.medications.map((medication) => {
      return Object.keys(medication).map((key) => {
        if (key === day) {
          if (medication.instructions === "Daily") {
            return (
              <TodayChecklist
                key={medication.id}
                medication={medication}
                timeOfDay="8 AM"
              />
            );
          } else if (medication.instructions === "Every bedtime") {
            return (
              <TodayChecklist
                key={medication.id}
                medication={medication}
                timeOfDay="Bedtime"
              />
            );
          }
        } else {
          return null;
        }
      });
    });
  };

  const renderAppts = () => {
    return props.foundProfile.appointments.map((appointment) => {
      if (appointment.date === date) {
        return (
          <div className="checklist">
            <AppointmentChecklist
              key={appointment.id}
              appointment={appointment}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className="main_content">
      <div className="header">
        {props.foundProfile.firstName.charAt(0).toUpperCase() +
          props.foundProfile.firstName.slice(1)}
        's {day.charAt(0).toUpperCase() + day.slice(1)} Schedule{" "}
      </div>
      <div className="subheader">Medications</div>
      {renderMeds()}
      <div className="subheader">Appointments</div>
      {renderAppts()}
    </div>
  );
};

export default Today;
