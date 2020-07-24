import React, { useState, useEffect, useRef } from "react";
// import useFormInput from "../FormInput";
import HealthContactForm from "./HealthContactForm";
import { api } from "../services/api";

const HealthContactInfo = (props) => {
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
    api.clinics.deleteClinic(props.clinic.id);
  };

  return (
    <div ref={wrapperRef} className="dropdown-info">
      {isEdit ? (
        <HealthContactForm
          isEdit={isEdit}
          resetIsEdit={resetIsEdit}
          clinic={props.clinic}
        />
      ) : (
        props.clinic.name
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
