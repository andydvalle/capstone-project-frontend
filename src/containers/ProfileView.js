import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router-dom";
import Conditions from "./Conditions";
import Medications from "./Medications";
import Appointments from "./Appointments";
import HealthContacts from "./HealthContacts";
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
      <div>
        <Route
          render={(props) => (
            <Navbar
              {...props}
              currentUser={this.props.user}
              patients={this.props.patients}
              onHandleSignout={this.props.onHandleSignout}
              profileId={foundProfile.id}
            />
          )}
        />
        <Route
          path={`/dashboard/${foundProfile.id}/appointments`}
          render={(props) => (
            <Appointments
              {...props}
              patients={this.props.patients}
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
