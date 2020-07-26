import React, { useState, useEffect, useRef } from "react";
// import useFormInput from "../FormInput";
import AppointmentForm from "./AppointmentForm";
import { api } from "../services/api";

const AppointmentInfo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const wrapperRef = useRef(null);

  const foundClinic = () => {
    let foundClinic = "";
    for (let clinic of props.clinics) {
      if (clinic.id == props.appointment.clinic_id) {
        foundClinic = clinic.name;
      }
    }
    return foundClinic;
  };

  // const title = useFormInput(props.appointment.title);
  // const date = useFormInput(props.appointment.date);
  // const time = useFormInput(props.appointment.time);
  // const notes = useFormInput(props.appointment.notes);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setIsEdit(false);
    }
  };

  const resetIsEdit = () => {
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    api.appointments.deleteAppointment(props.appointment.id);
  };

  return (
    <div ref={wrapperRef} className="dropdown-info">
      {isEdit ? (
        <AppointmentForm
          isEdit={isEdit}
          resetIsEdit={resetIsEdit}
          appointment={props.appointment}
          clinics={props.clinics}
        />
      ) : (
        <div>
          <div className="row">
            <div className="info-label">Title: </div>
            <div className="info-detail">{props.appointment.title}</div>
          </div>
          <div className="row">
            <div className="info-label">When:</div>
            <div className="info-detail">
              {props.date} @ {props.time}
            </div>
          </div>
          <div className="row">
            <div className="info-label">Where:</div>
            <div className="info-detail">{foundClinic()}</div>
          </div>
          <div className="row">
            <div className="info-label">Your notes:</div>
            <div className="info-detail">{props.appointment.notes}</div>
          </div>
        </div>
      )}
      <div className="mt-2">
        <span className="mr-3" onClick={handleEdit}>
          Edit
        </span>
        <span onClick={handleDelete}>Delete</span>
      </div>
    </div>
  );
};

export default AppointmentInfo;
