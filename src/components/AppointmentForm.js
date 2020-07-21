import React from "react";
import { api } from "../services/api";
import useFormInput from "../FormInput";

const AppointmentForm = (props) => {
  const title = useFormInput("");
  const date = useFormInput("");
  const time = useFormInput("");
  const notes = useFormInput("");
  const clinic_id = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.appointments.postAppointment({
      title: title.value,
      date: date.value,
      time: time.value,
      notes: notes.value,
      clinic_id: clinic_id.value,
      patient_id: props.patientId,
    });
  };

  const getClinicOptions = () => {
    console.log(props.clinics);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <select className="form-control" {...clinic_id}>
          <option value="chooseClinic">Select a clinic</option>
          {/* <option value="1">Clinic 1</option>
          <option value="2">Clinic 2</option> */}
          {/* <div className="dropdown-divider"></div> */}
          {getClinicOptions()}
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
