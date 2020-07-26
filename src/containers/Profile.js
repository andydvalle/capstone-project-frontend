import React from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";

const Profile = (props) => {
  const { firstName, lastName, id } = props.patient;

  const handleClick = () => {
    api.patients.deletePatient(id).then(props.removePatient(id));
  };

  return (
    <div>
      <div className="card m-2" style={{ width: "10rem" }}>
        <div className="card-body">
          <Link to={`/dashboard/${id}/view`}>
            <h5 className="card-title">{firstName}</h5>{" "}
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">{lastName}</h6>
          <a href="#" className="card-link">
            Edit
          </a>
          <a href="#" className="card-link" onClick={handleClick}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
