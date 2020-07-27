import React, { useEffect } from "react";
import { api } from "../services/api";
import useFormInput from "../FormInput";

const ProfileForm = (props) => {
  const [firstName, setFirstName] = useFormInput("");
  const [lastName, setLastName] = useFormInput("");
  const [dob, setDob] = useFormInput("");
  const [allergies, setAllergies] = useFormInput("");

  useEffect(() => {
    if (props.foundProfile.firstName) {
      // const d = new Date(props.foundProfile.dob);
      // const n = d.toISOString();
      // console.log(props.foundProfile.dob, d, n);

      setFirstName(props.foundProfile.firstName);
      setLastName(props.foundProfile.lastName);
      setDob(props.foundProfile.dob);
      setAllergies(props.foundProfile.allergies);
    }
  }, [
    props.foundProfile.firstName,
    props.foundProfile.lastName,
    props.foundProfile.dob,
    props.foundProfile.allergies,
  ]);

  const displayDate = (apptDate) => {
    const date = new Date(apptDate);
    const displayDate =
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() + 1 : "0" + (date.getDate() + 1)) +
      "/" +
      date.getFullYear();

    return displayDate;
  };

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
      </button> */}
    </form>
  );
};

export default ProfileForm;
