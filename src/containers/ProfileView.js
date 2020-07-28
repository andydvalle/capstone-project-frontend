import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router-dom";
import Conditions from "./Conditions";
import Medications from "./Medications";
import Appointments from "./Appointments";
import HealthContacts from "./HealthContacts";
// import ProfileInfo from "../components/ProfileInfo";
import Today from "./Today";
import ThisWeek from "./ThisWeek";
import ThisMonth from "./ThisMonth";
import FormModal from "./FormModal";

class ProfileView extends Component {
  getProfile = () => {
    const id = this.props.match.params.id;
    let foundProfile = {};
    for (let patient of this.props.patients) {
      if (patient.id == id) {
        foundProfile = patient;
      }
    }
    return foundProfile;
  };

  render() {
    const foundProfile = this.getProfile();

    return (
      <div className="profile_view">
        {/* <ProfileInfo foundProfile={foundProfile} /> */}
        <Route
          render={(props) => (
            <Navbar
              {...props}
              currentUser={this.props.currentUser}
              patients={this.props.patients}
              handleLogout={this.props.handleLogout}
              foundProfile={foundProfile}
            />
          )}
        />
        {/* <Route
          path={`/dashboard/${foundProfile.id}/view`}
          render={(props) => (
            <ProfileInfo
              {...props}
              // patients={this.props.patients}
              foundProfile={foundProfile}
            />
          )}
        ></Route> */}
        <Route
          path={`/dashboard/${foundProfile.id}/view`}
          render={(props) => (
            <Today
              {...props}
              patients={this.props.patients}
              foundProfile={foundProfile}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${foundProfile.id}/thisWeek`}
          render={(props) => (
            <ThisWeek
              {...props}
              patients={this.props.patients}
              foundProfile={foundProfile}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${foundProfile.id}/calendar`}
          render={(props) => (
            <ThisMonth
              {...props}
              patients={this.props.patients}
              foundProfile={foundProfile}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${foundProfile.id}/appointments`}
          render={(props) => (
            <Appointments
              {...props}
              patients={this.props.patients}
              appointments={foundProfile.appointments}
              clinics={foundProfile.clinics}
              profileId={foundProfile.id}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${foundProfile.id}/medications`}
          render={(props) => (
            <Medications
              {...props}
              patients={this.props.patients}
              medications={foundProfile.medications}
              profileId={foundProfile.id}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${foundProfile.id}/conditions`}
          render={(props) => (
            <Conditions
              {...props}
              patients={this.props.patients}
              conditions={foundProfile.conditions}
              profileId={foundProfile.id}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${foundProfile.id}/contacts`}
          render={(props) => (
            <HealthContacts
              {...props}
              patients={this.props.patients}
              clinics={foundProfile.clinics}
              profileId={foundProfile.id}
            />
          )}
        ></Route>
        <FormModal foundProfile={foundProfile} profileId={foundProfile.id} />
      </div>
    );
  }
}

export default ProfileView;
