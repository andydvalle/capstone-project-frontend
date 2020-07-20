import React, { useState } from "react";
import useFormInput from "../FormInput";
// import useBoxInput from "../BoxInput";

const MedicationForm = (props) => {
  const [medication, setMedication] = useState({})
  
  const name_route = useFormInput("")
  const strength = useFormInput("")
  const instructions = useFormInput("")
  const notes = useFormInput("")
  // const onSun = useBoxInput("")
  // const onMon = useBoxInput("")

  const handleChange = () =>{
    setMedication({
      name_route: name_route.value,
      strength: strength.value,
      instructions: instructions.value,
      notes: notes.value,
      // onSun: !onSun.value,
      // onMon: !onMon.value,
      patient_id: props.patientId
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    console.log(medication)
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <div className="form-group">
        <label htmlFor="medication-name-route">{`Search Name & Route`}</label>
        <input
          type="text"
          className="form-control"
          id="medication-name-route"
          placeholder="Lisinopril (Oral pill)"
          {...name_route}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="medication-strength">Search Strength</label>
          <input
            type="text"
            className="form-control"
            id="medication-strength"
            placeholder="200mg Tab"
            {...strength}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="medication-instructions">Instructions</label>
          <input
            type="text"
            className="form-control"
            id="medication-instructions"
            placeholder="Daily"
            {...instructions}
          />
        </div>
      </div>
      <div className="mb-2">Select the days this med is taken:</div>
      <div className="form-row mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="sun"
            id="sunCheck"
            // {...onSun}
          />
          <label className="form-check-label" htmlFor="sunCheck">
            Sunday
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="mon"
            id="monCheck"
            // {...onMon}
          />
          <label className="form-check-label" htmlFor="monCheck">
            Monday
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="tue"
            id="tueCheck"
          />
          <label className="form-check-label" htmlFor="tueCheck">
            Tuesday
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="wed"
            id="wedCheck"
          />
          <label className="form-check-label" htmlFor="wedCheck">
            Wednesday
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="thu"
            id="thuCheck"
          />
          <label className="form-check-label" htmlFor="thuCheck">
            Thursday
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="fri"
            id="friCheck"
          />
          <label className="form-check-label" htmlFor="friCheck">
            Friday
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="sat"
            id="satCheck"
          />
          <label className="form-check-label" htmlFor="satCheck">
            Saturday
          </label>
        </div>
       </div>
      <div className="form-group">
        <label htmlFor="medication-notes">Notes (optional)</label>
        <input
          type="text"
          className="form-control"
          id="medication-notes"
          placeholder="Example: Dr. Johnson says to take around same time, I like to take it in the morning."
          {...notes}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save and add another
      </button>
      {/* <button type="submit" className="btn btn-light">
        Save and exit
      </button>{" "} */}
    </form>
  );
};

export default MedicationForm;
