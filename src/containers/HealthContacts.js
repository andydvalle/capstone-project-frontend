import React, { Component } from "react";
import HealthContactInfo from "../components/HealthContactInfo"

class HealthContacts extends Component {

  renderContacts = () => {
    return this.props.clinics.map(clinic=>{
      return <HealthContactInfo key={clinic.id} clinic={clinic}/>
    })
  }

  render() {
    return (
      <div>
        {/* Hi from HealthContacts */}
        <div className="main_content">
          <div className="header">Clinics</div>
          <div className="info">
            {this.renderContacts()}
          </div>
        </div>
      </div>
    );
  }
}

export default HealthContacts;
