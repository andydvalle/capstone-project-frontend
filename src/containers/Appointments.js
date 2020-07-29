import React, { Component } from "react";
import AppointmentInfo from "../components/AppointmentInfo";

class Appointments extends Component {
  timeDisplay = (time) => {
    time = time.split(":"); // convert to array

    // fetch
    const hours = Number(time[0]);
    const minutes = Number(time[1]);

    // calculate
    let timeValue = "";

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }

    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
    timeValue += hours >= 12 ? " PM" : " AM"; // get AM/PM

    return timeValue;
  };

  displayDate = (apptDate) => {
    const date = new Date(apptDate);
    const displayDate =
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() + 1 : "0" + (date.getDate() + 1)) +
      "/" +
      date.getFullYear();

    return displayDate;
  };

  renderAppointments = () => {
    return this.props.appointments.map((appointment) => {
      const date = this.displayDate(appointment.date);
      const time = this.timeDisplay(appointment.time);
      return (
        <div>
          <span data-toggle="collapse" data-target={`#${appointment.id}`}>
            <div className="row">
              <div className="item-header">{appointment.title}</div>
              <div>
                {date} @ {time}
              </div>
            </div>
          </span>
          <div id={appointment.id} className="collapse">
            <AppointmentInfo
              key={appointment.id}
              appointment={appointment}
              clinics={this.props.clinics}
              date={date}
              time={time}
              removeAppointment={this.props.removeAppointment}
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="main_content">
        <div className="header">Appointments</div>
        <div className="info">{this.renderAppointments()}</div>
      </div>
    );
  }
}

export default Appointments;
