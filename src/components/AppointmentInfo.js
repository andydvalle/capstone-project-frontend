import React, { useState, useEffect, useRef } from "react";
import useFormInput from "../FormInput";
import AppointmentForm from "./AppointmentForm";

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

  const handleEdit = () => {
    setIsEdit(true);
  };

  return (
    <div ref={wrapperRef} className="dropdown-info">
      {props.appointment.title}
      {isEdit ? (
        <AppointmentForm
          isEdit={isEdit}
          appointment={props.appointment}
          clinics={props.clinics}
        />
      ) : null}
      {/* <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Title:</label>
            <input type="text" className="form-control" {...title} />
          </div>
          <div className="form-group col-md-3">
            <label>Date:</label>
            <input type="text" className="form-control" {...date} />
          </div>
          <div className="form-group col-md-3">
            <label>Time:</label>
            <input type="text" className="form-control" {...time} />
          </div>
        </div>
        <div className="form-group">
          <label>Notes:</label>
          <input type="text" className="form-control" {...notes} readonly />
        </div>
      </form> */}
      <div>
        <span className="mr-3" onClick={handleEdit}>
          Edit
        </span>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default AppointmentInfo;
