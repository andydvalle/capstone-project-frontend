import React, { useState, useEffect, useRef } from "react";
import useFormInput from "../FormInput";
import MedicationForm from "./MedicationForm";
import { api } from "../services/api";

const MedicationInfo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const wrapperRef = useRef(null);

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
    api.medications.deleteMedication(props.medication.id);
  };

  return (
    <div ref={wrapperRef} className="dropdown-info">
      {isEdit ? (
        <div className="info-form">
          <MedicationForm
            isEdit={isEdit}
            resetIsEdit={resetIsEdit}
            medication={props.medication}
          />
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="info-label">Name: </div>
            <div className="info-detail">
              {props.medication.name_route.toLowerCase()}
            </div>
          </div>
          <div className="row">
            <div className="info-label">Dose/Strength:</div>
            <div className="info-detail">{props.medication.strength}</div>
          </div>
          <div className="row">
            <div className="info-label">Instructions:</div>
            <div className="info-detail">{props.medication.instructions}</div>
          </div>
          <div className="row">
            <div className="info-label">Your notes:</div>
            <div className="info-detail">{props.medication.notes}</div>
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

export default MedicationInfo;
