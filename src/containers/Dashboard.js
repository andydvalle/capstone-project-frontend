import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import ProfileView from "./ProfileView";
import Profile from "./Profile";
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
        patients: userPatients,
      });
    });
  };

  componentDidMount() {
    this.getPatients();
  }

  renderProfiles = () => {
    return this.state.patients.map((patient) => {
      return <Profile patient={patient} />;
    });
  };

  render() {
    return (
      <div>
        {window.location.pathname === "/dashboard"
          ? this.renderProfiles()
          : null}
        <Route
          path="/dashboard/:id"
          render={(props) => (
            <ProfileView
              {...props}
              currentUser={this.props.user}
              patients={this.state.patients}
              onHandleSignout={this.props.onSignout}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default Dashboard;
