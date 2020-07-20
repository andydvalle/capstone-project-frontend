import React, { useState } from "react";
import useFormInput from "../FormInput";

const AppointmentForm = (props) => {

  const [appointment, setAppointment] = useState({})

  const title = useFormInput("")
  const date = useFormInput("")
  const time = useFormInput("")
  const notes = useFormInput("")

  const handleChange = () => {
    setAppointment({
      title: title.value,
      date: date.value,
      time: time.value,
      notes: notes.value,
      patient_id: props.patientId
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(appointment)
  }
  

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      {/* Hi from AppointmentForm */}
      <div className="form-group">
        {/* <label htmlFor="appointment-patient-id">Patient Id (hide later)</label> */}
        <input
          type="hidden"
          className="form-control"
          id="appointment-patient-id"
          placeholder={`${props.patientId}`}
          value={`${props.patientId}`}
          // {...profile_id}
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
            {...title}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="appointment-date">{`Date`}</label>
          <input
            type="date"
            className="form-control"
            id="appointment-date"
            {...date}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="appointment-time">Time</label>
          <input
            type="time"
            className="form-control"
            id="appointment-time"
            {...time}
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
      </div>
      <div className="form-group">
        <label htmlFor="appointment-notes">Notes (optional)</label>
        <input
          type="textarea"
          className="form-control"
          id="appointment-notes"
          placeholder="Example: Don't forget to update medication list!"
          {...notes}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save and add another
      </button>
      {/* <button type="submit" className="btn btn-light">
        Save and exit
      </button> */}
    </form>
  );
};

export default AppointmentForm;
