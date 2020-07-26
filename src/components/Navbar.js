import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../images/img_avatar3.png";

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
    this.props.onHandleSignout();
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
    // console.log(e.target.value);
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
          <img
            src={avatar}
            className="avatar"
            alt="Avatar"
            style={{ align: "center", width: "45%" }}
          />
          <h2>
            {/* Patient's Schedule */}
            <select
              id="patient-dropdown"
              value={this.props.profileId}
              onChange={this.handleChange}
            >
              {/* <option value="choosePatient">Choose Patient</option> */}
              {/* <option value="choosePatient">Choose Profile</option> */}
              {this.renderPatientOptions()}
            </select>
          </h2>
          <div className="mb-5">
            <h5>view</h5>
            <ul>
              <li>
                <Link to={`/dashboard/${this.props.profileId}/view`}>
                  Today
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${this.props.profileId}/thisWeek`}>
                  This Week
                </Link>
              </li>
              <li>This Month</li>
            </ul>
          </div>
          <div className="mb-5">
            <h5>profile</h5>
            <ul>
              <li>
                <Link to={`/dashboard/${this.props.profileId}/appointments`}>
                  Appointments
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${this.props.profileId}/medications`}>
                  Medications
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${this.props.profileId}/conditions`}>
                  Conditions
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/${this.props.profileId}/contacts`}>
                  Health Contacts
                </Link>
              </li>
            </ul>
          </div>
          <ul>
            <Link to="/">
              <li onClick={this.handleSignout}>Signout</li>
            </Link>
            <li>Edit</li>
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
  }
}

export default Navbar;
