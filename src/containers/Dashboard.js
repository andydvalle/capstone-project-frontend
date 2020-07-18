import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import FormModal from "./FormModal";

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
