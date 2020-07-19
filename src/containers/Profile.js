import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router-dom";
import Conditions from "./Conditions";
import Medications from "./Medications";
import Appointments from "./Appointments";
import HealthContacts from "./HealthContacts";
import FormModal from "./FormModal";
import { api } from "../services/api";

class Profile extends Component {

  getProfile = () => {
    const id = this.props.match.params.id;
    let foundProfile = {}
    for (let patient of this.props.patients) {
      if(patient.id == id){
        foundProfile = patient
      }
    }
    return foundProfile
  }

    render() {

      const {name} = this.getProfile()

        return (
          <div className="main_content">
          hi {name} from profile
            {/* <Route
              path="/:id/appointments"
              render={(props) => <Appointments />}
            ></Route>
            <Route
              path="/:id/medications"
              render={(props) => <Medications />}
            ></Route>
            <Route
              path="/:id/conditions"
              render={(props) => <Conditions />}
            ></Route>
            <Route
              path="/:id/contacts"
              render={(props) => <HealthContacts />}
            ></Route> */}
            <FormModal />
          </div>
        );
      }
    }

export default Profile