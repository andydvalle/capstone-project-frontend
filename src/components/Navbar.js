import React from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import avatar from "../images/img_avatar3.png";

const Navbar = (props) => {
  const handleSignout = () => {
    this.props.onHandleSignout();
  };

  const renderPatientOptions = () => {
    return props.patients.map((patient) => {
      return <option key={patient.id} value={patient.name}>{patient.name} Schedule</option>;
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="wrapper">
      <div className="sidebar">
        <img
          src={avatar}
          className="avatar"
          alt="Avatar"
          style={{ align: "center", width: "45%" }}
        />
        <h2>
          {/* Patient's Schedule */}
          <select id="patient-dropdown" onChange={handleChange}>
            {/* <option value="choosePatient">Choose Patient</option>
              <option value="choosePatient">Choose Patient</option> */}
            {renderPatientOptions()}
          </select>
        </h2>
        <div className="mb-5">
          <h5>view</h5>
          <ul>
            <li>Today</li>
            <li>This Week</li>
            <li>This Month</li>
          </ul>
        </div>
        <div className="mb-5">
          <h5>profile</h5>
          <ul>
            <li>
              <Link to="/dashboard/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/medications">Medications</Link>
            </li>
            <li>
              <Link to="/dashboard/conditions">Conditions</Link>
            </li>
            <li>
              <Link to="/dashboard/contacts">Health Contacts</Link>
            </li>
          </ul>
        </div>
        <ul>
          <Link to="/login">
            <li onClick={handleSignout}>Signout</li>
          </Link>
        </ul>
        {/* <ul>
            <li><a href="#"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i className="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i className="fas fa-address-card"></i>About</a></li>
            <li><a href="#"><i className="fas fa-address-book"></i>Contact</a></li>
        </ul>  */}
        <div className="social_media">
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
