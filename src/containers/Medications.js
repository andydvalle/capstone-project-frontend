import React, { Component } from "react";
import MedicationInfo from "../components/MedicationInfo"

class Medications extends Component {

  renderMedications = () => {
    return this.props.medications.map(medication=> {
      return <MedicationInfo key={medication.id} medication={medication}/>
    })
  };

  render() {
    return (
      <div>
        {/* Hi from Medications */}
        <div className="main_content">
          <div className="header">Medications</div>
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
