import React, {useState} from "react";
// import * as lib from 'strikethrough-js';

const TodayChecklist = (props) => {

    const [med, setMed] = useState(props.medication.name_route)

    const handleChange = (e) =>{
        console.log(`${e.target.value} is ${e.target.checked}`)
    }

  return (
    <div class="form-check" onChange={handleChange}>
      <input
        className="form-check-input"
        type="checkbox"
        value={props.medication.name_route}
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        {med}
      </label>
    </div>
  );
};

export default TodayChecklist;
