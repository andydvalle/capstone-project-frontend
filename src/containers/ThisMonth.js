import React from "react";
import events from "../events";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ThisMonth = (props) => {
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
