import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { firstName, lastName, id } = props.patient;

  return (
    // <div className="main_content">
    //   Hi <Link to={`/dashboard/${id}/view`}>{firstName} </Link>from Profile
    // </div>
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <Link to={`/dashboard/${id}/view`}>
            <h5 className="card-title">{firstName}</h5>{" "}
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">{lastName}</h6>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <a href="#" className="card-link">
            Edit
          </a>
          <a href="#" className="card-link">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
