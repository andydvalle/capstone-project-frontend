import React from "react";
// import useFormInput from "../FormInput";

const ConditionForm = (props) => {
  
    // const condition = useFormInput("")
  
    return (
        <form>
        {/* Hi from ConditionForm */}
        <div className="form-group">
        <label htmlFor="appointment-patient-id">Patient Id (hide later)</label>
        <input
          type="text"
          className="form-control"
          id="appointment-patient-id"
          placeholder={`${props.patientId}`}
        />
      </div>
          <div className="form-group">
            <label htmlFor="condition-name">Search Condition Name</label>
            <input type="text" className="form-control" id="condition-name" placeholder="Example: Hypertension"/>
        </div>
          <div className="form-group">
            <label htmlFor="condition-notes">Notes (optional)</label>
            <input type="textarea" className="form-control" id="condition-notes" placeholder="Example: My blood pressure is usually high, last office visit was 145/90"/>
          </div>
        {/* <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
        <button type="submit" className="btn btn-primary">Save and add another</button>
  <button type="submit" className="btn btn-light">Save and exit</button>      </form>
    )
};

export default ConditionForm;
