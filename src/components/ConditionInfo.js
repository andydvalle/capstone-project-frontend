import React, { useState, useEffect, useRef } from "react";
import ConditionForm from "./ConditionForm";
import { api } from "../services/api";

const ConditionInfo = (props) => {
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
    api.conditions
      .deleteCondition(props.condition.id)
      .then(props.removeCondition(props.condition));
  };
  return (
    <div ref={wrapperRef} className="dropdown-info">
      {isEdit ? (
        <div className="info-form">
          <ConditionForm
            isEdit={isEdit}
            resetIsEdit={resetIsEdit}
            condition={props.condition}
            updateCondition={props.updateCondition}
          />
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="info-label">Condition: </div>
            <div className="info-detail-name">{props.condition.name}</div>
          </div>
          <div className="row">
            <div className="info-label">Your notes:</div>
            <div className="info-detail">{props.condition.notes}</div>
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

export default ConditionInfo;
