import React, { Component } from "react";
import AppointmentForm from "../components/AppointmentForm";
import MedicationForm from "../components/MedicationForm";
import ConditionForm from "../components/ConditionForm";
import HealthContactForm from "../components/HealthContactForm";

class FormModal extends Component {

  handleChange = (e) => {
    if(e.target.name === "option1"){
      console.log(e.target.value)
    }
  }

  render() {
    return (
      // <div className="temp-border">
      // Hi from FormModal

      <div className="main_content">
        <button
          type="button"
          id="add-form"
          className="btn btn-info"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          +
        </button>

        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          {/* Form modal */}
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* radio buttons */}
              <div className="row">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="Appointment"
                    onChange={this.handleChange}
                    />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                  Appointment
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="Medication"
                    onChange={this.handleChange}
                    />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Medication
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="Condition"
                    onChange={this.handleChange}
                    />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Condition
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio4"
                    value="HealthContact"
                    onChange={this.handleChange}
                    />
                  <label className="form-check-label" htmlFor="inlineRadio4">
                    Health Contact
                  </label>
                </div>
              </div>
              {/* forms */}
              <AppointmentForm />
              <MedicationForm />
              <ConditionForm />
              <HealthContactForm />
            </div>
          </div>
        </div>
      </div>

      // </div>
    );
  }
}

export default FormModal;
