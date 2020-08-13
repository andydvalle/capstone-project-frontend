const patientsReducer = (state = { patients: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_PATIENTS":
      //debugger here => check if payload is coming in correctly
      return { ...state, patients: [...state.patients], loading: true };
    //EDIT patients case "PATIENTS_EDIT" return [...state, editPatient]
    //DELETE patients case FILTER""
    case "FETCH_PATIENTS":
      return { ...state, patients: action.patients, loading: false };
    default:
      return state;
  }
};

export default patientsReducer;
