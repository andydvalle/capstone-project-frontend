export const fetchPatients = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PATIENTS" });
    fetch("http://localhost:3000/api/v1/patients")
      .then((resp) => resp.json())
      .then((respJSON) =>
        dispatch({ type: "FETCH_PATIENTS", patients: respJSON })
      );
  };
};
