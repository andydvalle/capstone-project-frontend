import React, { useState, useEffect, useRef } from "react";
import useFormInput from "../FormInput";
import useBoxInput from "../BoxInput";
import { api } from "../services/api";

const MedicationForm = (props) => {
  //sets search table state med name
  const [meds, setMeds] = useState([]);
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState(
    (props.medication && props.medication.name_route) || ""
  );

  //sets search table strength
  const [strengths, setStrengths] = useState([]);
  const [displayStrength, setDisplayStrength] = useState(false);
  // const [optionsStrength, setOptionsStrength] = useState([]);
  const [searchStrength, setSearchStrength] = useState("");

  //set wrapperRef to null
  const wrapperRef = useRef(null);

  //uses custom hooks for field states
  const [strength, setStrength] = useFormInput(
    (props.medication && props.medication.strength) || ""
  );
  const [instructions, setInstructions] = useFormInput(
    (props.medication && props.medication.instructions) || ""
  );
  const [notes, setNotes] = useFormInput(
    (props.medication && props.medication.notes) || ""
  );
  const [sunday, setSunday] = useBoxInput(
    (props.medication && props.medication.sunday) || false
  );
  const [monday, setMonday] = useBoxInput(
    (props.medication && props.medication.monday) || false
  );
  const [tuesday, setTuesday] = useBoxInput(
    (props.medication && props.medication.tuesday) || false
  );
  const [wednesday, setWednesday] = useBoxInput(
    (props.medication && props.medication.wednesday) || false
  );
  const [thursday, setThursday] = useBoxInput(
    (props.medication && props.medication.thursday) || false
  );
  const [friday, setFriday] = useBoxInput(
    (props.medication && props.medication.friday) || false
  );
  const [saturday, setSaturday] = useBoxInput(
    (props.medication && props.medication.saturday) || false
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resetFields = () => {
    setStrength("");
    setInstructions("");
    setNotes("");
    setSunday(false);
    setMonday(false);
    setTuesday(false);
    setWednesday(false);
    setThursday(false);
    setFriday(false);
    setSaturday(false);
    setMeds([]);
    setDisplay(false);
    setOptions([]);
    setSearch("");
  };

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  const handlePostMedication = (e) => {
    e.preventDefault();
    api.medications
      .postMedication({
        name_route: search,
        strength: strength.value,
        instructions: instructions.value,
        notes: notes.value,
        sunday: sunday.value,
        monday: monday.value,
        tuesday: tuesday.value,
        wednesday: wednesday.value,
        thursday: thursday.value,
        friday: friday.value,
        saturday: saturday.value,
        patient_id: props.patientId,
      })
      .then(resetFields());
  };

  const handleEditMedication = (e) => {
    e.preventDefault();
    api.medications
      .editMedication({
        id: props.medication.id,
        name_route: search,
        strength: strength.value,
        instructions: instructions.value,
        notes: notes.value,
        sunday: sunday.value,
        monday: monday.value,
        tuesday: tuesday.value,
        wednesday: wednesday.value,
        thursday: thursday.value,
        friday: friday.value,
        saturday: saturday.value,
        patient_id: props.medication.patient_id,
      })
      .then(props.resetIsEdit ? props.resetIsEdit() : null);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetch(
      `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${e.target.value}&ef=STRENGTHS_AND_FORMS`
    )
      .then((resp) => resp.json())
      //setState array
      .then((data) => {
        let filteredMeds = data[1].flat();
        setMeds(filteredMeds);
        // console.log(search, Object.values(data[2]).flat());
      })
      .then(setOptions(meds));
  };

  const setMed = (med) => {
    setSearch(med);
    setDisplay(false);
    fetch(
      `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${med}&ef=STRENGTHS_AND_FORMS`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data[2]);
        let filteredStrengths = Object.values(data[2]).flat();
        // console.log(filteredStrengths[0]);
        setStrengths(filteredStrengths[0]);
        // setOptionsStrength(filteredStrengths[0]);
      });
  };

  const setDose = (strength) => {
    setSearchStrength(strength);
    setDisplayStrength(false);
  };

  return (
    <form onSubmit={props.isEdit ? handleEditMedication : handlePostMedication}>
      {" "}
      <div ref={wrapperRef} className="form-group">
        <label htmlFor="medication-name-route">{`Search Name & Route`}</label>
        <input
          type="text"
          className="form-control"
          id="medication-name-route"
          placeholder="Lisinopril (Oral pill)"
          value={search}
          onClick={() => setDisplay(!display)}
          onChange={handleSearch}
        />
        {display && (
          <div className="autoContainer">
            {options.map((v, i) => {
              return (
                <div
                  className="option"
                  key={i}
                  onClick={() => setMed(v)}
                  tabIndex="0"
                >
                  <span>{v}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="medication-strength">Search Strength</label>
          <input
            type="text"
            className="form-control"
            id="medication-strength"
            placeholder="200mg Tab"
            value={searchStrength}
            onClick={() => setDisplayStrength(!displayStrength)}

            // {...strength}
          />
          {displayStrength && (
            <div className="strengthAutoContainer">
              {strengths.map((v, i) => {
                return (
                  <div
                    className="option"
                    key={i}
                    onClick={() => setDose(v)}
                    tabIndex="0"
                  >
                    <span>{v}</span>
                  </div>
                );
              })}
            </div>
          )}
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
            {...sunday}
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
            {...monday}
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
            {...tuesday}
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
            {...wednesday}
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
            {...thursday}
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
            {...friday}
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
            {...saturday}
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
      {props.isEdit ? (
        <button type="submit" className="btn btn-primary">
          Submit edit
        </button>
      ) : (
        <button type="submit" className="btn btn-primary">
          Save and add another
        </button>
      )}
      {/* <button type="submit" className="btn btn-light">
        Save and exit
      </button>{" "} */}
    </form>
  );
};

export default MedicationForm;
