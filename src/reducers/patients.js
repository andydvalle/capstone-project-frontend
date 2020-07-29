const patientsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PATIENTS_SUCCESS":
      //debugger here => check if payload is coming in correctly
      return action.payload;
    //EDIT patients case "PATIENTS_EDIT" return [...state, editPatient]
    //DELETE patients case FILTER""
    default:
      return state;
  }
};

export default patientsReducer;
