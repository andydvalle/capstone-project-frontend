import React, { useState, useEffect, useRef } from "react";
import useFormInput from "../FormInput";
import AppointmentForm from "./AppointmentForm";
import { api } from "../services/api";

const AppointmentInfo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const wrapperRef = useRef(null);

  const title = useFormInput(props.appointment.title);
  const date = useFormInput(props.appointment.date);
  const time = useFormInput(props.appointment.time);
  const notes = useFormInput(props.appointment.notes);

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
    setIsEdit(true);
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
        props.appointment.title
      )}
      <div>
        <span className="mr-3" onClick={handleEdit}>
          Edit
        </span>
        <span onClick={handleDelete}>Delete</span>
      </div>
    </div>
  );
};

export default AppointmentInfo;
