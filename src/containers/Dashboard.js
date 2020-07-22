import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ProfileView from "./ProfileView";
import Profile from "./Profile";
import ProfileForm from "../components/ProfileForm";
import DashboardHeader from "../components/DashboardHeader";
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
      this.setState({
        patients: data,
      });
    });
  };

  removePatient = (patientId) => {
    console.log(patientId);
    const updatedPatients = this.state.patients.filter(
      (patient) => patient.id !== patientId
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  componentDidMount() {
    this.getPatients();
  }

  renderProfiles = () => {
    return this.state.patients.map((patient) => {
      return (
        <div>
          <Profile
            key={patient.id}
            patient={patient}
            removePatient={this.removePatient}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="dashboard">
        {window.location.pathname === "/dashboard" ? (
          <>
            <DashboardHeader currentUser={this.props.user.username} />
            {this.renderProfiles()}
            {/* form modal */}
            <div>
              {/* <Link to="/login">
              <button onClick={this.handleClick}>Signout</button>
            </Link> */}

              <button
                type="button"
                id="add-form"
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".modal"
              >
                +
              </button>
            </div>
            {/* form modal content */}
            <div className="modal" tabindex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="form-modal">
                    New Profile
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <ProfileForm currentUser={this.props.user} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
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
