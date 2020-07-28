import React, { useState, useEffect, useRef } from "react";
import { Route, Link } from "react-router-dom";
import AuthHOC from "../HOCs/AuthHOC";
import ProfileView from "./ProfileView";
import Profile from "./Profile";
import ProfileForm from "../components/ProfileForm";
import DashboardHeader from "../components/DashboardHeader";
import { api } from "../services/api";
import NoteList from "../svgs/NoteList";
import Ellipse1 from "../svgs/Ellipse1";

const Dashboard = (props) => {
  const [patients, setPatients] = useState([]);
  const [foundPatient, setFoundPatient] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  // const wrapperRef = useRef(null);

  // state = {
  //   patients: [],
  //   foundPatient: {},
  //   isEdit: false,
  // };

  // const handleClick = () => {
  //   props.onSignout();
  // };

  const getPatients = () => {
    api.patients.fetchPatients().then((data) => {
      setPatients(data);
    });
  };

  const removePatient = (patientId) => {
    console.log(patientId);
    const updatedPatients = patients.filter(
      (patient) => patient.id !== patientId
    );
    setPatients(updatedPatients);
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

  useEffect(() => {
    getPatients();
    // document.addEventListener("mousedown", handleClickOutside);

    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
  }, []);

  const editClick = (profile) => {
    console.log(profile);
    setFoundPatient(profile);
    setIsEdit(true);
  };

  const resetEdit = () => {
    setFoundPatient({});
    setIsEdit(false);
  };

  const renderProfiles = () => {
    return patients.map((patient) => {
      return (
        <div>
          <Profile
            key={patient.id}
            profile={patient}
            handleEditClick={editClick}
            removePatient={removePatient}
          />
        </div>
      );
    });
  };

  return (
    <div className="dashboard">
      {window.location.pathname === "/dashboard" ? (
        <>
          <DashboardHeader
            currentUser={props.currentUser}
            handleLogout={props.handleLogout}
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
              <div className="row">{renderProfiles()}</div>

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
                      {isEdit
                        ? `Edit ${foundPatient.firstName}`
                        : "New Profile"}
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" onClick={resetEdit}>
                          &times;
                        </span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <ProfileForm
                        foundProfile={foundPatient}
                        isEdit={isEdit}
                        currentUser={props.currentUser}
                        resetEdit={resetEdit}
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
            currentUser={props.currentUser}
            patients={patients}
            onHandleSignout={props.onSignout}
          />
        )}
      ></Route>
    </div>
  );
};

export default AuthHOC(Dashboard);
