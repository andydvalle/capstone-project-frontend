import React, { Component } from "react";
import ConditionInfo from "../components/ConditionInfo";

class Conditions extends Component {
  renderConditions = () => {
    return this.props.conditions.map((condition) => {
      return (
        <div>
          <span data-toggle="collapse" data-target={`#${condition.id}`}>
            <div className="row">
              <div className="item-header">{condition.name}</div>
            </div>
          </span>
          <div id={condition.id} className="collapse">
            <ConditionInfo
              key={condition.id}
              condition={condition}
              removeCondition={this.props.removeCondition}
              updateCondition={this.props.updateCondition}
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="main_content">
          <div className="header">Conditions</div>
          <div className="info">{this.renderConditions()}</div>
        </div>
      </div>
    );
  }
}

export default Conditions;
