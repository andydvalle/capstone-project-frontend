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
      return (
        <AppointmentForm
          clinics={props.foundProfile.clinics}
          patientId={props.profileId}
          addAppointment={props.addAppointment}
        />
      );
    } else if (forms === "Medication") {
      return (
        <MedicationForm
          patientId={props.profileId}
          addMedication={props.addMedication}
        />
      );
    } else if (forms === "Condition") {
      return (
        <ConditionForm
          patientId={props.profileId}
          addCondition={props.addCondition}
        />
      );
    } else if (forms === "Contact") {
      return (
        <HealthContactForm
          patientId={props.profileId}
          addClinic={props.addClinic}
        />
      );
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
        Add new
      </button>

      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="form-modal">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              New {forms}
            </div>
            <div className="p-3">
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
              {renderForm(forms)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
