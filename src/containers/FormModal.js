import React, { Component } from "react";
import ConditionForm from "../components/ConditionForm"

class FormModal extends Component {
  render() {
    return (
      <div className="temp-border">
      Hi from FormModal
        <ConditionForm />
      </div>
    );
  }
}

export default FormModal;