import React, { Component } from "react";
import HealthContactInfo from "../components/HealthContactInfo";

class HealthContacts extends Component {
  renderContacts = () => {
    return this.props.clinics.map((clinic) => {
      return (
        <div>
          <span data-toggle="collapse" data-target={`#${clinic.id}`}>
            <div className="row">
              <div className="item-header">{clinic.name}</div>
            </div>
          </span>
          <div id={clinic.id} className="collapse">
            <HealthContactInfo
              key={clinic.id}
              clinic={clinic}
              removeClinic={this.props.removeClinic}
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {/* Hi from HealthContacts */}
        <div className="main_content">
          <div className="header">Clinics</div>
          <div className="info">{this.renderContacts()}</div>
        </div>
      </div>
    );
  }
}

export default HealthContacts;
