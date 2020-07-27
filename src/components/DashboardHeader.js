import React from "react";
import { Link } from "react-router-dom";
import SClogo from "../images/SClogo.png";

const DashboardHeader = (props) => {
  const loggedIn = !!props.currentUser.id;

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
      <div>
        <ul class="navbar-nav ml-auto">
          {loggedIn ? (
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <div
                  onClick={() => {
                    props.handleLogout();
                  }}
                  className="ui primary button"
                >
                  Sign Out
                </div>
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/" className="nav-item">
                <div className="nav-link">Sign In</div>
              </Link>
            </li>
          )}
          {/* <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link class="nav-link btn btn-primary" to="/signup">
                  Start Here
                </Link>
              </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default DashboardHeader;
