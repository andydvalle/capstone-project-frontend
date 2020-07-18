import React, { Component } from "react";
// import ConditionForm from '../components/ConditionForm'
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import FormModal from "./FormModal";
import avatar from "../images/img_avatar3.png";

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
      </div>
    );
  }
}

export default Dashboard;
