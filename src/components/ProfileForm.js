import React from "react";
import { api } from "../services/api";
import useFormInput from "../FormInput";

const ProfileForm = (props) => {
  const [firstName, setFirstName] = useFormInput("");
  const [lastName, setLastName] = useFormInput("");
  const [dob, setDob] = useFormInput("");
  const [allergies, setAllergies] = useFormInput("");

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setAllergies("");
  };

  const submitProfile = (e) => {
    e.preventDefault();
    api.patients
      .postPatient({
        firstName: firstName.value,
        lastName: lastName.value,
        dob: dob.value,
        allergies: allergies.value,
        user_id: props.currentUser.id,
      })
      .then(resetFields());
  };

  return (
    <form onSubmit={submitProfile}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="profile-first-name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="profile-first-name"
            placeholder="John"
            {...firstName}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="profile-dob">{`Date of Birth`}</label>
          <input
            type="date"
            className="form-control"
            id="profile-dob"
            {...dob}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="profile-last-name">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="profile-last-name"
          placeholder="Doe"
          {...lastName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profile-allergies">Any allergies?</label>
        <input
          type="textarea"
          className="form-control"
          id="profile-allergies"
          placeholder="'No allergies' if none"
          {...allergies}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save and add another
      </button>
      {/* <button type="submit" className="btn btn-light">
        Save and exit
      </button> */}
    </form>
  );
};

export default ProfileForm;
