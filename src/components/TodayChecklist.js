import React from "react";
import Today from "../containers/Today";

const TodayChecklist = (props) => {
  return (
    <div class="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        {props.medication.name_route}
      </label>
    </div>
  );
};

export default TodayChecklist;
