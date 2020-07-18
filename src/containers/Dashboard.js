import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router-dom";
import Conditions from "./Conditions";
import Medications from "./Medications";
import Appointments from "./Appointments";
import HealthContacts from "./HealthContacts";
import FormModal from "./FormModal";

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
        <Route
          path="/dashboard/appointments"
          render={(props) => <Appointments />}
        ></Route>
        <Route
          path="/dashboard/medications"
          render={(props) => <Medications />}
        ></Route>
        <Route
          path="/dashboard/conditions"
          render={(props) => <Conditions />}
        ></Route>
        <Route
          path="/dashboard/contacts"
          render={(props) => <HealthContacts />}
        ></Route>
        <FormModal />
      </div>
    );
  }
}

export default Dashboard;
