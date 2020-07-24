import React, { useState, useEffect } from "react";
import AppointmentChecklist from "../components/AppointmentChecklist";
import moment from "moment";

const ThisWeek = (props) => {
  const [day, setDay] = useState(moment().format("L"));
  const [sunday, setSunday] = useState([]);
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);

  useEffect(() => {
    assignDays();
  }, []);

  const renderDay = (weekday) => {
    return weekday.map((day) => {
      return <div>{day.title}</div>;
    });
  };

  //assign the appointment to appropriate day
  const assignDays = () => {
    props.foundProfile.appointments.map((appointment) => {
      const d = new Date(appointment.date);
      const n = d.getUTCDay();
      //   const now = moment();
      //   const input = moment(d);
      //   const isThisWeek = now.isoWeek() == input.isoWeek();
      //   console.log(d, now, input, isThisWeek);
      //   if (isThisWeek) {
      if (n === 0) {
        setSunday([...sunday, appointment]);
      }
      if (n === 1) {
        setMonday([...monday, appointment]);
      }
      if (n === 2) {
        setTuesday([...tuesday, appointment]);
      }
      if (n === 3) {
        setWednesday([...wednesday, appointment]);
      }
      if (n === 4) {
        setThursday([...thursday, appointment]);
      }
      if (n === 5) {
        setFriday([...friday, appointment]);
      }
      if (n === 6) {
        setSaturday([...saturday, appointment]);
      }
      //   }
    });
  };

  return (
    <div className="main_content">
      {console.log(day)}
      <div className="header">
        {props.foundProfile.firstName.charAt(0).toUpperCase() +
          props.foundProfile.firstName.slice(1)}
        's Schedule This Week
        {/* 's {day.charAt(0).toUpperCase() + day.slice(1)} Schedule{" "} */}
      </div>
      <div className="subheader">Sunday</div>
      {sunday.length ? renderDay(sunday) : null}
      <div className="subheader">Monday</div>
      {monday.length ? renderDay(monday) : null}
      <div className="subheader">Tuesday</div>
      {tuesday.length ? renderDay(tuesday) : null}
      <div className="subheader">Wednesday</div>
      {wednesday.length ? renderDay(wednesday) : null}
      <div className="subheader">Thursday</div>
      {thursday.length ? renderDay(thursday) : null}
      <div className="subheader">
        Friday {moment().subtract(10, "days").calendar()}
      </div>
      {friday.length ? renderDay(friday) : null}
      <div className="subheader">Saturday</div>
      {saturday.length ? renderDay(saturday) : null}
    </div>
  );
};

export default ThisWeek;
