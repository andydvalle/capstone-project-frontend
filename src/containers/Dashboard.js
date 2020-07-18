import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router-dom";
import Conditions from "./Conditions";
import Medications from "./Medications";
import Appointments from "./Appointments";
import HealthContacts from "./HealthContacts";
import FormModal from "./FormModal";
import { api } from "../services/api";

class Dashboard extends Component {
  state = {
    patients: [],
  };

  handleClick = () => {
    this.props.onSignout();
  };

  getPatients = () => {
    api.patients.fetchPatients().then((data) => {
      const userPatients = data.filter(
        (patient) => patient.user_id === this.props.user.id
      );
      this.setState({
        patients: userPatients
      })
    });
  };

  componentDidMount() {
    this.getPatients();
  }

  render() {
    return (
      <div>
        <Navbar
          currentUser={this.props.user}
          patients={this.state.patients}
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
