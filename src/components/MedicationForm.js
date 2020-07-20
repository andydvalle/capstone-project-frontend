import React from "react";
import useFormInput from "../FormInput";
import useBoxInput from "../BoxInput";
import { api } from "../services/api";

const MedicationForm = (props) => {
  
  const name_route = useFormInput("")
  const strength = useFormInput("")
  const instructions = useFormInput("")
  const notes = useFormInput("")
  const onSun = useBoxInput(false)
  const onMon = useBoxInput(false)
  const onTue = useBoxInput(false)
  const onWed = useBoxInput(false)
  const onThu = useBoxInput(false)
  const onFri = useBoxInput(false)
  const onSat = useBoxInput(false)

  const handleSubmit =(e) => {
    e.preventDefault()
    api.medications.postMedication({
      name_route: name_route.value,
      strength: strength.value,
      instructions: instructions.value,
      notes: notes.value,
      onSun: onSun.value,
      onMon: onMon.value,
      onTue: onTue.value,
      onWed: onWed.value,
      onThu: onThu.value,
      onFri: onFri.value,
      onSat: onSat.value,
      patient_id: props.patientId
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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
            {...onSun}
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
            {...onMon}
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
            {...onTue}

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
            {...onWed}
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
            {...onThu}
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
            {...onFri}
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
            {...onSat}
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
