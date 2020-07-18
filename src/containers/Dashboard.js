import React, { Component } from "react";
// import ConditionForm from '../components/ConditionForm'
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import FormModal from "./FormModal";
import avatar from "../images/img_avatar3.png"

class Dashboard extends Component {
  handleClick = () => {
    this.props.onSignout();
  };

  render() {
    return (
      <div>
        {/* {this.props.user.username} Hi from dashboard */}
        <Navbar
          currentUser={this.props.user}
          onHandleSignout={this.props.onSignout}
        />
        {/* <FormModal /> */}

        <div className="wrapper">
          <div className="sidebar">
            {/* <div className="mt-5 mb-5"> */}
            <img src={avatar} className="avatar" alt="Avatar" style={{align: "center", width: "65%"}}/>
              <h2>Patient's Schedule</h2>
            {/* </div> */}
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
                <li>Appointments</li>
                <li>Medications</li>
                <li>Conditions</li>
                <li>Health Contacts</li>
              </ul>
            </div>
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
          <div className="main_content">
            <div className="header">Welcome!! Have a nice day.</div>
            <div className="info">
              <div>Today's schedule</div>
              <div>Medications (0/3 taken)</div>
              <div>Don't forget (0/2 done)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
