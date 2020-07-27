import React from "react";
import { Link } from "react-router-dom";
import SClogo from "../images/SClogo.png";

const DashboardHeader = (props) => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/dashboard">
        <img
          src={SClogo}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt=""
        />
        Simple Care
      </Link>
    </nav>
  );
};

export default DashboardHeader;
