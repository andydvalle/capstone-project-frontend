import React, { useState } from "react";
import { api } from "../services/api";
import useFormInput from "../FormInput";

const AppointmentForm = (props) => {
  const [title, setTitle] = useFormInput(
    (props.appointment && props.appointment.title) || ""
  );
  const [date, setDate] = useFormInput(
    (props.appointment && props.appointment.date) || ""
  );
  const [time, setTime] = useFormInput(
    (props.appointment && props.appointment.time) || ""
  );
  const [notes, setNotes] = useFormInput(
    (props.appointment && props.appointment.notes) || ""
  );
  const [clinic_id, setClinics] = useFormInput(
    (props.appointment && props.appointment.clinic_id) || ""
  );

  const resetFields = () => {
    setTitle("");
    setDate("");
    setTime("");
    setNotes("");
    setClinics("");
  };

  const handlePostAppointment = (e) => {
    e.preventDefault();
    e.persist();
    api.appointments.postAppointment({
      title: title.value,
      date: date.value,
      time: time.value,
      notes: notes.value,
      clinic_id: clinic_id.value,
      patient_id: props.patientId,
    });
    resetFields();
  };

  const handleEditAppointment = (e) => {
    e.preventDefault();
    api.appointments
      .editAppointment({
        id: props.appointment.id,
        title: title.value,
        date: date.value,
        time: time.value,
        notes: notes.value,
        clinic_id: clinic_id.value,
        patient_id: props.patientId,
      })
      .then(props.resetIsEdit ? props.resetIsEdit() : null);
  };

  const getClinicOptions = () => {
    return props.clinics.map((clinic) => {
      return (
        <option key={clinic.id} value={clinic.id}>
          {clinic.name}
        </option>
      );
    });
  };

  return (
    <form
      onSubmit={props.isEdit ? handleEditAppointment : handlePostAppointment}
    >
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
          {props.clinics && getClinicOptions()}
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
      {props.isEdit ? (
        <button type="submit" className="btn btn-primary">
          Submit edit
        </button>
      ) : (
        <button type="submit" className="btn btn-primary">
          Save and add another
        </button>
      )}

      {/* <button type="submit" className="btn btn-light">
        Save and exit
      </button> */}
    </form>
  );
};

export default AppointmentForm;
