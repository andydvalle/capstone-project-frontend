import React, { useState, useEffect, useRef } from "react";
import useFormInput from "../FormInput";
import { api } from "../services/api";
// import Autocomplete from "./Autocomplete";

const ConditionForm = (props) => {
  // //sets search table state
  const [items, setItems] = useState([]);
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const name = useFormInput("");
  const notes = useFormInput("");

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.conditions.postCondition({
      name: name.value,
      notes: notes.value,
      patient_id: props.patientId,
    });
  };

  //fetch request for search table
  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetch(
      `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${e.target.value}`
    )
      .then((resp) => resp.json())
      //setState array
      .then((data) => {
        let filteredItems = data[3].flat();
        setItems(filteredItems);
      })
      .then(setOptions(items));
    //requires css
    //display array in a dropdown format
  };

  const setCondition = (condition) => {
    setSearch(condition);
    setDisplay(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="form-group">
        <Autocomplete suggestions={items} />
      </div> */}

      <div ref={wrapperRef} className="form-group">
        <label htmlFor="condition-name">Search Condition Name</label>
        <input
          type="text"
          className="form-control"
          id="auto"
          placeholder="Hypertension"
          value={search}
          // {...name}
          // //change to handleSearch with autocomplete
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
                  onClick={() => setCondition(v)}
                  tabIndex="0"
                >
                  <span>{v}</span>
                </div>
              );
            })}
          </div>
        )}
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
