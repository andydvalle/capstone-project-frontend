import React, { useState, useEffect, useRef } from "react";
// import useFormInput from "../FormInput";
import HealthContactForm from "./HealthContactForm";
import { api } from "../services/api";

const HealthContactInfo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const wrapperRef = useRef(null);

  const location = `${props.clinic.address} ${props.clinic.address2} ${props.clinic.city} ${props.clinic.state} ${props.clinic.zip}`;

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
    api.clinics.deleteClinic(props.clinic.id);
  };

  return (
    <div ref={wrapperRef} className="dropdown-info">
      {isEdit ? (
        <div className="info-form">
          <HealthContactForm
            isEdit={isEdit}
            resetIsEdit={resetIsEdit}
            clinic={props.clinic}
          />
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="info-label">Clinic: </div>
            <div className="info-detail-name">{props.clinic.name}</div>
          </div>
          <div className="row">
            <div className="info-label">Doctor/Practitioner:</div>
            <div className="info-detail">{props.clinic.practitioner}</div>
          </div>
          <div className="row">
            <div className="info-label">Location:</div>
            <div className="info-detail">{location}</div>
          </div>
          <div className="row">
            <div className="info-label">Your notes:</div>
            <div className="info-detail">{props.clinic.notes}</div>
          </div>
        </div>
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

export default HealthContactInfo;
