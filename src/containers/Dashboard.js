import React, { Component, useState, useEffect, useRef } from "react";
import { Route, Link } from "react-router-dom";
import AuthHOC from "../HOCs/AuthHOC";
import ProfileView from "./ProfileView";
import Profile from "./Profile";
import ProfileForm from "../components/ProfileForm";
import DashboardHeader from "../components/DashboardHeader";
import { api } from "../services/api";
import NoteList from "../svgs/NoteList";
import Ellipse1 from "../svgs/Ellipse1";

class Dashboard extends Component {
  // const [patients, setPatients] = useState([]);
  // const [foundPatient, setFoundPatient] = useState({});
  // const [isEdit, setIsEdit] = useState(false);
  // const wrapperRef = useRef(null);

  state = {
    patients: [],
    foundPatient: {},
    isEdit: false,
  };

  // const handleClick = () => {
  //   props.onSignout();
  // };

  getPatients = () => {
    api.patients.fetchPatients().then((data) => {
      // setPatients(data);
      this.setState({
        patients: data,
      });
    });
  };

  addPatient = (data) => {
    const newPatients = [...this.state.patients, data];
    this.setState({
      patients: newPatients,
    });
  };

  updatePatient = (data) => {
    console.log(data, this.state.patients[0]);
    const newPatients = this.state.patients.map((patient) =>
      patient.id !== data.id ? patient : { ...patient, ...data }
    );
    this.setState({
      patients: newPatients,
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
    // setPatients(updatedPatients);
  };

  addAppointment = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newAppointments = [...foundPatient.appointments, data];
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, appointments: newAppointments }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  updateAppointment = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newAppointments = foundPatient.appointments.map((appointment) =>
      appointment.id !== data.id ? appointment : data
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, appointments: newAppointments }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  removeAppointment = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newAppointments = foundPatient.appointments.filter(
      (appointment) => appointment.id !== data.id
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, appointments: newAppointments }
    );
    this.setState({
      patients: updatedPatients,
    });
    // console.log("hi from dash", newAppointments);
  };

  addMedication = (data) => {
    // console.log("hi from dashboard", data);
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newMedications = [...foundPatient.medications, data];
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, medications: newMedications }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  updateMedication = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newMedications = foundPatient.medications.map((medication) =>
      medication.id !== data.id ? medication : data
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, medications: newMedications }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  removeMedication = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newMedications = foundPatient.medications.filter(
      (medication) => medication.id !== data.id
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, medications: newMedications }
    );
    this.setState({
      patients: updatedPatients,
    });
    // console.log("hi from dash", newAppointments);
  };

  addCondition = (data) => {
    // console.log("hi from dashboard", data);
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newConditions = [...foundPatient.conditions, data];
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, conditions: newConditions }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  updateCondition = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newConditions = foundPatient.conditions.map((condition) =>
      condition.id !== data.id ? condition : data
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, conditions: newConditions }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  removeCondition = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newConditions = foundPatient.conditions.filter(
      (condition) => condition.id !== data.id
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, conditions: newConditions }
    );
    this.setState({
      patients: updatedPatients,
    });
    // console.log("hi from dash", newAppointments);
  };

  addClinic = (data) => {
    // console.log("hi from dashboard", data);
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newClinics = [...foundPatient.clinics, data];
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, clinics: newClinics }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  updateClinic = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newClinics = foundPatient.clinics.map((clinic) =>
      clinic.id !== data.id ? clinic : data
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, clinics: newClinics }
    );
    this.setState({
      patients: updatedPatients,
    });
  };

  removeClinic = (data) => {
    const foundPatient = this.state.patients.find(
      (patient) => (patient.id = data.patient_id)
    );
    const newClinics = foundPatient.clinics.filter(
      (clinic) => clinic.id !== data.id
    );
    const updatedPatients = this.state.patients.map((patient) =>
      patient.id !== data.patient_id
        ? patient
        : { ...patient, clinics: newClinics }
    );
    this.setState({
      patients: updatedPatients,
    });
    // console.log("hi from dash", newAppointments);
  };

  // const handleClickOutside = (e) => {
  //   const { current: wrap } = wrapperRef;
  //   if (wrap && !wrap.contains(e.target)) {
  //     console.log("wrap", wrap);
  //     setFoundPatient({});
  //     setIsEdit(false);
  //   }
  //   console.log(`e target, ${e.target}`);
  //   console.log("e", e);
  // };

  // useEffect(() => {
  //   getPatients();
  //   // document.addEventListener("mousedown", handleClickOutside);

  //   // return () => {
  //   //   document.removeEventListener("mousedown", handleClickOutside);
  //   // };
  // }, []);

  componentDidMount() {
    this.getPatients();
  }

  editClick = (profile) => {
    console.log(profile);
    this.setState({
      foundPatient: profile,
      isEdit: true,
    });
    // setFoundPatient(profile);
    // setIsEdit(true);
  };

  resetEdit = () => {
    this.setState({
      foundPatient: {},
      isEdit: false,
    });
    // setFoundPatient({});
    // setIsEdit(false);
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
            <DashboardHeader
              currentUser={this.props.currentUser}
              handleLogout={this.props.handleLogout}
            />
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
              <button onClick={handleClick}>Signout</button>
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
                    <div
                      // ref={wrapperRef}
                      className="modal-content"
                    >
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
                          currentUser={this.props.currentUser}
                          resetEdit={this.resetEdit}
                          addPatient={this.addPatient}
                          updatePatient={this.updatePatient}
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
              currentUser={this.props.currentUser}
              patients={this.state.patients}
              handleLogout={this.props.handleLogout}
              addAppointment={this.addAppointment}
              addMedication={this.addMedication}
              addCondition={this.addCondition}
              addClinic={this.addClinic}
              removeAppointment={this.removeAppointment}
              removeMedication={this.removeMedication}
              removeCondition={this.removeCondition}
              removeClinic={this.removeClinic}
              updateAppointment={this.updateAppointment}
              updateMedication={this.updateMedication}
              updateCondition={this.updateCondition}
              updateClinic={this.updateClinic}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default AuthHOC(Dashboard);
