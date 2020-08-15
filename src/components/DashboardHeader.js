import React from "react";
import { Link } from "react-router-dom";
import SClogo from "../images/SClogo.png";

const DashboardHeader = (props) => {
  const loggedIn = !!props.currentUser.id;

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <img
          src={SClogo}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt="simple-care-logo"
        />
        Simple Care
      </Link>
      {loggedIn ? (
        <ul className="navbar-nav mr-auto">
          <div className="row">
            <Link className="nav-link" to="/dashboard">
              Profiles
            </Link>
          </div>
        </ul>
      ) : null}
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"></li>
          {loggedIn ? (
            <div className="row">
              <Link className="nav-link">Settings</Link>

              <Link to="/" className="nav-link mr-4">
                <div
                  onClick={() => {
                    props.handleLogout();
                  }}
                  className="ui primary button"
                >
                  Sign Out
                </div>
              </Link>
            </div>
          ) : (
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <div className="nav-link">Sign In</div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default DashboardHeader;
