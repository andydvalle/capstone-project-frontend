import React, { useEffect } from "react";
import { api } from "../services/api";
import useFormInput from "../FormInput";

const ProfileForm = (props) => {
  const [firstName, setFirstName] = useFormInput("");
  const [lastName, setLastName] = useFormInput("");
  const [dob, setDob] = useFormInput("");
  const [allergies, setAllergies] = useFormInput("");

  useEffect(() => {
    if (props.isEdit) {
      setFirstName(props.foundProfile.firstName);
      setLastName(props.foundProfile.lastName);
      setDob(props.foundProfile.dob);
      setAllergies(props.foundProfile.allergies);
    } else {
      setFirstName("");
      setLastName("");
      setDob("");
      setAllergies("");
    }
  }, [
    props.foundProfile.firstName,
    props.foundProfile.lastName,
    props.foundProfile.dob,
    props.foundProfile.allergies,
  ]);

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setAllergies("");
  };

  const handlePostProfile = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      dob: dob.value,
      allergies: allergies.value,
      user_id: props.currentUser.id,
    };
    api.patients
      .postPatient(data)
      .then(props.addPatient(data))
      .then(resetFields());
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    api.patients
      .editPatient({
        id: props.foundProfile.id,
        firstName: firstName.value,
        lastName: lastName.value,
        dob: dob.value,
        allergies: allergies.value,
        user_id: props.currentUser.id,
      })
      .then(props.resetEdit());
  };

  return (
    <form onSubmit={props.isEdit ? handleEditProfile : handlePostProfile}>
      {" "}
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

export default ProfileForm;
