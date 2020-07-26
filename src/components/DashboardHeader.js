import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = (props) => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Simple Care
      </Link>
    </nav>
  );
};

export default DashboardHeader;
