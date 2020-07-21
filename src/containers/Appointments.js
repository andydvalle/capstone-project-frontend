import React, { Component } from "react";
import AppointmentInfo from "../components/AppointmentInfo"

class Appointments extends Component {

  renderAppointments = () => {
    return this.props.appointments.map(appointment=>{
      return <AppointmentInfo key={appointment.id} appointment={appointment}/>
    })
  }

  render() {
    return (
      <div>
        {/* Hi from Appointments */}
        <div className="main_content">
    <div className="header">Appointments {this.props.profileId}</div>
          <div className="info">
            <div>Appointments</div>
            <div>Appointments</div>
            <div>Appointments</div>
            {this.renderAppointments()}
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;
