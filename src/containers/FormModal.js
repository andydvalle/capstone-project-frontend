import React, { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";
import MedicationForm from "../components/MedicationForm";
import ConditionForm from "../components/ConditionForm";
import HealthContactForm from "../components/HealthContactForm";

const FormModal = (props) => {
  const [forms, setForms] = useState("Appointment");

  const handleChange = (e) => {
    setForms(`${e.target.value}`);
  };

  function renderForm(forms) {
    if (forms === "Appointment") {
      return <AppointmentForm />;
    } else if (forms === "Medication") {
      return <MedicationForm />;
    } else if (forms === "Condition") {
      return <ConditionForm />;
    } else if (forms === "Contact") {
      return <HealthContactForm />;
    }
  }

  const chooseForm = (forms) => {
    renderForm(forms);
  };

  useEffect(() => {
    chooseForm(forms);
  }, [forms]);

  return (
    <div className="main_content">
      <button
        type="button"
        id="add-form"
        className="btn btn-primary"
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
            <div className="form-modal">
              New {forms} {props.profileId}
            </div>
            <div className="p-3">
              {/* radio buttons */}
              <div className="p-3">
                <div>I am adding a(n)...</div>
                <div className="row">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Appointment"
                      onChange={handleChange}
                      defaultChecked
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      value="Contact"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                      Health Contact
                    </label>
                  </div>
                </div>
              </div>
              {/* forms */}
              {renderForm(forms)}
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default FormModal;
