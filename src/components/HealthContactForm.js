import React from "react";
import useFormInput from "../FormInput";

const HealthContactForm = (props) => {
  const name = useFormInput("");
  const practitioner = useFormInput("");
  const address = useFormInput("");
  const address2 = useFormInput("");
  const number = useFormInput("");
  const city = useFormInput("");
  const state = useFormInput("");
  const zip = useFormInput("");
  const notes = useFormInput("");

  return (
    <form>
      {/* Hi from HealthContactForm */}
      <div className="form-group">
        {/* <label htmlFor="appointment-patient-id">Patient Id (hide later)</label> */}
        <input
          type="hidden"
          className="form-control"
          id="appointment-patient-id"
          placeholder={`${props.patientId}`}
          value={`${props.patientId}`}
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
            {...name}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="clinic-doctor">Practitioner/Doctor</label>
          <input
            type="text"
            className="form-control"
            id="clinic-doctor"
            placeholder="Dr. Johnson"
            {...practitioner}
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
          {...address}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="clinic-address-2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="clinic-address-2"
            placeholder="Apartment, studio, or floor"
            {...address2}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="clinic-number">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="clinic-number"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            {...number}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="clinic-city">City</label>
          <input
            type="text"
            className="form-control"
            id="clinic-city"
            placeholder="Seattle"
            {...city}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="clinic-state">State</label>
          {/* <select id="clinic-state" className="form-control">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select> */}
          <input
            type="text"
            className="form-control"
            id="clinic-state"
            placeholder="WA"
            {...state}
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="clinic-zip">Zip</label>
          <input type="text" className="form-control" id="clinic-zip" placeholder="98118" {...zip}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="clinic-notes">Notes (optional)</label>
        <input
          type="textarea"
          className="form-control"
          id="clinic-notes"
          placeholder="Example: This buildling is always cold, bring a jacket"
          {...notes}
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
      {/* <button type="submit" className="btn btn-light">
        Save and exit
      </button>{" "} */}
    </form>
  );
};

export default HealthContactForm;
