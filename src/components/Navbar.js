import React, { Component } from "react";
import { Link } from "react-router-dom";
// import avatar from "../images/img_avatar3.png";
import Avatar from "react-avatar";

class Navbar extends Component {
  getProfile = () => {
    const id = this.props.match.params.id;
    let foundProfile = {};
    for (let patient of this.props.patients) {
      if (patient.id == id) {
        foundProfile = patient;
      }
    }
    return foundProfile;
  };

  handleSignout = () => {
    this.props.handleLogout();
  };

  renderPatientOptions = () => {
    return this.props.patients.map((patient) => {
      return (
        <option key={patient.id} value={patient.id}>
          {patient.firstName}'s Schedule
        </option>
      );
    });
  };

  handleChange = (e) => {
    this.props.history.push(`/dashboard/${e.target.value}/view`);
  };

  render() {
    const { name, id } = this.props.patients;
    return (
      <div className="wrapper">
        <div className="sidebar">
          <div>
            <Link to="/dashboard">
              <p>{"< Back"}</p>
            </Link>
          </div>
          <Avatar
            className="avatar"
            name={`${this.props.foundProfile.firstName} ${this.props.foundProfile.lastName}`}
            color="#4EBAAA"
            textSizeRatio="10"
            textMarginRatio="1"
          />
          {/* <img
            src={avatar}
            className="avatar"
            alt="Avatar"
            style={{ align: "center", width: "45%" }}
          /> */}
          <h2>
            {/* Patient's Schedule */}
            <select
              id="patient-dropdown"
              value={this.props.foundProfile.id}
              onChange={this.handleChange}
            >
              {this.renderPatientOptions()}
            </select>
          </h2>
          <div className="mb-5">
            <h5>view</h5>
            <ul>
              <li>
                <Link to={`/dashboard/${this.props.foundProfile.id}/view`}>
                  Today
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${this.props.foundProfile.id}/calendar`}>
                  {this.props.foundProfile.firstName}'s Calendar
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h5>profile</h5>
            <ul>
              <li>
                <Link
                  to={`/dashboard/${this.props.foundProfile.id}/appointments`}
                >
                  Appointments
                </Link>
              </li>
              <li>
                <Link
                  to={`/dashboard/${this.props.foundProfile.id}/medications`}
                >
                  Medications
                </Link>
              </li>
              <li>
                <Link
                  to={`/dashboard/${this.props.foundProfile.id}/conditions`}
                >
                  Conditions
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${this.props.foundProfile.id}/contacts`}>
                  Health Contacts
                </Link>
              </li>
            </ul>
          </div>
          <ul>
            <Link to="/">
              <li onClick={this.handleSignout}>Signout</li>
            </Link>
          </ul>
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
  }
}

export default Navbar;
