import React, { Component } from "react";

class Conditions extends Component {
  renderConditions = () => {
    return this.props.patients.map((patient) => {
      if (patient.id === this.props.profileId) {
        return patient.conditions.map((condition) => {
          return (
            <ul>
              <li>{condition.name}</li>
            </ul>
          );
        });
      }
    });
  };

  render() {
    return (
      <div>
        {/* Hi from Conditions */}
        <div className="main_content">
          <div className="header">Conditions {this.props.profileId}</div>
          <div className="info">
            {this.renderConditions()}
            {/* <div>Conditions</div>
            <div>Conditions</div>
            <div>Conditions</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Conditions;
