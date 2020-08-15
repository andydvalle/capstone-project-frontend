import React, { useState, useEffect, useRef } from "react";
import useFormInput from "../FormInput";

const ConditionForm = (props) => {
  // //sets search table state
  const [items, setItems] = useState([]);
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState(
    (props.condition && props.condition.name) || ""
  );
  const wrapperRef = useRef(null);

  //uses custom hooks for field states
  const [notes, setNotes] = useFormInput(
    (props.condition && props.condition.notes) || ""
  );

  const resetFields = () => {
    setItems([]);
    setDisplay(false);
    setOptions([]);
    setSearch("");
    setNotes("");
  };

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

  const handlePostCondition = (e) => {
    e.preventDefault();
    const data = {
      name: search,
      notes: notes.value,
      patient_id: props.patientId,
    };
    console.log(data, "hello from handlePostcondition - ConditionForm");
    props.addCondition(data);
    resetFields();
  };

  const handleEditCondition = (e) => {
    e.preventDefault();
    const data = {
      id: props.condition.id,
      name: search,
      notes: notes.value,
      patient_id: props.condition.patient_id,
    };
    props.updateCondition(data);
    if (props.resetIsEdit) {
      props.resetIsEdit();
    } else {
      return null;
    }
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
  };

  const setCondition = (condition) => {
    setSearch(condition);
    setDisplay(false);
  };

  return (
    <form onSubmit={props.isEdit ? handleEditCondition : handlePostCondition}>
      {" "}
      <div ref={wrapperRef} className="form-group">
        <label htmlFor="condition-name">Search Condition Name</label>
        <input
          type="text"
          className="form-control"
          id="auto"
          placeholder="Hypertension"
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
      {props.isEdit ? (
        <button type="submit" className="btn btn-primary">
          Submit edit
        </button>
      ) : (
        <button type="submit" className="btn btn-primary">
          Save and add another
        </button>
      )}
    </form>
  );
};

export default ConditionForm;
