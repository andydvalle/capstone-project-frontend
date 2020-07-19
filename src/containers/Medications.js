import React, { Component } from "react";

class Medications extends Component {

  renderMedications = () => {
    return this.props.patients.map((patient) => {
      if (patient.id === this.props.profileId) {
        return patient.medications.map((medication) => {
          return (
            <ul>
              <li key={medication.name}>{medication.name}</li>
            </ul>
          );
        });
      }
    });
  };

  render() {
    return (
      <div>
        {/* Hi from Medications */}
        <div className="main_content">
          <div className="header">Medications {this.props.profileId}</div>
          <div className="info">
            {this.renderMedications()}
            {/* <div>Medications</div>
            <div>Medications</div>
            <div>Medications</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Medications;
