import React, { useState } from "react";
import exampleEvents from "../events";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ThisMonth = (props) => {
  const [events, setEvents] = useState([]);
  return (
    <div className="main_content">
      <div className="header">{props.foundProfile.firstName}'s Calendar</div>
      <div>
        <Calendar
          localizer={localizer}
          events={exampleEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default ThisMonth;
