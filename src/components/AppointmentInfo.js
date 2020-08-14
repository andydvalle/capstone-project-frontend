import React, { useState, useEffect, useRef } from "react";
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
    props.removeAppointment(props.appointment);
  };

  return (
    <div ref={wrapperRef} className="dropdown-info">
      {isEdit ? (
        <div className="info-form">
          <AppointmentForm
            isEdit={isEdit}
            resetIsEdit={resetIsEdit}
            appointment={props.appointment}
            clinics={props.clinics}
            updateAppointment={props.updateAppointment}
          />
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="info-label">Title: </div>
            <div className="info-detail-name">{props.appointment.title}</div>
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
