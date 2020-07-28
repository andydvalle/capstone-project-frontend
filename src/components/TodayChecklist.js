import React, { useState } from "react";
// import * as lib from 'strikethrough-js';

const TodayChecklist = (props) => {
  //   const handleChange = (e) => {
  //     console.log(`${e.target.value} is ${e.target.checked}`);
  //   };

  return (
    <div className="form-check meds">
      <input
        className="form-check-input"
        type="checkbox"
        // value={props.medication.name_route}
      />
      <label className="form-check-label strikethrough">
        {props.medication.name_route
          .toLowerCase()
          .replace(/ *\([^)]*\) */g, "")}
      </label>
    </div>
  );
};

export default TodayChecklist;
