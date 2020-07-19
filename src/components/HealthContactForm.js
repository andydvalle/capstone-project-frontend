import React from "react";
// import useFormInput from "../FormInput";

const HealthContactForm = (props) => {
  // const condition = useFormInput("")

  return (
    <form>
      {/* Hi from HealthContactForm */}
      <div className="form-group">
        <label htmlFor="appointment-patient-id">Patient Id (hide later)</label>
        <input
          type="text"
          className="form-control"
          id="appointment-patient-id"
          placeholder={`${props.patientId}`}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="clinic-name">Clinic Name</label>
          <input
            type="text"
            className="form-control"
            id="clinic-name"
            placeholder="Care Medical Clinic"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="clinic-doctor">Doctor Name</label>
          <input
            type="text"
            className="form-control"
            id="clinic-doctor"
            placeholder="Dr. Johnson"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="clinic-address">Address</label>
        <input
          type="text"
          className="form-control"
          id="clinic-address"
          placeholder="1234 Main St"
        />
      </div>
      <div className="form-group">
        <label htmlFor="clinic-address-2">Address 2</label>
        <input
          type="text"
          className="form-control"
          id="clinic-address-2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="clinic-city">City</label>
          <input type="text" className="form-control" id="clinic-city" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="clinic-state">State</label>
          {/* <select id="clinic-state" className="form-control">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select> */}
          <input type="text" className="form-control" id="clinic-state" />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="clinic-zip">Zip</label>
          <input type="text" className="form-control" id="clinic-zip" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="clinic-notes">Notes (optional)</label>
        <input
          type="textarea"
          className="form-control"
          id="clinic-notes"
          placeholder="Example: This buildling is always cold, bring a jacket"
        />
      </div>
      {/* <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
      <button type="submit" className="btn btn-primary">
        Save and add another
      </button>
      <button type="submit" className="btn btn-light">
        Save and exit
      </button>{" "}
    </form>
  );
};

export default HealthContactForm;
