import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { name, id } = props.patient;

  return (
    <div>
      Hi <Link to={`/dashboard/${id}`}>{name} </Link>from Profile
    </div>
  );
};

export default Profile;
