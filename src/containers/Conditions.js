import React, { Component } from "react";
import ConditionInfo from "../components/ConditionInfo"

class Conditions extends Component {
  renderConditions = () => {
    return this.props.conditions.map((condition) => {
     return <ConditionInfo key={condition.id} condition={condition}/>
    });
  };

  render() {
    return (
      <div>
        {/* Hi from Conditions */}
        <div className="main_content">
          <div className="header">Conditions</div>
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
