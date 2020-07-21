import React, { useState } from "react";
import useFormInput from "../FormInput";
import { api } from "../services/api";

const ConditionForm = (props) => {
  // //sets search table state
  // const [items, setItems] = useState([]);

  const name = useFormInput("");
  const notes = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.conditions.postCondition({
      name: name.value,
      notes: notes.value,
      patient_id: props.patientId,
    });
  };

  // //fetch request for search table
  // const handleSearch = (e) => {
  //   fetch(
  //     `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${e.target.value}`
  //   )
  //     .then((resp) => resp.json())
  //     //setState array
  //     .then(
  //       (data) => setItems(data[3])
  //       // data[3].map((item) => item.map((condition) => setItems(condition)))
  //     );
  //   //requires css
  //   //display array in a dropdown format
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="condition-name">Search Condition Name</label>
        <input
          type="text"
          className="form-control"
          id="condition-name"
          placeholder="Hypertension"
          {...name}
          // //change to handleSearch with autocomplete
          // onChange={handleSearch}
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
