import React from "react";
// import useFormInput from "../FormInput";

const AppointmentForm = (props) => {
  // const condition = useFormInput("")

  return (
    <form>
      {/* Hi from AppointmentForm */}
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
          <label htmlFor="appointment-title">Title</label>
          <input
            type="text"
            className="form-control"
            id="appointment-title"
            placeholder="Visit with Dr. Johnson"
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="appointment-date">{`Date`}</label>
          <input
            type="date"
            className="form-control"
            id="appointment-date"
            // placeholder="Password"
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="appointment-time">Time</label>
          <input
            type="time"
            className="form-control"
            id="appointment-time"
            // placeholder="Password"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="appointment-address">Location</label>
        <select className="form-control">
          <option value="office1">Office 1</option>
          <option value="office2">Office 2</option>
          <div className="dropdown-divider"></div>
          <option value="office2">Add an office</option>
        </select>
        {/* <input type="text" className="form-control" id="appointment-address" placeholder="Add drop down menu of office"/> */}
      </div>
      <div className="form-group">
        <label htmlFor="appointment-notes">Notes (optional)</label>
        <input
          type="textarea"
          className="form-control"
          id="appointment-notes"
          placeholder="Example: Don't forget to update medication list!"
        />
      </div>
      {/* <div className="form-row">
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
  </div> */}
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
      </button>
    </form>
  );
};

export default AppointmentForm;
