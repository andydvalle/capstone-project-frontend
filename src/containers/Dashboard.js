import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AuthHOC from "../HOCs/AuthHOC";
import ProfileView from "./ProfileView";
import Profile from "./Profile";
import ProfileForm from "../components/ProfileForm";
// import DashboardHeader from "../components/DashboardHeader";
import { api } from "../services/api";
import NoteList from "../svgs/NoteList";
import Ellipse1 from "../svgs/Ellipse1";

class Dashboard extends Component {
  state = {
    patients: [],
    foundPatient: {},
    isEdit: false,
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

  editClick = (profile) => {
    console.log(profile);
    this.setState({
      foundPatient: profile,
      isEdit: true,
    });
  };

  resetEdit = () => {
    this.setState({
      foundPatient: {},
      isEdit: false,
    });
  };

  renderProfiles = () => {
    return this.state.patients.map((patient) => {
      return (
        <div>
          <Profile
            key={patient.id}
            profile={patient}
            handleEditClick={this.editClick}
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
            {/* <DashboardHeader currentUser={this.props.user.username} /> */}
            <div className="row m-5">
              <div className="img-overlay-wrap">
                <div className="ellipse1">
                  <Ellipse1 />
                </div>
                <div className="notelist">
                  <NoteList />
                </div>
              </div>
              <div className="dashboard-profile-section">
                <h1>We gathered your records!</h1>
                <h5>Select a profile to start</h5>
                <div className="row">{this.renderProfiles()}</div>

                {/* form modal */}
                <div className="dashboard-modal">
                  {/* <Link to="/login">
              <button onClick={this.handleClick}>Signout</button>
            </Link> */}

                  <button
                    type="button"
                    id="dashboard-form"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target=".modal"
                  >
                    Add a profile
                  </button>
                </div>
                {/* form modal content */}
                <div className="modal" tabindex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="form-modal">
                        {this.state.isEdit
                          ? `Edit ${this.state.foundPatient.firstName}`
                          : "New Profile"}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true" onClick={this.resetEdit}>
                            &times;
                          </span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <ProfileForm
                          foundProfile={this.state.foundPatient}
                          isEdit={this.state.isEdit}
                          currentUser={this.props.user}
                          resetEdit={this.resetEdit}
                        />
                      </div>
                    </div>
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

export default AuthHOC(Dashboard);
