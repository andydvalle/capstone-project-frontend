import React, { Component } from "react";
import MedicationInfo from "../components/MedicationInfo";

class Medications extends Component {
  renderMedications = () => {
    return this.props.medications.map((medication) => {
      return (
        <div>
          <span data-toggle="collapse" data-target={`#${medication.id}`}>
            <div className="row">
              <div className="item-header">
                {medication.name_route
                  .toLowerCase()
                  .replace(/ *\([^)]*\) */g, "")}
              </div>
            </div>
          </span>
          <div id={medication.id} className="collapse">
            <MedicationInfo
              key={medication.id}
              medication={medication}
              removeMedication={this.props.removeMedication}
              updateMedication={this.props.updateMedication}
            />
          </div>
        </div>
      );
    });
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
