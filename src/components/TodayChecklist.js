import React, { useState } from "react";
// import * as lib from 'strikethrough-js';

const TodayChecklist = (props) => {
  //   const handleChange = (e) => {
  //     console.log(`${e.target.value} is ${e.target.checked}`);
  //   };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={props.medication.name_route}
        id="defaultCheck1"
      />
      <label className="form-check-label strikethrough" htmlFor="defaultCheck1">
        {props.medication.name_route}
      </label>
    </div>
  );
};

export default TodayChecklist;
