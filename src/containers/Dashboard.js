import React, { Component } from "react";
import { Route } from "react-router-dom";
import AuthHOC from "../HOCs/AuthHOC";
import ProfileView from "./ProfileView";
import Profile from "./Profile";
import ProfileForm from "../components/ProfileForm";
import DashboardHeader from "../components/DashboardHeader";
import { api } from "../services/api";
import NoteList from "../svgs/NoteList";
import Ellipse1 from "../svgs/Ellipse1";
import { v4 as uuidv4 } from "uuid";

class Dashboard extends Component {
  state = {
    patients: [],
    foundProfile: {},
    isEdit: false,
  };

  componentDidMount() {
    this.getPatients();
  }

  getPatients = () => {
    api.patients.fetchPatients().then((data) => {
      this.setState({
        patients: data,
      });
    });
  };

  addPatient = (data) => {
    api.patients.postPatient(data).then((respJSON) =>
      this.setState({
        patients: [...this.state.patients, respJSON],
      })
    );
  };

  updatePatient = (data) => {
    api.patients.editPatient(data).then((respJSON) => {
      const newPatients = this.state.patients.map((patient) =>
        patient.id !== data.id ? patient : { ...patient, ...data }
      );
      this.setState({
        patients: newPatients,
      });
    });
  };

  removePatient = (patientId) => {
    api.patients.deletePatient(patientId).then((respJSON) => {
      const updatedPatients = this.state.patients.filter(
        (patient) => patient.id !== patientId
      );
      this.setState({
        patients: updatedPatients,
      });
    });
  };

  findPatient = (id) => {
    const foundPatient = this.state.patients.find(
      (patient) => patient.id === id
    );
    return foundPatient;
  };

  setPatients = (updatedPatients) => {
    this.setState({
      patients: updatedPatients,
    });
  };

  updatePatients = (id, key, value) => {
    const updatedPatients = this.state.patients.map((patient) => {
      if (key === "appointments") {
        return patient.id !== id
          ? patient
          : { ...patient, appointments: value };
      } else if (key === "medications") {
        return patient.id !== id ? patient : { ...patient, medications: value };
      } else if (key === "conditions") {
        return patient.id !== id ? patient : { ...patient, conditions: value };
      } else if (key === "clinics") {
        return patient.id !== id ? patient : { ...patient, clinics: value };
      } else {
        return patient;
      }
    });
    return updatedPatients;
  };

  addAppointment = (data) => {
    api.appointments.postAppointment(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newAppointments = [...foundPatient.appointments, data];
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "appointments",
        newAppointments
      );
      this.setPatients(updatedPatients);
    });
  };

  updateAppointment = (data) => {
    api.appointments.editAppointment(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newAppointments = foundPatient.appointments.map((appointment) =>
        appointment.id !== data.id ? appointment : data
      );
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "appointments",
        newAppointments
      );
      this.setPatients(updatedPatients);
    });
  };

  removeAppointment = (data) => {
    api.appointments.deleteAppointment(data.id).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newAppointments = foundPatient.appointments.filter(
        (appointment) => appointment.id !== data.id
      );
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "appointments",
        newAppointments
      );
      this.setPatients(updatedPatients);
    });
  };

  addMedication = (data) => {
    api.medications.postMedication(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newMedications = [...foundPatient.medications, data];
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "medications",
        newMedications
      );
      this.setPatients(updatedPatients);
    });
  };

  updateMedication = (data) => {
    api.medications.editMedication(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newMedications = foundPatient.medications.map((medication) =>
        medication.id !== data.id ? medication : data
      );
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "medications",
        newMedications
      );
      this.setPatients(updatedPatients);
    });
  };

  removeMedication = (data) => {
    api.medications.deleteMedication(data.id).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newMedications = foundPatient.medications.filter(
        (medication) => medication.id !== data.id
      );
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "medications",
        newMedications
      );
      this.setPatients(updatedPatients);
    });
  };

  addCondition = (data) => {
    api.conditions.postCondition(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newConditions = [...foundPatient.conditions, data];
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "conditions",
        newConditions
      );
      this.setPatients(updatedPatients);
    });
  };

  updateCondition = (data) => {
    api.conditions.editCondition(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newConditions = foundPatient.conditions.map((condition) =>
        condition.id !== data.id ? condition : data
      );
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "conditions",
        newConditions
      );
      this.setPatients(updatedPatients);
    });
  };

  removeCondition = (data) => {
    api.conditions.deleteCondition(data.id).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newConditions = foundPatient.conditions.filter(
        (condition) => condition.id !== data.id
      );
      const updatedPatients = this.updatePatients(
        data.patient_id,
        "conditions",
        newConditions
      );
      this.setPatients(updatedPatients);
    });
  };

  addClinic = (data) => {
    api.clinics.postClinic(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newClinics = [...foundPatient.clinics, data];
      const updatedPatients = this.state.patients.map((patient) =>
        patient.id !== data.patient_id
          ? patient
          : { ...patient, clinics: newClinics }
      );
      this.setPatients(updatedPatients);
    });
  };

  updateClinic = (data) => {
    api.clinics.editClinic(data).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newClinics = foundPatient.clinics.map((clinic) =>
        clinic.id !== data.id ? clinic : data
      );
      const updatedPatients = this.state.patients.map((patient) =>
        patient.id !== data.patient_id
          ? patient
          : { ...patient, clinics: newClinics }
      );
      this.setPatients(updatedPatients);
    });
  };

  removeClinic = (data) => {
    api.clinics.deleteClinic(data.id).then((respJSON) => {
      const foundPatient = this.findPatient(data.patient_id);
      const newClinics = foundPatient.clinics.filter(
        (clinic) => clinic.id !== data.id
      );
      const updatedPatients = this.state.patients.map((patient) =>
        patient.id !== data.patient_id
          ? patient
          : { ...patient, clinics: newClinics }
      );
      this.setPatients(updatedPatients);
    });
  };

  editClick = (profile) => {
    this.setState({
      foundProfile: profile,
      isEdit: true,
    });
  };

  resetEdit = () => {
    this.setState({
      foundProfile: {},
      isEdit: false,
    });
  };

  renderProfiles = () => {
    return this.state.patients.map((patient) => {
      return (
        <div>
          <Profile
            key={uuidv4()}
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
                          ? `Edit ${this.state.foundProfile.firstName}`
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
                          foundProfile={this.state.foundProfile}
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
