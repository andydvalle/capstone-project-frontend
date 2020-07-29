import patientsReducer from "./patients";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  patients: patientsReducer,
});

export default allReducers;
