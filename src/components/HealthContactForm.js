import React from "react";
import { api } from "../services/api";
import useFormInput from "../FormInput";

const HealthContactForm = (props) => {
  const [name, setName] = useFormInput(
    (props.clinic && props.clinic.name) || ""
  );
  const [practitioner, setPractitioner] = useFormInput(
    (props.clinic && props.clinic.practitioner) || ""
  );
  const [address, setAddress] = useFormInput(
    (props.clinic && props.clinic.address) || ""
  );
  const [address2, setAddress2] = useFormInput(
    (props.clinic && props.clinic.address2) || ""
  );
  const [number, setNumber] = useFormInput(
    (props.clinic && props.clinic.number) || ""
  );
  const [city, setCity] = useFormInput(
    (props.clinic && props.clinic.city) || ""
  );
  const [state, setState] = useFormInput(
    (props.clinic && props.clinic.state) || ""
  );
  const [zip, setZip] = useFormInput((props.clinic && props.clinic.zip) || "");
  const [notes, setNotes] = useFormInput(
    (props.clinic && props.clinic.notes) || ""
  );

  const resetFields = () => {
    setName("");
    setPractitioner("");
    setAddress("");
    setAddress2("");
    setNumber("");
    setCity("");
    setState("");
    setZip("");
    setNotes("");
  };

  const handlePostClinic = (e) => {
    e.preventDefault();
    const data = {
      name: name.value,
      practitioner: practitioner.value,
      // location: `${address.value} ${address2.value} ${city.value} ${state.value} ${zip.value}`,
      address: address.value,
      address2: address2.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      number: number.value,
      notes: notes.value,
      patient_id: props.patientId,
    };
    api.clinics
      .postClinic(data)
      .then(props.addClinic(data))
      .then(resetFields());
  };

  const handleEditClinic = (e) => {
    e.preventDefault();
    const data = {
      id: props.clinic.id,
      name: name.value,
      practitioner: practitioner.value,
      // location: `${address.value} ${address2.value} ${city.value} ${state.value} ${zip.value}`,
      address: address.value,
      address2: address2.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      number: number.value,
      notes: notes.value,
      patient_id: props.clinic.patient_id,
    };
    api.clinics
      .editClinic(data)
      .then(props.updateClinic(data))
      .then(props.resetIsEdit ? props.resetIsEdit() : null);
  };

  return (
    <form onSubmit={props.isEdit ? handleEditClinic : handlePostClinic}>
      {" "}
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="clinic-name">Clinic Name</label>
          <input
            type="text"
            className="form-control"
            id="clinic-name"
            placeholder="Care Medical Clinic"
            {...name}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="clinic-doctor">Practitioner/Doctor</label>
          <input
            type="text"
            className="form-control"
            id="clinic-doctor"
            placeholder="Dr. Johnson"
            {...practitioner}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="clinic-address">Address</label>
        <input
          type="text"
          className="form-control"
          id="clinic-address"
          placeholder="1234 Main St"
          {...address}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="clinic-address-2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="clinic-address-2"
            placeholder="Apartment, studio, or floor"
            {...address2}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="clinic-number">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="clinic-number"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            {...number}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="clinic-city">City</label>
          <input
            type="text"
            className="form-control"
            id="clinic-city"
            placeholder="Seattle"
            {...city}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="clinic-state">State</label>
          {/* <select id="clinic-state" className="form-control">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select> */}
          <input
            type="text"
            className="form-control"
            id="clinic-state"
            placeholder="WA"
            {...state}
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="clinic-zip">Zip</label>
          <input
            type="text"
            className="form-control"
            id="clinic-zip"
            placeholder="98118"
            {...zip}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="clinic-notes">Notes (optional)</label>
        <input
          type="textarea"
          className="form-control"
          id="clinic-notes"
          placeholder="Example: This buildling is always cold, bring a jacket"
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

export default HealthContactForm;
