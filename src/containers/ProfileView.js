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
    const { name, id } = this.getProfile();

    return (
      <div>
        <Route
          render={(props) => (
            <Navbar
              {...props}
              currentUser={this.props.user}
              patients={this.props.patients}
              onHandleSignout={this.props.onHandleSignout}
              profileId={id}
            />
          )}
        />
        <Route
          path={`/dashboard/${id}/appointments`}
          render={(props) => (
            <Appointments
              {...props}
              patients={this.props.patients}
              profileId={id}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${id}/medications`}
          render={(props) => (
            <Medications
              {...props}
              patients={this.props.patients}
              profileId={id}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${id}/conditions`}
          render={(props) => (
            <Conditions
              {...props}
              patients={this.props.patients}
              profileId={id}
            />
          )}
        ></Route>
        <Route
          path={`/dashboard/${id}/contacts`}
          render={(props) => (
            <HealthContacts
              {...props}
              patients={this.props.patients}
              profileId={id}
            />
          )}
        ></Route>
        <FormModal patients={this.props.patients} profileId={id} />
      </div>
    );
  }
}

export default ProfileView;
