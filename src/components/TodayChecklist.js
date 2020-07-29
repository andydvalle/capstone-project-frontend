import React, { useState } from "react";

const TodayChecklist = (props) => {
  return (
    <div className="form-check">
      <input className="form-check-input big-checkbox" type="checkbox" />
      <label className="form-check-label strikethrough">
        <div className="row">
          <div className="form-check-detail timeOfDay">{props.timeOfDay}</div>
          <div className="form-check-detail med">
            {props.medication.name_route
              .toLowerCase()
              .replace(/ *\([^)]*\) */g, "")}
          </div>
          <div className="form-check-detail strength">
            {props.medication.strength}
          </div>
        </div>
      </label>
    </div>
  );
};

export default TodayChecklist;
