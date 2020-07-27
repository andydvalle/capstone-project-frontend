import React, { useState, useEffect } from "react";
import exampleEvents from "../events";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ThisMonth = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    formatEvent();
  }, []);

  //     Example format of event
  //   {
  //     title: "Conference",
  //     start: new Date(2020, 6, 27, 12, 0, 0),
  //     end: new Date(2020, 6, 27, 12, 0, 0),
  //     desc: "Big conference for important people",
  //   },

  const formatEvent = () => {
    const array = props.foundProfile.appointments.map((appointment) => {
      const splitDate = appointment.date.split("-");
      const year = parseInt(splitDate[0]);
      const month = parseInt(splitDate[1]) - 1;
      const day = parseInt(splitDate[2]);
      const splitTime = appointment.time.split(":");
      const hour = parseInt(splitTime[0]);
      const minute = parseInt(splitTime[1]);
      const date = new Date(year, month, day, hour, minute, 0);

      const event = {
        title: appointment.title,
        start: date,
        end: date,
        desc: appointment.notes,
      };

      return event;
    });
    setEvents(array);
  };

  return (
    <div className="main_content">
      <div className="header">{props.foundProfile.firstName}'s Calendar</div>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default ThisMonth;
