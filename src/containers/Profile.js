import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { firstName, id } = props.patient;

  return (
    <div className="main_content">
      Hi <Link to={`/dashboard/${id}`}>{firstName} </Link>from Profile
    </div>
  );
};

export default Profile;
