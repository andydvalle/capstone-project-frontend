import axios from "axios";

export const fetchPatients = () => {
  return (dispatch) => {
    // dispatch(fetchPatientsRequest());
    axios
      .get("http://localhost:3000/api/v1/patients")
      .then((resp) => {
        const patients = resp.data;
        dispatch(fetchPatientsSuccess(patients));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchPatientsRequest = () => {
  return {
    type: "FETCH_PATIENTS_REQUEST",
  };
};

export const fetchPatientsSuccess = (patients) => {
  return {
    type: "FETCH_PATIENTS_SUCCESS",
    payload: patients,
  };
};

export const fetchPatientsFailure = (error) => {
  return {
    type: "FETCH_PATIENTS_FAILURE",
    payload: error,
  };
};
