import React, { Component } from "react";
import AppointmentInfo from "../components/AppointmentInfo";

class Appointments extends Component {
  renderAppointments = () => {
    return this.props.appointments.map((appointment) => {
      return <AppointmentInfo key={appointment.id} appointment={appointment} />;
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
