import React, { useState, useEffect } from "react";
import useFormInput from "../FormInput";

const ConditionForm = (props) => {
  const [condition, setCondition] = useState({});

  const name = useFormInput("");
  const notes = useFormInput("");

  const submitCondition = () => {
    console.log("hi")
  }

  return (
    <form>
      {/* Hi from ConditionForm */}
      <div className="form-group">
        {/* <label htmlFor="appointment-patient-id">Patient Id (hide later)</label> */}
        <input
          type="hidden"
          className="form-control"
          id="appointment-patient-id"
          placeholder={`${props.patientId}`}
          value={`${props.patientId}`}
        />
      </div>
      <div className="form-group">
        <label htmlFor="condition-name">Search Condition Name</label>
        <input
          type="text"
          className="form-control"
          id="condition-name"
          placeholder="Hypertension"
          {...name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="condition-notes">Notes (optional)</label>
        <input
          type="textarea"
          className="form-control"
          id="condition-notes"
          placeholder="Example: My blood pressure is usually high, last office visit was 145/90"
          {...notes}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save and add another
      </button>
    </form>
  );
};

export default ConditionForm;
