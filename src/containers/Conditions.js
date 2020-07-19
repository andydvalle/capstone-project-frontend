import React, { Component } from "react";

class Conditions extends Component {
  render() {
    return (
      <div>
        {/* Hi from Conditions */}
        <div className="main_content">
          <div className="header">Conditions {this.props.profileId}</div>
          <div className="info">
            <div>Conditions</div>
            <div>Conditions</div>
            <div>Conditions</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Conditions;
