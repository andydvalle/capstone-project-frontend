import React, { useState, useEffect } from "react";
import TodayChecklist from "../components/TodayChecklist";
import AppointmentChecklist from "../components/AppointmentChecklist";

const Today = (props) => {
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    setMeds(getMeds());
  }, [props]);

  const renderChecklists = () => {
    return meds.map((med) => {
      return (
        <TodayChecklist medication={med.medication} timeOfDay={med.timeOfDay} />
      );
    });
  };

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
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const [day] = useState(weekday());
  const [date] = useState(getDate());

  //build array of objects
  //sort by keys
  const sortMeds = (a, b) => {
    const aKey = a.key;
    const bKey = b.key;

    let comparison = 0;
    if (aKey > bKey) {
      comparison = 1;
    } else if (aKey < bKey) {
      comparison = -1;
    }
    return comparison;
  };

  const getMeds = () => {
    const medsToRender = [];
    props.foundProfile.medications.forEach((medication) => {
      Object.keys(medication).forEach((key) => {
        if (key === day) {
          if (
            medication.instructions === "Daily" ||
            medication.instructions === "Every other day" ||
            medication.instructions === "Every week"
          ) {
            medsToRender.push({
              key: 1,
              medication: medication,
              timeOfDay: "8 AM",
            });
          } else if (medication.instructions === "Twice a day") {
            medsToRender.push({
              key: 1,
              medication: medication,
              timeOfDay: "8 AM",
            });
            medsToRender.push({
              key: 4,
              medication: medication,
              timeOfDay: "5 PM",
            });
          } else if (medication.instructions === "Three times a day") {
            medsToRender.push({
              key: 1,
              medication: medication,
              timeOfDay: "8 AM",
            });
            medsToRender.push({
              key: 2,
              medication: medication,
              timeOfDay: "Noon",
            });
            medsToRender.push({
              key: 4,
              medication: medication,
              timeOfDay: "5 PM",
            });
          } else if (
            medication.instructions === "Four times a day" ||
            medication.instructions === "Every 4 hours" ||
            medication.instructions === "Every 4 to 6 hours"
          ) {
            medsToRender.push({
              key: 1,
              medication: medication,
              timeOfDay: "8 AM",
            });
            medsToRender.push({
              key: 2,
              medication: medication,
              timeOfDay: "Noon",
            });
            medsToRender.push({
              key: 3,
              medication: medication,
              timeOfDay: "4 PM",
            });
            medsToRender.push({
              key: 5,
              medication: medication,
              timeOfDay: "8 PM",
            });
          } else if (medication.instructions === "Every bedtime") {
            medsToRender.push({
              key: 6,
              medication: medication,
              timeOfDay: "Bedtime",
            });
          } else if (
            medication.instructions === "As needed or PRN" ||
            medication.instructions === "Other, please see your note"
          ) {
            medsToRender.push({
              key: 7,
              medication: medication,
              timeOfDay: "***",
            });
          }
        } else {
          return null;
        }
      });
    });
    const sortedMeds = medsToRender.sort(sortMeds);
    return sortedMeds;
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
      {renderChecklists()}
      <div className="subheader mt-4">Appointments</div>
      {renderAppts()}
    </div>
  );
};

export default Today;
