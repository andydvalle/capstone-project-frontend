import React from "react";
// import useFormInput from "../FormInput";

const MedicationForm = () => {
  // const condition = useFormInput("")

  return (
    <form>
      {/* Hi from MedicationForm */}
      <div className="form-group">
        <label htmlFor="medication-name-route">{`Search Name & Route`}</label>
        <input
          type="text"
          className="form-control"
          id="medication-name-route"
          placeholder="Example: Lisinopril (Oral pill)"
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="medication-strength">Search Strength</label>
          <input
            type="text"
            className="form-control"
            id="medication-strength"
            placeholder="Example: 200mg Tab"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="medication-instructions">Instructions</label>
          <input
            type="text"
            className="form-control"
            id="medication-instructions"
            placeholder="Example: Daily"
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
        />
      </div>
      {/* <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
      <button type="submit" className="btn btn-primary">
        Save and add another
      </button>
      <button type="submit" className="btn btn-light">
        Save and exit
      </button>{" "}
    </form>
  );
};

export default MedicationForm;
