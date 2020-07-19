import React, { Component } from "react";
import { Route } from "react-router-dom";
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
      return (
        <div>
          <Profile key={patient.id} patient={patient} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {window.location.pathname === "/dashboard"
          ? this.renderProfiles()
          : null}
        {/* form modal */}
        <div>
          <button
            type="button"
            id="add-form"
            className="btn btn-primary"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            +
          </button>
        </div>

        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          {/* Form modal */}
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="form-modal">New Profile</div>
            </div>
          </div>
        </div>
        {/* routes */}
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
